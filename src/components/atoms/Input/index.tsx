import { cleanClassName } from 'utils';

import { useMemo } from 'react';

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
}

export const Input = <T extends InputType = 'text'>({
  type = 'text' as T,
  width = '100%',
  placeholder = 'Placeholder',
  disabled = false,
  value,
  onChange,
  ...inputProps
}: InputProps<T>) => {
  const convertChangeHandlerParam = useMemo(() => {
    switch (type) {
      case 'number':
      case 'large-number':
        return (value) => (value ? Number(value) : undefined);
      default:
        return (value) => value || undefined;
    }
  }, [type]) as (value: string) => InputProps<T>['value'] | undefined;

  const convertValue = useMemo(() => {
    switch (type) {
      case 'large-number':
        return (value) => (value ? value.toLocaleString() : '');
      default:
        return (value) => value ?? '';
    }
  }, [type]) as (value?: InputProps<T>['value']) => string | number;

  return (
    <input
      {...inputProps}
      type={type}
      disabled={!!disabled}
      placeholder={placeholder}
      value={convertValue(value)}
      style={{ width }}
      onChange={({ target: { value } }) =>
        onChange?.(convertChangeHandlerParam(value))
      }
      className={cleanClassName(
        `${styles.input} ${disabled === 'readonly' && styles.readonly}`,
      )}
    />
  );
};
