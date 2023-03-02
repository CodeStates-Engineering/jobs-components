import {
  useCallback as createCallback,
  useState as createState,
  useContext as getContext,
  useEffect as createEffect,
} from 'react';

import { ValidationContext } from './useValidationStore';

type Validation<_Value> = ((value: _Value) => string | undefined) | undefined;

export const useValidation = <_Value,>(
  value: _Value,
  validation: Validation<_Value>,
  storeKey?: string,
) => {
  if (!validation) {
    return {};
  }

  const [validationMessage, setValidationMessage] = createState<
    string | undefined
  >();

  const checkValidation = createCallback(
    (value: _Value) => setValidationMessage(validation(value)),
    [validation],
  );

  if (storeKey) {
    const store = getContext(ValidationContext);
    if (store) {
      createEffect(() => {
        store.set(storeKey, () => {
          const validationMessage = validation(value);
          setValidationMessage(validationMessage);
          return validationMessage;
        });
        return () => {
          store.delete(storeKey);
        };
      }, [validation, value, storeKey]);
    }
  }

  return {
    validationMessage,
    checkValidation,
  };
};
