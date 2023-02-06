import { useComponentSelfState } from 'hooks/useComponentSelfState';

import styles from './index.module.scss';

export interface TextboxProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[];
  placeholder?: string;
  rightIcon?: React.ReactNode;
  onlyUpdatedByParent?: boolean;
}

export const Textbox = ({
  onChange,
  value: originalValue,
  placeholder = '텍스트를 입력하세요.',
  rightIcon,
  onlyUpdatedByParent,
}: TextboxProps) => {
  const [value, targetValue] = useComponentSelfState(
    originalValue ? String(originalValue) : '',
    onlyUpdatedByParent,
  );

  return (
    <div className={styles.textbox}>
      <input
        className={styles['textbox-control']}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          targetValue?.(e.target.value);
          onChange?.(e);
        }}
      />
      {rightIcon}
    </div>
  );
};
