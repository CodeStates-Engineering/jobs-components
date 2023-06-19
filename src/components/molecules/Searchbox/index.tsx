import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { cleanClassName, regex } from '../../../utils';
import { FocusLayer, Options, Input, Label } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type {
  InputProps,
  InputWrapProps,
  OptionsProps,
  LabelContainerProps,
} from '../../atoms';

export interface SearchboxProps
  extends Pick<
      InputProps<'text'>,
      | 'value'
      | 'onChange'
      | 'disabled'
      | 'placeholder'
      | 'onFocus'
      | 'onClick'
      | 'id'
      | 'ref'
    >,
    Pick<OptionsProps<string, false>, 'float' | 'optionStyle'> {
  selfFilter?: boolean;
  options?: string[];
  label?: string;
  validation?: Validation<SearchboxProps['value']>;
  validationSpace?: boolean;
  className?: string;
  inputStyle?: Pick<InputWrapProps, 'size' | 'width' | 'borderRadius'> &
    Typography;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
  hasSearchIcon?: boolean;
}

export const Searchbox = ({
  float,
  value,
  options: stringOptions,
  onChange,
  selfFilter = true,
  disabled,
  placeholder,
  onFocus,
  id,
  onClick,
  ref,
  label,
  validation,
  validationSpace,
  className,
  inputStyle,
  labelStyle,
  optionStyle,
  hasSearchIcon = true,
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputText, setInputText] = useSubscribedState(value);

  const options = useMemo(() => {
    const options = stringOptions?.map((value) => ({
      label: value,
      value,
    }));

    if (!selfFilter || !options || !inputText) {
      return options;
    }

    const standardizeString = (value: string) =>
      value.toLowerCase().replace(regex.symbols, '');

    const standardizeInputTextArray = inputText
      .split(' ')
      .map((value) => standardizeString(value));

    return options.filter(({ value }) => {
      const standardizeOption = standardizeString(value);
      return standardizeInputTextArray.every((inputText) =>
        standardizeOption.includes(inputText),
      );
    });
  }, [selfFilter, inputText, stringOptions]);

  const { validationMessage, checkValidation } = useValidation(
    inputText,
    validation,
    label || id,
  );

  const handleChange = (value?: string) => {
    setInputText?.(value);
    onChange?.(value);
    checkValidation?.(value);
  };

  return (
    <FocusLayer
      onBlur={() => setOpened(false)}
      focused={opened}
      className={cleanClassName(`${styles.searchbox} ${className}`)}
      bodyScroll
    >
      <Input.Container
        validationMessage={validationMessage}
        validationSpace={validationSpace}
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
            onClick={onClick}
            size={inputStyle?.size}
            borderRadius={inputStyle?.borderRadius}
          >
            <Input
              name={label}
              ref={ref}
              onChange={(value) => {
                setOpened(true);
                handleChange(value);
              }}
              fontSize={inputStyle?.fontSize}
              fontWeight={inputStyle?.fontWeight}
              onClick={() => setOpened(true)}
              onFocus={onFocus}
              id={id}
              value={inputText}
              disabled={disabled}
              placeholder={placeholder}
            />
            {hasSearchIcon ? <Search /> : null}
          </Input.Wrap>
        </Label.Container>
        <Options
          optionStyle={optionStyle}
          opened={opened}
          options={options}
          value={inputText}
          onChange={(value) => {
            setOpened(false);
            handleChange(value);
          }}
          float={float}
        />
      </Input.Container>
    </FocusLayer>
  );
};
