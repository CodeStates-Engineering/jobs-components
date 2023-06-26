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
  extends Pick<
      HTMLTagProps<'input'>,
      | 'placeholder'
      | 'onFocus'
      | 'id'
      | 'onClick'
      | 'onBlur'
      | 'ref'
      | 'name'
      | 'className'
    >,
    UseTypographyClassNameParams {
  type?: T;
  value?: T extends 'number' | 'large-number' ? number : string;
  disabled?: boolean | 'read-only';
  onChange?: (value: InputProps<T>['value']) => void;
  ref?: Ref<HTMLInputElement>;
}

const InputMain: <T extends InputType = 'text'>(
  props: InputProps<T>,
) => JSX.Element | null = forwardRef(
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
          `${styles.input} ${disabled === 'read-only' && styles['read-only']} ${
            type === 'button' && styles.button
          } ${value || styles.empty} ${typographyClassName} ${className}`,
        )}
        disabled={!!disabled}
        onChange={({ target: { value } }) =>
          onChange?.(convertChangeHandlerParam(value))
        }
      />
    );
  },
);

export const Input = Object.assign(InputMain, {
  Wrap: InputWrap,
});

export type { InputType };
