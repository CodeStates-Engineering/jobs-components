import { Input, Label } from '@components/atoms';
import type {
  InputProps,
  InputType,
  InputWrapProps,
  LabelContainerProps,
} from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type {
  ValidateHandler,
  UseTypographyClassNameParams,
  ValidationTrigger,
} from '@hooks';

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
    | 'readOnly'
  > {
  label?: string;
  unit?: React.ReactNode;
  validation?: ValidateHandler<TextboxProps<T>['value']>;
  labelStyle?: Pick<LabelContainerProps, 'direction'> &
    UseTypographyClassNameParams;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> &
    UseTypographyClassNameParams & {
      fontColor?: string;
    };
  validationTrigger?: ValidationTrigger;
  description?: InputWrapProps['description'];
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
  validationTrigger,
  description,
  readOnly,
}: TextboxProps<T>) => {
  const [value, setValue] = useSubscribedState(originalValue);

  const { validationMessage, validateOnChange, validateOnBlur } =
    useValidationMessage({
      validateHandler: validation,
      key: label,
      value,
      validationTrigger,
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
        description={description}
        fontColor={inputStyle?.fontColor}
        readOnly={readOnly}
      >
        <Input
          fontSize={inputStyle?.fontSize}
          fontWeight={inputStyle?.fontWeight}
          onClick={onClick}
          onBlur={(e) => {
            validateOnBlur?.();
            onBlur?.(e);
          }}
          ref={ref}
          name={label}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={onFocus}
          value={value}
          id={id}
          onChange={(value) => {
            setValue?.(value);
            validateOnChange?.(value);
            onChange?.(value);
          }}
          type={type}
          readOnly={readOnly}
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
