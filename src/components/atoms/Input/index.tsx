import type { Ref } from 'react';
import { forwardRef } from 'react';

import {
  useTypographyClassName,
  useFormatedValue,
  useConvertChangeHandlerParam,
} from '@hooks';
import type { UseTypographyClassNameParams, InputType } from '@hooks';
import { cleanClassName } from '@utils';

import { InputWrap } from './InputWrap';
import styles from './index.module.scss';

export type { InputWrapProps } from './InputWrap';

export interface InputProps<T extends InputType = 'text'>
  extends Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'onChange' | 'size'
    >,
    UseTypographyClassNameParams {
  type?: T;
  value?: T extends 'number' | 'large-number' ? number : string;
  disabled?: boolean;
  onChange?: (value: InputProps<T>['value']) => void;
  ref?: Ref<HTMLInputElement>;
}

const InputMain: <T extends InputType = 'text'>(
  props: InputProps<T>,
) => React.ReactNode = forwardRef(
  (
    {
      type = 'text' as const,
      placeholder = '',
      disabled = false,
      value,
      onChange,
      onClick,
      id,
      onFocus,
      name,
      className,
      onBlur,
      fontSize,
      fontWeight,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const { typographyClassName } = useTypographyClassName({
      fontSize,
      fontWeight,
    });

    const { formatedValue, setIsDisplayFormatedValue } = useFormatedValue({
      type,
      value,
      placeholder,
    });

    const convertChangeHandlerParam =
      useConvertChangeHandlerParam<typeof value>(type);

    return (
      <input
        {...props}
        id={id}
        name={name}
        ref={ref}
        onFocus={(e) => {
          setIsDisplayFormatedValue(false);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsDisplayFormatedValue(true);
          onBlur?.(e);
        }}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        value={formatedValue}
        className={cleanClassName(
          `${styles.input} ${readOnly && styles['read-only']} ${
            type === 'button' && styles.button
          } ${value || styles.empty} ${typographyClassName} ${
            !!onClick && styles.clickable
          } ${className}`,
        )}
        disabled={!!disabled}
        onChange={({ target: { value } }) =>
          onChange?.(convertChangeHandlerParam(value))
        }
        readOnly={readOnly}
      />
    );
  },
);

export const Input = Object.assign(InputMain, {
  Wrap: InputWrap,
});

export type { InputType };
