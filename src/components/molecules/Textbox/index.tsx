import { InputContainer, Input } from 'components/atoms';
import { useComponentSelfState, useValidation } from 'hooks';

import styles from './index.module.scss';

import type {
  InputProps,
  InputContainerProps,
  InputType,
} from 'components/atoms';
import type { Validation } from 'hooks';

export type TextboxProps<T extends InputType = 'text'> = Omit<
  InputProps<T> & InputContainerProps,
  'validationMessage'
> & {
  onlyUpdatedByParent?: boolean;
  validation?: Validation<TextboxProps<T>['value']>;
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
  validation,
  id,
}: TextboxProps<T>) => {
  const [value, setValue] = useComponentSelfState(
    originalValue,
    onlyUpdatedByParent,
  );

  const { validate, validationMessage } = useValidation(value, validation, id);

  return (
    <InputContainer
      width={width}
      validationMessage={validationMessage}
      size={size}
    >
      <Input
        disabled={disabled}
        placeholder={placeholder}
        onFocus={onFocus}
        value={value}
        onChange={(value) => {
          setValue?.(value);
          onChange?.(value);
          validate?.(value);
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
