import { FocusLayer, Options, Input, InputContainer } from 'components/atoms';
import { useComponentSelfState } from 'hooks';
import { regex } from 'utils';

import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
  Option,
} from 'components/atoms';

type BaseOptionsProps = OptionsProps<Option<string>, false>;

export type SearchboxProps = Omit<
  InputProps<'text'> & InputContainerProps,
  'type' | 'children' | 'validationMessage'
> &
  Pick<BaseOptionsProps, 'float'> & {
    selfFilter?: boolean;
    onlyUpdatedByParent?: boolean;
    options?: string[];
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

  return (
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      <InputContainer width={width} size={size} onClick={onClick}>
        <Input
          ref={ref}
          onChange={(value) => {
            setInputText?.(value);
            setOpened(true);
            onChange?.(value);
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
            setInputText?.(option?.label);
            setOpened(false);
            onChange?.(option?.label);
          }}
          float={float}
        />
      </InputContainer>
    </FocusLayer>
  );
};
