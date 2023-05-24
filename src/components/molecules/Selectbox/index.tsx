import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { FocusLayer, Options, Input, Label } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type {
  InputProps,
  OptionsProps,
  Option,
  InputWrapProps,
  LabelContainerProps,
} from '../../atoms';

export interface SelectboxProps<_Option extends Option = Option>
  extends Pick<OptionsProps<_Option>, 'options' | 'float'>,
    Pick<InputProps<'button'>, 'disabled' | 'placeholder' | 'id' | 'ref'>,
    Pick<InputWrapProps, 'onClick'> {
  onlyUpdatedByParent?: boolean;
  onChange?: OptionsProps<_Option>['onSelect'];
  value?: Exclude<OptionsProps<_Option>['value'], undefined>['value'];
  label?: string;
  validation?: Validation<SelectboxProps<_Option>['value']>;
  validationSpace?: boolean;
  className?: string;
  inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'size' | 'width'> &
    Typography;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}

export const Selectbox = <_Option extends Option = Option>({
  value,
  options,
  onChange,
  float,
  onlyUpdatedByParent,
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
}: SelectboxProps<_Option>) => {
  const [opened, setOpened] = useState(false);

  const [selectedValue, setSelectedValue] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const selectedOption = options?.find(({ value }) => value === selectedValue);

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <FocusLayer
      onClick={() => setOpened(false)}
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
          value={selectedOption}
          float={float}
          className={styles['select-box-default-width']}
          onSelect={(option) => {
            const optionForSelect =
              option === selectedOption ? undefined : option;
            const value = optionForSelect?.value;
            setSelectedValue?.(value);
            checkValidation?.(value);
            onChange?.(optionForSelect);
            setOpened(false);
          }}
        />
      </Input.Container>
    </FocusLayer>
  );
};
