import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { FocusLayer, Options, Input, Label } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type {
  InputProps,
  OptionsProps,
  ValidOptionValue,
  InputWrapProps,
  LabelContainerProps,
} from '../../atoms';

export interface SelectboxProps<
  _ValidOptionValue = ValidOptionValue,
  _Multiple = boolean,
> extends Pick<
      OptionsProps<_ValidOptionValue, _Multiple>,
      'options' | 'float' | 'onChange' | 'value' | 'multiple' | 'optionStyle'
    >,
    Pick<InputProps<'button'>, 'disabled' | 'placeholder' | 'id' | 'ref'>,
    Pick<InputWrapProps, 'onClick'> {
  label?: string;
  validation?: Validation<SelectboxProps<_ValidOptionValue>['value']>;
  validationSpace?: boolean;
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
  validationSpace,
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
      <Input.Container
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <Label.Container direction={labelStyle?.direction}>
          {label ? (
            <Label
              htmlFor={label}
              fontSize={labelStyle?.fontSize}
              fontWeight={labelStyle?.fontWeight}
            >
              {label}
            </Label>
          ) : null}
          <Input.Wrap
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
      </Input.Container>
    </FocusLayer>
  );
};
