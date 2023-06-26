import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import { FocusLayer, Options, Input, Label } from '@components/atoms';
import type {
  InputProps,
  InputWrapProps,
  OptionsProps,
  LabelContainerProps,
} from '@components/atoms';
import { useSubscribedState, useValidation } from '@hooks';
import type { Validation, UseTypographyClassNameParams } from '@hooks';
import { cleanClassName, regex, getLabelSpace } from '@utils';

import styles from './index.module.scss';

export interface SearchboxProps
  extends OptionalPick<
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
    OptionalPick<OptionsProps<string, false>, 'float' | 'optionStyle'> {
  selfFilter?: boolean;
  options?: string[];
  label?: string;
  validation?: Validation<SearchboxProps['value']>;
  className?: string;
  inputStyle?: OptionalPick<InputWrapProps, 'size' | 'width' | 'borderRadius'> &
    UseTypographyClassNameParams;
  labelStyle?: OptionalPick<LabelContainerProps, 'direction'> &
    UseTypographyClassNameParams;
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
      <Label.Container direction={labelStyle?.direction}>
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
          onClick={onClick}
          size={inputStyle?.size}
          width={inputStyle?.width}
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
    </FocusLayer>
  );
};
