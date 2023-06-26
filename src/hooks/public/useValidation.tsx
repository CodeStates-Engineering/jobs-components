import {
  useCallback as createCallback,
  useState as createState,
  useContext as getContext,
  useEffect as createEffect,
} from 'react';

import { ValidationContext } from '../../utils';

export type Validation<TValue> =
  | ((value: TValue) => string | undefined)
  | undefined;

export const useValidation = <TValue,>(
  value: TValue,
  validation: Validation<TValue>,
  storeKey?: string,
) => {
  if (!validation) {
    return {};
  }

  const [validationMessage, setValidationMessage] = createState<
    string | undefined
  >();

  const checkValidation = createCallback(
    (value: TValue) => setValidationMessage(validation(value)),
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
