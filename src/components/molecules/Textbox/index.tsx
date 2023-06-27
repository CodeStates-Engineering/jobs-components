import { Input, Label } from '@components/atoms';
import type {
  InputProps,
  InputType,
  InputWrapProps,
  LabelContainerProps,
} from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler, UseTypographyClassNameParams } from '@hooks';

import styles from './index.module.scss';

type TextboxType = Exclude<InputType, 'button'>;

export interface TextboxProps<T extends TextboxType = 'text'>
  extends Pick<
    InputProps<T>,
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
  label?: string;
  unit?: React.ReactNode;
  validation?: ValidateHandler<TextboxProps<T>['value']>;
  labelStyle?: Pick<LabelContainerProps, 'direction'> &
    UseTypographyClassNameParams;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> &
    UseTypographyClassNameParams;
}

export const Textbox = <T extends TextboxType = 'text'>({
  value: originalValue,
  unit,
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
  className,
  onBlur,
  labelStyle,
  inputStyle,
}: TextboxProps<T>) => {
  const [value, setValue] = useSubscribedState(originalValue);

  const { validationMessage, validateValue } = useValidationMessage({
    validateHandler: validation,
    key: label,
    value,
  });

  return (
    <Label.WithInput
      className={className}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      label={label}
    >
      <Input.Wrap
        validationMessage={validationMessage}
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
            validateValue(value);
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
    </Label.WithInput>
  );
};
