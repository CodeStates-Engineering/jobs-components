import { useState, useContext, useEffect } from 'react';

import { ValidationContext } from '@contexts/ValidationContext';

export type ValidateHandler<TValue> =
  | ((value: TValue) => string | undefined)
  | undefined;

export type ValidationTrigger = 'onChange' | 'onBlur';

interface UseValidationMessageParams<TValue> {
  validationTrigger?: ValidationTrigger;
  key?: string;
  value: TValue;
  validateHandler: ValidateHandler<TValue>;
}

export const useValidationMessage = <TValue,>({
  key,
  value,
  validateHandler,
  validationTrigger = 'onBlur',
}: UseValidationMessageParams<TValue>) => {
  const validationContext = useContext(ValidationContext);

  const [validationMessage, setValidationMessage] = useState<string>();

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

  const validateOnTrigger = {
    onChange: {
      validateOnChange: (value: TValue) =>
        setValidationMessage(validateHandler?.(value)),
    },
    onBlur: {
      validateOnBlur: () => setValidationMessage(validateHandler?.(value)),
    },
  }[validationTrigger];

  return {
    ...validateOnTrigger,
    validationMessage,
  };
};
