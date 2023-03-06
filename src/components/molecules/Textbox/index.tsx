import { InputContainer, Input, Label } from '@components/atoms';
import type {
  InputProps,
  InputContainerProps,
  InputType,
} from '@components/atoms';
import { useComponentSelfState, useValidation } from '@hooks';
import type { Validation } from '@hooks';

import styles from './index.module.scss';

export type TextboxProps<_InputType extends InputType = 'text'> = Omit<
  InputProps<_InputType> & InputContainerProps,
  'validationMessage' | 'name' | 'children'
> & {
  onlyUpdatedByParent?: boolean;
  label?: string;
  unit?: React.ReactNode;
  validation?: Validation<TextboxProps<_InputType>['value']>;
  validationSpace?: boolean;
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
  validation,
  validationSpace,
}: TextboxProps<T>) => {
  const [value, setValue] = useComponentSelfState(
    originalValue,
    onlyUpdatedByParent,
  );

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <div style={{ width }}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        width="100%"
        size={size}
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
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
            checkValidation?.(value);
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
