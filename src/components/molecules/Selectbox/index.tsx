import { FocusLayer, Options, Input, InputContainer } from 'components/atoms';
import { useComponentSelfState } from 'hooks';
import { cleanClassName } from 'utils';

import { useRef, useState, useMemo } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';

import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
  OptionHint,
} from 'components/atoms';

export type SelectboxProps<T extends OptionHint> = Omit<
  InputProps<'button'> & InputContainerProps,
  'type' | 'children' | 'validationMessage' | 'onFocus' | 'value' | 'onChange'
> &
  Pick<OptionsProps<T>, 'float' | 'options' | 'width' | 'value'> & {
    onlyUpdatedByParent?: boolean;
    onChange?: ((option?: T) => void) | undefined;
  };

export const Selectbox = <T extends OptionHint>({
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
}: SelectboxProps<T>) => {
  const [opened, setOpened] = useState(false);

  const [selectedOption, setSelectedOption] = useComponentSelfState(
    options?.find(
      (option) =>
        value === (typeof option === 'object' ? option.value : option),
    ),
    onlyUpdatedByParent,
    [options, value],
  );

  const selectedOptionObject = useMemo(() => {
    if (selectedOption) {
      return (
        typeof selectedOption === 'object'
          ? selectedOption
          : {
              label: selectedOption,
              value: selectedOption,
            }
      ) as {
        label: string;
        value: Exclude<typeof value, undefined>;
      };
    }
  }, [selectedOption]);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <FocusLayer onClick={() => setOpened(false)} focused={opened}>
      <InputContainer
        width={width}
        size={size}
        onClick={() => setOpened(!opened)}
      >
        <Input
          id={id}
          type="button"
          ref={ref}
          value={selectedOptionObject?.label}
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
          value={selectedOptionObject?.value}
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
