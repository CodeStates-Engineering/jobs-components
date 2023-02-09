import { useComponentSelfState } from 'hooks/useComponentSelfState';

import styles from './index.module.scss';

export interface TextboxProps {
  value?: string | number | readonly string[];
  placeholder?: string;
  rightIcon?: React.ReactNode;
  onlyUpdatedByParent?: boolean;
  onChange?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  width?: React.CSSProperties['width'];
  validation?: (value: string) => string | undefined;
}

export const Textbox = ({
  value: originalValue,
  placeholder = '텍스트를 입력하세요.',
  rightIcon,
  onlyUpdatedByParent,
  onChange,
  onFocus,
  width = '300px',
  validation,
}: TextboxProps) => {
  const [value, setValue] = useComponentSelfState(
    originalValue ? String(originalValue) : '',
    onlyUpdatedByParent,
  );

  return (
    <div className={styles.textbox} style={{ width }}>
      <input
        className={styles['textbox-control']}
        onFocus={onFocus}
        value={value}
        placeholder={placeholder}
        onChange={({ target: { value } }) => {
          setValue?.(value);
          onChange?.(value);
          validation?.(value);
        }}
      />
      {rightIcon}
    </div>
  );
};
