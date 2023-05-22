import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { InputContainer, Input, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type {
  InputProps,
  InputContainerProps,
  InputType,
  InputContainerInteractionProps,
} from '../../atoms';

export type TextboxProps<_InputType extends InputType = 'text'> = Omit<
  InputProps<_InputType> & InputContainerProps,
  'validationMessage' | 'name' | 'children'
> &
  Omit<InputContainerInteractionProps, 'children'> & {
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
  borderRadius,
  onBlur,
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
    <div className={cleanClassName(`${styles.textbox} ${className}`)}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <InputContainer.Interaction size={size} borderRadius={borderRadius}>
          <Input
            onClick={onClick}
            onBlur={onBlur}
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
        </InputContainer.Interaction>
      </InputContainer>
    </div>
  );
};
