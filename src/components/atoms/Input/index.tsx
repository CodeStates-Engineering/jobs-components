import type { Ref } from 'react';
import { useMemo, forwardRef } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export type InputType =
  | 'text'
  | 'number'
  | 'large-number'
  | 'password'
  | 'button';

export interface InputProps<T extends InputType = 'text'>
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'placeholder' | 'onFocus' | 'id' | 'onClick'
  > {
  type?: T;
  value?: T extends 'number' | 'large-number' ? number : string;
  disabled?: boolean | 'read-only';
  onChange?: (value: InputProps<T>['value']) => void;
  ref?: Ref<HTMLInputElement>;
  name?: string;
  className?: string;
}

export const Input: <T extends InputType = 'text'>(
  props: InputProps<T>,
) => JSX.Element | null = forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      disabled = false,
      value,
      onChange,
      onClick,
      id,
      onFocus,
      name,
      className,
    },
    ref,
  ) => {
    type Value = typeof value;

    const convertChangeHandlerParam = useMemo(() => {
      switch (type) {
        case 'number':
          return (value) => (value ? Number(value) : undefined);
        case 'large-number':
          return (value) =>
            value ? Number(value.replaceAll(',', '')) : undefined;
        default:
          return (value) => value || undefined;
      }
    }, [type]) as (value: string) => Value;

    const convertValue = useMemo(() => {
      switch (type) {
        case 'large-number':
          return (value) => {
            if (value === 0 || value) {
              const largeNumberString = value.toLocaleString();
              if (largeNumberString) {
                return largeNumberString;
              }

              return 0;
            }

            return '';
          };
        case 'button':
          return (value) => value || placeholder;
        default:
          return (value) => value ?? '';
      }
    }, [type, placeholder]) satisfies (value: Value) => number | string;

    return (
      <input
        id={id}
        name={name}
        ref={ref}
        onFocus={onFocus}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        value={convertValue(value)}
        className={cleanClassName(
          `${styles.input} ${disabled === 'read-only' && styles['read-only']} ${
            type === 'button' && styles.button
          } ${value || styles.empty} ${styles['default-width']} ${className}`,
        )}
        disabled={!!disabled}
        onChange={({ target: { value } }) =>
          onChange?.(convertChangeHandlerParam(value))
        }
      />
    );
  },
);
