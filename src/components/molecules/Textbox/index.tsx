import { InputContainer, Input } from 'components/atoms';
import { useComponentSelfState } from 'hooks/useComponentSelfState';

import { useMemo } from 'react';

import styles from './index.module.scss';

type TextType = 'text' | 'number' | 'large-number' | 'password';

type ChangeHandlerParams<T extends TextType> =
  | (T extends 'number' | 'large-number' ? number : string)
  | undefined;

export interface TextboxProps<T extends TextType> {
  value?: string | number;
  placeholder?: string;
  children?: React.ReactNode;
  onlyUpdatedByParent?: boolean;
  onChange?: (value: ChangeHandlerParams<T>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  width?: React.CSSProperties['width'];
  type?: T;
}

export const Textbox = <T extends TextType>({
  value: originalValue = '',
  placeholder,
  children,
  onlyUpdatedByParent,
  onChange,
  onFocus,
  width = '300px',
  type,
}: TextboxProps<T>) => {
  const [value, setValue] = useComponentSelfState(
    originalValue,
    onlyUpdatedByParent,
  );

  const convertValueForView: (value: string | number) => string | number =
    useMemo(() => {
      switch (type) {
        case 'large-number':
          return (value) =>
            value === '' ? '' : Number(value).toLocaleString();
        default:
          return (value) => value;
      }
    }, [type]);

  const convertValueForChangeHandler = useMemo(() => {
    switch (type) {
      case 'large-number':
        return (value) =>
          value === '' ? undefined : Number(value.replace(/[^0-9]/g, ''));
      case 'number':
        return (value) => (value === '' ? undefined : Number(value));
      default:
        return (value) => value || undefined;
    }
  }, [type]) as (value: string) => ChangeHandlerParams<T>;

  return (
    <InputContainer width={width}>
      <Input
        onFocus={onFocus}
        value={convertValueForView(value)}
        placeholder={placeholder}
        onChange={(e) => {
          const value = convertValueForChangeHandler(e.target.value);
          setValue?.(value ?? '');
          onChange?.(value);
        }}
        type={type ?? 'text'}
      />
      {typeof children === 'string' ? (
        <div className={styles.unit}>{children}</div>
      ) : (
        children
      )}
    </InputContainer>
  );
};
