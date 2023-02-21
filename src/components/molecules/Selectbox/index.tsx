import { FocusLayer, Options, Input, InputContainer } from 'components/atoms';
import { useComponentSelfState } from 'hooks';

import { useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';

import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
} from 'components/atoms';

export type SelectboxProps = Omit<
  InputProps<'text'> & InputContainerProps,
  'type' | 'children' | 'validationMessage' | 'onFocus'
> &
  Pick<OptionsProps<string>, 'float' | 'options' | 'width'> & {
    onlyUpdatedByParent?: boolean;
  };

export const Selectbox = ({
  float,
  value,
  width,
  options,
  onChange,
  onlyUpdatedByParent,
  disabled,
  placeholder,
  size,
  id,
}: SelectboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputText, setInputText] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const ref = useRef<HTMLInputElement>(null);

  return (
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      <InputContainer width={width} size={size}>
        <div
          className={styles['select-wrap']}
          onClick={() => {
            if (disabled) {
              return;
            }
            const { current } = ref;
            setOpened(!opened);
            if (opened) {
              current?.blur();
            } else {
              current?.focus();
            }
          }}
        >
          <Input
            ref={ref}
            type="text"
            id={id}
            value={inputText}
            disabled={disabled}
            placeholder={placeholder}
          />
          <ChevronDown />
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
        </div>
      </InputContainer>
    </FocusLayer>
  );
};
