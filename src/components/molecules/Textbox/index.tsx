import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Input, Label } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type {
  InputProps,
  InputType,
  InputWrapProps,
  LabelContainerProps,
} from '../../atoms';

export interface TextboxProps<_InputType = Exclude<InputType, 'button'>>
  extends Pick<
    InputProps<_InputType>,
    | 'value'
    | 'onChange'
    | 'type'
    | 'placeholder'
    | 'disabled'
    | 'onFocus'
    | 'ref'
    | 'id'
    | 'onClick'
    | 'className'
    | 'onBlur'
  > {
  onlyUpdatedByParent?: boolean;
  label?: string;
  unit?: React.ReactNode;
  validation?: Validation<TextboxProps<_InputType>['value']>;
  validationSpace?: boolean;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> &
    Typography;
}

export const Textbox = <T extends Exclude<InputType, 'button'>>({
  value: originalValue,
  unit,
  onlyUpdatedByParent,
  onChange,
  type = 'text' as T,
  placeholder,
  disabled,
  onFocus,
  id,
  onClick,
  ref,
  label,
  validation,
  validationSpace,
  className,
  onBlur,
  labelStyle,
  inputStyle,
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
    <Input.Container
      validationMessage={validationMessage}
      validationSpace={validationSpace}
      className={cleanClassName(`${styles.textbox} ${className}`)}
    >
      <Label.Container direction={labelStyle?.direction}>
        {label ? (
          <Label
            fontSize={labelStyle?.fontSize}
            fontWeight={labelStyle?.fontWeight}
            htmlFor={label}
          >
            {label}
          </Label>
        ) : null}
        <Input.Wrap
          size={inputStyle?.size}
          borderRadius={inputStyle?.borderRadius}
          width={inputStyle?.width}
        >
          <Input
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
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
        </Input.Wrap>
      </Label.Container>
    </Input.Container>
  );
};
