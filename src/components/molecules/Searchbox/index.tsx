/* eslint-disable */

import { FocusLayer, Options, Input, InputContainer } from 'components/atoms';
import type { OptionsProps } from 'components/atoms';

import { useMemo, useState } from 'react';
import { useComponentSelfState } from 'hooks/useComponentSelfState';
import { Search } from 'react-feather';
import { regex } from 'utils';

export interface SearchboxProps
  extends Partial<Pick<OptionsProps<string>, 'float' | 'options' | 'width'>> {
  onChange?: (value: string) => void;
  selfFilter?: boolean;
  value?: string;
  onlyUpdatedByParent?: boolean;
}

export const Searchbox = ({
  float,
  value,
  width,
  options: originalOptions,
  onChange: changeHandler,
  selfFilter = true,
  onlyUpdatedByParent,
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
      <InputContainer width={width}>
        <Input
          onChange={({ target: { value } }) => {
            setInputText?.(value);
            changeHandler?.(value);
            setOpened(true);
          }}
          onFocus={() => setOpened(true)}
          value={inputText}
        />
        <Search />
        <Options
          opened={opened}
          options={options}
          width={width}
          onClick={(value) => {
            setInputText?.(value);
            changeHandler?.(value);
            setOpened(false);
          }}
          float={float}
        />
      </InputContainer>
    </FocusLayer>
  );
};
