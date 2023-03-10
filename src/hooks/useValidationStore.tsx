import { createContext, useMemo } from 'react';

type ValidationStore = Map<string, () => string | undefined>;

export const ValidationContext = createContext<ValidationStore | null>(null);

export const useValidationStore = () =>
  useMemo(() => {
    const validationStore: ValidationStore = new Map();
    return {
      validationStore,
      provideValidationStore: (children: React.ReactNode) => (
        <ValidationContext.Provider value={validationStore}>
          {children}
        </ValidationContext.Provider>
      ),
      validateAll: () => {
        const result = {
          isValid: true,
          invalidKeys: [] as string[],
        };
        validationStore.forEach((validation, key) => {
          if (validation()) {
            result.isValid = false;
            result.invalidKeys.push(key);
          }
        });
        return result;
      },
    };
  }, []);

export type UseValidationStoreResult = ReturnType<typeof useValidationStore>;
