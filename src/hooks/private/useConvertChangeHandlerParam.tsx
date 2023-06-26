import { useMemo } from 'react';

import type { InputType } from './useFormatedValue';

const leftOnlyNumber = (value: string) => value.replace(/[^0-9]/g, '');

export const useConvertChangeHandlerParam = <T,>(type: InputType) =>
  useMemo(() => {
    switch (type) {
      case 'number':
      case 'large-number':
        return (value) => (value ? Number(leftOnlyNumber(value)) : undefined);

      case 'phone-number':
        return (value) => {
          let numberString = leftOnlyNumber(value);
          if (numberString.length > 11) {
            numberString = numberString.slice(0, 11);
          }
          return value ? numberString : undefined;
        };

      case 'business-number':
        return (value) => {
          let numberString = leftOnlyNumber(value);
          if (numberString.length > 10) {
            numberString = numberString.slice(0, 10);
          }
          return value ? numberString : undefined;
        };

      default:
        return (value) => value || undefined;
    }
  }, [type]) as (value: string) => T;
