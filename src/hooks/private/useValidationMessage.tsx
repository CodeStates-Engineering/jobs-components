import { useCallback, useState, useContext, useEffect } from 'react';

import { ValidationContext } from '@contexts/ValidationContext';

export type ValidateHandler<TValue> =
  | ((value: TValue) => string | undefined)
  | undefined;

interface UseValidationMessageParams<TValue> {
  key?: string;
  value: TValue;
  validateHandler: ValidateHandler<TValue>;
}

export const useValidationMessage = <TValue,>({
  key,
  value,
  validateHandler,
}: UseValidationMessageParams<TValue>) => {
  const validationContext = useContext(ValidationContext);

  const [validationMessage, setValidationMessage] = useState<string>();

  const validateValue = useCallback(
    (value: TValue) => setValidationMessage(validateHandler?.(value)),
    [validateHandler],
  );

  useEffect(() => {
    if (validationContext && key && validateHandler) {
      validationContext.set(key, () => {
        const validationMessage = validateHandler(value);
        setValidationMessage(validationMessage);
        return validationMessage;
      });

      return () => {
        validationContext.delete(key);
      };
    }
  }, [key, validateHandler, validationContext, value]);

  return {
    validationMessage,
    validateValue,
  };
};
