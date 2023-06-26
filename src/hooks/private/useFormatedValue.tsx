import { useState } from 'react';

export type InputType =
  | 'text'
  | 'number'
  | 'large-number'
  | 'phone-number'
  | 'business-number'
  | 'password'
  | 'button';

interface UseFormatedValueParams<T> {
  value: T;
  placeholder: string;
  type: InputType;
}

export const useFormatedValue = <T,>({
  type,
  value,
  placeholder,
}: UseFormatedValueParams<T>) => {
  const [isDisplayFormatedValue, setIsDisplayFormatedValue] = useState(true);

  return {
    formatedValue: (() => {
      if (!value) {
        if (type === 'button') {
          return placeholder;
        }
        if (value !== 0) {
          return '';
        }
      }

      const valueString = String(value);

      if (!isDisplayFormatedValue) {
        return valueString;
      }

      switch (type) {
        case 'number':
          return valueString;

        case 'large-number':
          return Number(valueString).toLocaleString();

        case 'phone-number':
          if (valueString.length === 10) {
            return valueString.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
          }
          return valueString.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

        case 'business-number':
          return valueString.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');

        default:
          return valueString;
      }
    })(),

    setIsDisplayFormatedValue,
  };
};
