import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import { useComponentSelfState, useValidation } from '../../../hooks';
import { regex } from '../../../utils';
import { FocusLayer, Options, Input, InputContainer, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
  Option,
} from '../../atoms';

type BaseOptionsProps = OptionsProps<Option<string>, false>;

export type SearchboxProps = Omit<
  InputProps<'text'> & InputContainerProps,
  'type' | 'children' | 'validationMessage' | 'name'
> &
  Partial<Pick<BaseOptionsProps, 'float'>> & {
    selfFilter?: boolean;
    onlyUpdatedByParent?: boolean;
    options?: string[];
    label?: string;
    validation?: Validation<SearchboxProps['value']>;
    validationSpace?: boolean;
  };

export const Searchbox = ({
  float,
  value,
  width,
  options: stringOptions,
  onChange,
  selfFilter = true,
  onlyUpdatedByParent,
  disabled,
  placeholder,
  onFocus,
  size,
  id,
  onClick,
  ref,
  label,
  validation,
  validationSpace,
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputText, setInputText] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

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
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        width={width}
        size={size}
        onClick={onClick}
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <Input
          name={label}
          ref={ref}
          onChange={(value) => {
            setOpened(true);
            handleChange(value);
          }}
          onClick={() => {
            setOpened(true);
          }}
          onFocus={onFocus}
          id={id}
          value={inputText}
          disabled={disabled}
          placeholder={placeholder}
        />
        <Search />
        <Options
          opened={opened}
          options={options}
          width={width}
          value={
            inputText
              ? {
                  label: inputText,
                  value: inputText,
                }
              : undefined
          }
          onSelect={(option) => {
            setOpened(false);
            handleChange(option?.value);
          }}
          float={float}
        />
      </InputContainer>
    </FocusLayer>
  );
};
