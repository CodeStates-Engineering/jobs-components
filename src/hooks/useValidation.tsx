import { useEffect, useState } from 'react';

import { create } from 'zustand';

const createValidationStore = () => {
  const validationStore = new Map<string, () => boolean>();
  return {
    validationStore,
    checkValidations: () => {
      const invalidKeys: string[] = [];
      for (const [key, checkValidation] of validationStore) {
        if (!checkValidation()) {
          invalidKeys.push(key);
        }
      }
      const isValid = invalidKeys.length === 0;
      return { isValid, invalidKeys };
    },
    setValidation: (key: string, validation: () => boolean) =>
      validationStore.set(key, validation),
    deleteValidation: (key: string) => validationStore.delete(key),
  };
};

type ValidationStore = ReturnType<typeof createValidationStore>;

const validationStore = create<
  ValidationStore & {
    resetValidationStore: () => void;
  }
>((set) => ({
  ...createValidationStore(),
  resetValidationStore: () => set(createValidationStore()),
}));

export const useValidationStore = () => {
  const { resetValidationStore, ...useValidationStore } = validationStore();
  useEffect(() => resetValidationStore, [resetValidationStore]);
  return useValidationStore;
};

export type Validation<T> = (value: T) => string | null;

export const useValidation = <T,>(
  id: string,
  value: T,
  validation: Validation<T>,
) => {
  const [setValidation, deleteValidation] = validationStore((state) => [
    state.setValidation,
    state.deleteValidation,
  ]);

  const [validationMessage, setValidationMessage] = useState<string | null>(
    null,
  );

  useEffect(() => {
    setValidation(id, () => {
      const validationMessage = validation(value);
      setValidationMessage(validationMessage);
      return validationMessage === null;
    });

    return () => {
      deleteValidation(id);
    };
  }, [id, setValidation, validation, value, deleteValidation]);

  return {
    validate: (value: T) => setValidationMessage(validation(value)),
    validationMessage,
  };
};
