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
  rightIcon?: React.ReactNode;
  onlyUpdatedByParent?: boolean;
  onChange?: (value: ChangeHandlerParams<T>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  width?: React.CSSProperties['width'];
  validation?: (value: ChangeHandlerParams<T>) => string | undefined;
  type?: T;
}

export const Textbox = <T extends TextType>({
  value: originalValue = '',
  placeholder = '텍스트를 입력하세요.',
  rightIcon,
  onlyUpdatedByParent,
  onChange,
  onFocus,
  width = '300px',
  // validation,
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
    <div className={styles.textbox} style={{ width }}>
      <input
        className={styles['textbox-control']}
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
      {rightIcon}
    </div>
  );
};
