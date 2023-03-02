import { InputContainer, Input, Label } from 'components/atoms';
import { useComponentSelfState } from 'hooks';

import styles from './index.module.scss';

import type {
  InputProps,
  InputContainerProps,
  InputType,
} from 'components/atoms';

export type TextboxProps<T extends InputType = 'text'> = Omit<
  InputProps<T> & InputContainerProps,
  'validationMessage' | 'name' | 'children'
> & {
  onlyUpdatedByParent?: boolean;
  label?: string;
  unit?: React.ReactNode;
};

export const Textbox = <T extends InputType = 'text'>({
  value: originalValue,
  unit,
  onlyUpdatedByParent,
  onChange,
  width = '300px',
  type,
  placeholder,
  disabled,
  onFocus,
  size,
  id,
  onClick,
  ref,
  label,
}: TextboxProps<T>) => {
  const [value, setValue] = useComponentSelfState(
    originalValue,
    onlyUpdatedByParent,
  );

  return (
    <div style={{ width }}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer width="100%" size={size}>
        <Input
          onClick={onClick}
          ref={ref}
          name={label}
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
        {typeof unit === 'string' ? (
          <div className={styles.unit}>{unit}</div>
        ) : (
          unit
        )}
      </InputContainer>
    </div>
  );
};
