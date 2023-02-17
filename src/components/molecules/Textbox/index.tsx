import { InputContainer, Input } from 'components/atoms';
import { useComponentSelfState } from 'hooks';

import styles from './index.module.scss';

import type {
  InputProps,
  InputContainerProps,
  InputType,
} from 'components/atoms';

export type TextboxProps<T extends InputType = 'text'> = Omit<
  InputProps<T> & InputContainerProps,
  'validationMessage'
> & {
  onlyUpdatedByParent?: boolean;
};

export const Textbox = <T extends InputType = 'text'>({
  value: originalValue,
  children,
  onlyUpdatedByParent,
  onChange,
  width = '300px',
  type,
  placeholder,
  disabled,
  onFocus,
  size,
  id,
}: TextboxProps<T>) => {
  const [value, setValue] = useComponentSelfState(
    originalValue,
    onlyUpdatedByParent,
  );

  return (
    <InputContainer width={width} size={size}>
      <Input
        disabled={disabled}
        placeholder={placeholder}
        onFocus={onFocus}
        value={value}
        id={id}
        onChange={(value) => {
          setValue?.(value);
          onChange?.(value);
        }}
        type={type}
      />
      {typeof children === 'string' ? (
        <div className={styles.unit}>{children}</div>
      ) : (
        children
      )}
    </InputContainer>
  );
};
