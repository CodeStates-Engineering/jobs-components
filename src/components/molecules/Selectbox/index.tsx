import {
  FocusLayer,
  Options,
  Input,
  InputContainer,
  Label,
} from 'components/atoms';
import { useComponentSelfState } from 'hooks';
import { cleanClassName } from 'utils';

import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';

import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
  Option,
} from 'components/atoms';

export type SelectboxProps<_Option extends Option = Option> = Omit<
  InputProps<'button'> & InputContainerProps,
  | 'type'
  | 'children'
  | 'validationMessage'
  | 'onFocus'
  | 'value'
  | 'onChange'
  | 'name'
> &
  Partial<
    Pick<OptionsProps<_Option>, 'float' | 'options' | 'width' | 'value'>
  > & {
    onlyUpdatedByParent?: boolean;
    onChange?: OptionsProps<_Option>['onSelect'];
    label?: string;
  };

export const Selectbox = <_Option extends Option = Option>({
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
  ref,
  onClick,
  label,
}: SelectboxProps<_Option>) => {
  const [opened, setOpened] = useState(false);

  const [selectedOption, setSelectedOption] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  return (
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        width={width}
        size={size}
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
        />
        <ChevronDown
          className={cleanClassName(
            `${styles.arrow} ${opened && styles['opened-arrow']}`,
          )}
        />
        <Options
          opened={opened}
          options={options}
          width={width}
          value={selectedOption}
          onSelect={(option) => {
            const optionForSelect =
              option === selectedOption ? undefined : option;
            setSelectedOption?.(optionForSelect);
            onChange?.(optionForSelect);
            setOpened(false);
          }}
          float={float}
        />
      </InputContainer>
    </FocusLayer>
  );
};
