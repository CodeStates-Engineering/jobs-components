/* eslint-disable */
import { FocusLayer, Textbox, Options } from 'components/atoms';
import type { OptionsProps } from 'components/atoms';
import styles from './index.module.scss';
import { useCallback, useMemo, useState } from 'react';
import { useComponentSelfState } from 'hooks/useComponentSelfState';
import { Search } from 'react-feather';

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
      value.toLowerCase().replace(/[^a-z0-9가-힣]/gi, '');

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
      <div className={styles['searchbox-wrap']} style={{ width }}>
        <Textbox
          onFocus={() => setOpened(true)}
          value={inputText}
          onChange={(value) => {
            setInputText?.(value);
            changeHandler?.(value);
            setOpened(true);
          }}
          width={width}
          rightIcon={<Search />}
          onlyUpdatedByParent
        />
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
      </div>
    </FocusLayer>
  );
};
