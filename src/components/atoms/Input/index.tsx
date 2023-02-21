import { cleanClassName } from 'utils';

import { useMemo, forwardRef, Ref } from 'react';

import styles from './index.module.scss';

export type InputType = 'text' | 'number' | 'large-number' | 'password';

export interface InputProps<T extends InputType = 'text'>
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'placeholder' | 'onFocus' | 'id'
  > {
  type?: T;
  value?: T extends 'number' | 'large-number' ? number : string;
  width?: React.CSSProperties['width'];
  disabled?: boolean | 'readonly';
  onChange?: (value: InputProps<T>['value']) => void;
  ref?: Ref<HTMLInputElement>;
}

export const Input: <T extends InputType = 'text'>(
  props: InputProps<T>,
) => JSX.Element | null = forwardRef(
  (
    {
      type = 'text',
      width = '100%',
      placeholder = 'Placeholder',
      disabled = false,
      value,
      onChange,
      id,
      onFocus,
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
          return (value) => (value ? value.toLocaleString() : value ?? '');
        default:
          return (value) => value ?? '';
      }
    }, [type]) satisfies (value: Value) => number | string;

    return (
      <input
        id={id}
        ref={ref}
        onFocus={onFocus}
        type={type}
        disabled={!!disabled}
        placeholder={placeholder}
        value={convertValue(value)}
        style={{ width }}
        onChange={({ target: { value } }) => {
          onChange?.(convertChangeHandlerParam(value));
        }}
        className={cleanClassName(
          `${styles.input} ${disabled === 'readonly' && styles.readonly}`,
        )}
      />
    );
  },
);
