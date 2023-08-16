import { useState, useContext, useEffect, useMemo } from 'react';

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
  requireMessage?: string;
  validateHandler: ValidateHandler<TValue>;
}

export const useValidationMessage = <TValue,>({
  key,
  value,
  validateHandler,
  requireMessage,
  validationTrigger = 'onBlur',
}: UseValidationMessageParams<TValue>) => {
  const validationContext = useContext(ValidationContext);

  const [validationMessage, setValidationMessage] = useState<string>();

  const handleValidate: ValidateHandler<TValue> = useMemo(() => {
    if (!requireMessage && !validateHandler) {
      return undefined;
    }

    if (validateHandler && isAsync(validateHandler)) {
      return async (value) => {
        if (!value && requireMessage) {
          return requireMessage;
        }
        const validationMessage = await validateHandler(value);
        return validationMessage;
      };
    }

    return (value) => {
      if (!value && requireMessage) {
        return requireMessage;
      }
      const validationMessage = validateHandler?.(value);
      return validationMessage;
    };
  }, [requireMessage, validateHandler]);

  useEffect(() => {
    if (validationContext && key && handleValidate) {
      validationContext.set(
        key,
        isAsync(handleValidate)
          ? async () => {
              const validationMessage = await handleValidate(value);
              setValidationMessage(validationMessage);
              return validationMessage;
            }
          : () => {
              const validationMessage = handleValidate(
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
  }, [handleValidate, key, validationContext, value]);

  const validateOnTrigger = {
    onChange: {
      validateOnChange: async (value: TValue) =>
        setValidationMessage(await handleValidate?.(value)),
    },
    onBlur: {
      validateOnBlur: async () =>
        setValidationMessage(await handleValidate?.(value)),
    },
  }[validationTrigger];

  return {
    ...validateOnTrigger,
    validationMessage,
    isRequried: !!requireMessage,
  };
};
