import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import type {
  InputProps,
  OptionsProps,
  ValidOptionValue,
  InputWrapProps,
  LabelContainerProps,
} from '@components/atoms';
import { FocusLayer, Options, Input, Label } from '@components/atoms';
import type { Validation, Typography } from '@hooks';
import { useSubscribedState, useValidation } from '@hooks';
import { cleanClassName, getLabelSpace } from '@utils';

import styles from './index.module.scss';

export interface SelectboxProps<
  _ValidOptionValue = ValidOptionValue,
  _Multiple = boolean,
> extends OptionalPick<
      OptionsProps<_ValidOptionValue, _Multiple>,
      'options' | 'float' | 'onChange' | 'value' | 'multiple' | 'optionStyle'
    >,
    OptionalPick<
      InputProps<'button'>,
      'disabled' | 'placeholder' | 'id' | 'ref'
    >,
    OptionalPick<InputWrapProps, 'onClick'> {
  label?: string;
  validation?: Validation<SelectboxProps<_ValidOptionValue>['value']>;

  className?: string;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'size' | 'width'> &
    Typography;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
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
}: SelectboxProps<_ValidOptionValue, _Multiple>) => {
  const [opened, setOpened] = useState(false);

  const [selectedValue, setSelectedValue] = useSubscribedState(value);

  const selectedOption = options?.find(({ value }) => value === selectedValue);

  const { validationMessage, checkValidation } = useValidation(
    selectedValue,
    validation,
    label || id,
  );

  return (
    <FocusLayer
      onBlur={() => setOpened(false)}
      focused={opened}
      className={cleanClassName(`${styles.selectbox} ${className}`)}
      bodyScroll
    >
      <Label.Container direction={labelStyle?.direction}>
        {label ? (
          <Label
            htmlFor={label}
            space={getLabelSpace(labelStyle?.direction, inputStyle?.size)}
            fontSize={labelStyle?.fontSize}
            fontWeight={labelStyle?.fontWeight}
          >
            {label}
          </Label>
        ) : null}
        <Input.Wrap
          validationMessage={validationMessage}
          size={inputStyle?.size}
          borderRadius={inputStyle?.borderRadius}
          width={inputStyle?.width}
          onClick={(e) => {
            setOpened(!opened);
            onClick?.(e);
          }}
        >
          <Input
            id={id}
            name={label}
            type="button"
            ref={ref}
            value={selectedOption?.label}
            disabled={disabled}
            placeholder={placeholder}
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
          />
          <ChevronDown
            className={cleanClassName(
              `${styles.arrow} ${opened && styles['opened-arrow']}`,
            )}
          />
        </Input.Wrap>
      </Label.Container>
      <Options
        opened={opened}
        options={options}
        multiple={multiple}
        value={selectedValue}
        float={float}
        className={styles['select-box-default-width']}
        optionStyle={optionStyle}
        onChange={(value) => {
          setSelectedValue?.(value);
          checkValidation?.(value);
          onChange?.(value);
          setOpened(false);
        }}
      />
    </FocusLayer>
  );
};
