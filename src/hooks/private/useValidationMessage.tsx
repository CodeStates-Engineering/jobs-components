import { useState, useContext, useEffect } from 'react';

import { ValidationContext } from '@contexts/ValidationContext';
import type { ValidationResult } from '@contexts/ValidationContext';
import { isAsync } from '@utils';

export type ValidateHandler<TValue> =
  | ((value: TValue) => ValidationResult | Promise<ValidationResult>)
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
      validationContext.set(
        key,
        isAsync(validateHandler)
          ? async () => {
              const validationMessage = await validateHandler(value);
              setValidationMessage(validationMessage);
              return validationMessage;
            }
          : () => {
              const validationMessage = validateHandler(
                value,
              ) as ValidationResult;
              setValidationMessage(validationMessage);
              return validationMessage;
            },
      );

      return () => {
        validationContext.delete(key);
      };
    }
  }, [key, validateHandler, validationContext, value]);

  const validateOnTrigger = {
    onChange: {
      validateOnChange: async (value: TValue) =>
        setValidationMessage(await validateHandler?.(value)),
    },
    onBlur: {
      validateOnBlur: async () =>
        setValidationMessage(await validateHandler?.(value)),
    },
  }[validationTrigger];

  return {
    ...validateOnTrigger,
    validationMessage,
  };
};
