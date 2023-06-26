import { Input, Label } from '@components/atoms';
import type {
  InputProps,
  InputType,
  InputWrapProps,
  LabelContainerProps,
} from '@components/atoms';
import { useSubscribedState, useValidation } from '@hooks';
import type { Validation, UseTypographyClassNameParams } from '@hooks';
import { getLabelSpace } from '@utils';

import styles from './index.module.scss';

type TextboxType = Exclude<InputType, 'button'>;

export interface TextboxProps<T extends TextboxType = 'text'>
  extends OptionalPick<
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
  validation?: Validation<TextboxProps<T>['value']>;
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

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <Label.Container direction={labelStyle?.direction} className={className}>
      {label ? (
        <Label
          fontSize={labelStyle?.fontSize}
          fontWeight={labelStyle?.fontWeight}
          space={getLabelSpace(labelStyle?.direction, inputStyle?.size)}
          htmlFor={label}
        >
          {label}
        </Label>
      ) : null}
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
  );
};
