import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { InputContainer, Input, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, InputType } from '../../atoms';

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
  className,
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
    <div className={className}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
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
