import { FocusLayer, Options, Input, InputContainer } from 'components/atoms';
import { useComponentSelfState } from 'hooks';
import { regex } from 'utils';

import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
} from 'components/atoms';

export type SearchboxProps = Omit<
  InputProps<'text'> & InputContainerProps,
  'type' | 'children' | 'validationMessage'
> &
  Pick<OptionsProps<string>, 'float' | 'options' | 'width'> & {
    selfFilter?: boolean;
    onlyUpdatedByParent?: boolean;
  };

export const Searchbox = ({
  float,
  value,
  width,
  options: originalOptions,
  onChange,
  selfFilter = true,
  onlyUpdatedByParent,
  disabled,
  placeholder,
  onFocus,
  size,
  id,
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputText, setInputText] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const options = useMemo(() => {
    if (!selfFilter || !originalOptions || !inputText) {
      return originalOptions;
    }
    const standardizeString = (value: string) =>
      value.toLowerCase().replace(regex.symbols, '');

    const standardizeInputTextArray = inputText
      .split(' ')
      .map((value) => standardizeString(value));

    return originalOptions.filter((option) => {
      const standardizeOption = standardizeString(option);
      return standardizeInputTextArray.every((inputText) =>
        standardizeOption.includes(inputText),
      );
    });
  }, [selfFilter, inputText, originalOptions]);

  return (
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      <InputContainer width={width} size={size}>
        <Input
          onChange={(value) => {
            setInputText?.(value);
            setOpened(true);
            onChange?.(value);
          }}
          onFocus={(e) => {
            setOpened(true);
            onFocus?.(e);
          }}
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
          value={inputText}
          onSelect={({ value }) => {
            setInputText?.(value);
            setOpened(false);
            onChange?.(value);
          }}
          float={float}
        />
      </InputContainer>
    </FocusLayer>
  );
};
