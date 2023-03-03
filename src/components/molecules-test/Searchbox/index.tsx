import {
  FocusLayer,
  FocusLayerProps,
  Input,
  InputContainer,
  InputContainerProps,
  InputProps,
  Options,
  OptionsProps,
} from 'components/atoms';

import React, { useState } from 'react';
import { Search } from 'react-feather';

type ValidValue = string | number | null;

interface ObjectOption<T extends ValidValue> {
  label: string;
  value: T;
}

type SearchboxProps = Omit<
  FocusLayerProps & InputContainerProps,
  'children' | 'blur' | 'validationMessage'
> &
  Omit<InputProps, 'value' | 'ref'> &
  OptionsProps<ObjectOption<ValidValue>>;

/** Searchbox는 검색 결과를 통해 아이템을 선택할 수 있습니다. */
export const Searchbox = ({
  width,
  size,
  disabled,
  options,
  placeholder = '입력해주세요',
  float,
  onChange,
  onFocus,
}: SearchboxProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string | undefined>();

  const handleInputChange = (keyword: string | undefined) => {
    setKeyword(keyword);
    setActive(true);
  };

  const isOptionsOpened = () => active && !!keyword && keyword.length > 0;

  const includesKeyword = <T extends ValidValue>(option: ObjectOption<T>) =>
    !!keyword && option.label.toLowerCase().includes(keyword.toLowerCase());

  const getFilteredOptionsFor = (keyword: string | undefined) =>
    keyword ? options?.filter(includesKeyword) : undefined;

  const convertOptionToKeyword = (option: ObjectOption<ValidValue>) => {
    setKeyword(`${option.value}`);
  };

  const handleOptionsSelect = (option: ObjectOption<ValidValue>) => {
    convertOptionToKeyword(option);
    setActive(false);
    onChange?.(option.label);
  };

  const handleSearchboxClick = () => {
    if (disabled || active) {
      return;
    }
    if (keyword && keyword.length) {
      setActive(true);
    }
  };

  return (
    <div onClick={handleSearchboxClick}>
      <FocusLayer onClick={() => setActive(false)} focused={active}>
        <InputContainer width={width} size={size}>
          <Input
            value={keyword}
            onChange={handleInputChange}
            onFocus={onFocus}
            disabled={disabled}
            placeholder={placeholder}
          />
          <Search />
          <Options
            opened={isOptionsOpened()}
            options={getFilteredOptionsFor(keyword)}
            width={width}
            onSelect={handleOptionsSelect}
            value={keyword}
            float={float}
          />
        </InputContainer>
      </FocusLayer>
    </div>
  );
};
