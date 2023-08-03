import { useContext, useRef } from 'react';

import { ValidationContext } from '@contexts/ValidationContext';
import type { ValidationContextValue } from '@contexts/ValidationContext';

interface ValidateOptions {
  scrollToFirstInvalid?: boolean;
}

export const useValidate = () => {
  const validationContext = useContext(ValidationContext);

  const { current } = useRef(
    (() => {
      const scrollToFirstInvalid = (
        invalidElementIds: string[],
        options?: ValidateOptions,
      ) => {
        const scrollToFirstInvalid = options?.scrollToFirstInvalid ?? true;

        if (scrollToFirstInvalid && !invalidElementIds.length) {
          const [firstInvalidElementId] = invalidElementIds;

          const firstInvalidElement = document.getElementById(
            firstInvalidElementId,
          );

          firstInvalidElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      };

      return {
        validationContext,

        validate: (options?: ValidateOptions) => {
          const invalidElementIds: string[] = [];

          validationContext?.forEach((validateOnChange, id) => {
            if (validateOnChange()) {
              invalidElementIds.push(id);
            }
          });

          scrollToFirstInvalid(invalidElementIds, options);

          return {
            isValid: !invalidElementIds.length,
            invalidElementIds,
          };
        },

        validateAsync: async (options?: ValidateOptions) => {
          const idList: string[] = [];

          const validationMessageList = await Promise.all(
            Array.from(validationContext?.entries() || []).map(
              ([id, validateOnChange]) => {
                idList.push(id);
                return validateOnChange();
              },
            ),
          );

          const invalidElementIds = idList.filter(
            (_, index) => validationMessageList[index],
          );

          scrollToFirstInvalid(invalidElementIds, options);

          return {
            isValid: validationMessageList.every((message) => !message),
            invalidElementIds,
          };
        },
      };
    })(),
  );

  return current;
};

export const validationObserver = <T extends object>(
  Component: (props: T) => JSX.Element | null,
) => {
  const validationStore: ValidationContextValue = new Map();
  // eslint-disable-next-line react/function-component-definition
  return (props: T) => (
    <ValidationContext.Provider value={validationStore}>
      <Component {...props} />
    </ValidationContext.Provider>
  );
};
