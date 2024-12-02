import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import type {
  InputProps,
  OptionsProps,
  ValidOptionValue,
  InputWrapProps,
  LabelWithInputProps,
} from '@components/atoms';
import { FocusLayer, Options, Input, Label } from '@components/atoms';
import type { ValidateHandler, UseTypographyClassNameParams } from '@hooks';
import { useSubscribedState, useValidationMessage } from '@hooks';

import styles from './index.module.scss';

export interface SelectboxProps<
  _ValidOptionValue = ValidOptionValue,
  _Multiple = boolean,
> extends Pick<
      OptionsProps<_ValidOptionValue, _Multiple>,
      | 'options'
      | 'float'
      | 'onChange'
      | 'value'
      | 'multiple'
      | 'optionStyle'
      | 'textEllipsis'
    >,
    Pick<InputProps<'button'>, 'disabled' | 'placeholder' | 'id' | 'ref'>,
    Pick<InputWrapProps, 'onClick' | 'readOnly'>,
    Omit<LabelWithInputProps, 'children'> {
  validation?: ValidateHandler<SelectboxProps<_ValidOptionValue>['value']>;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'size' | 'width'> &
    UseTypographyClassNameParams;
  description?: InputWrapProps['description'];
  cancelable?: boolean;
  requireMessage?: string;
}

export const Selectbox = <
  _ValidOptionValue extends ValidOptionValue = ValidOptionValue,
  _Multiple extends boolean = false,
>({
  value,
  options,
  onChange,
  float,
  disabled,
  placeholder,
  id,
  ref,
  onClick,
  label,
  validation,
  className,
  inputStyle,
  labelStyle,
  multiple,
  optionStyle,
  description,
  readOnly,
  cancelable = true,
  textEllipsis,
  requireMessage,
}: SelectboxProps<_ValidOptionValue, _Multiple>) => {
  const [opened, setOpened] = useState(false);

  const [selectedValue, setSelectedValue] = useSubscribedState(value);

  const selectedOption = options?.find(({ value }) => value === selectedValue);

  const { validationMessage, validateOnChange, isRequried } =
    useValidationMessage({
      key: label,
      validateHandler: validation,
      value: selectedValue,
      validationTrigger: 'onChange',
      requireMessage,
    });

  return (
    <Label.WithInput
      label={label}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      className={className}
      required={isRequried}
    >
      <FocusLayer
        onBlur={() => setOpened(false)}
        focused={opened}
        bodyScroll
        className={styles['layer-width']}
      >
        <Input.Wrap
          validationMessage={validationMessage}
          size={inputStyle?.size}
          borderRadius={inputStyle?.borderRadius}
          width={inputStyle?.width}
          disabled={disabled}
          onClick={(e) => {
            setOpened(!opened);
            onClick?.(e);
          }}
          description={description}
          className={styles['align-end']}
          readOnly={readOnly}
        >
          <Input
            id={id}
            name={label}
            type="button"
            ref={ref}
            value={selectedOption?.label}
            disabled={disabled || readOnly}
            placeholder={placeholder}
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
            readOnly={readOnly}
          />
          <ChevronDown />
        </Input.Wrap>
        <Options
          cancelable={cancelable}
          opened={opened}
          options={options}
          multiple={multiple}
          value={selectedValue}
          float={float}
          optionStyle={optionStyle}
          onChange={(value) => {
            setSelectedValue?.(value);
            validateOnChange?.(value);
            onChange?.(value);
            if (!multiple) {
              setOpened(false);
            }
          }}
          textEllipsis={textEllipsis}
        />
      </FocusLayer>
    </Label.WithInput>
  );
};
