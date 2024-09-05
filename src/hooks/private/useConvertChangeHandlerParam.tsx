import { useMemo } from 'react';

import type { InputType } from './useFormatedValue';

const leftOnlyNumber = (value: string) => value.replace(/[^0-9]/g, '');

export const useConvertChangeHandlerParam = <T,>(type: InputType) =>
  useMemo(() => {
    switch (type) {
      case 'number':
      case 'large-number':
        return (value) => leftOnlyNumber(value);

      case 'phone-number':
        return (value) => {
          let numberString = leftOnlyNumber(value);
          if (numberString.length > 11) {
            numberString = numberString.slice(0, 11);
          }
          return value ? numberString : '';
        };

      case 'business-number':
        return (value) => {
          let numberString = leftOnlyNumber(value);
          if (numberString.length > 10) {
            numberString = numberString.slice(0, 10);
          }
          return value ? numberString : '';
        };

      default:
        return (value) => value;
    }
  }, [type]) as (value: string) => T;
