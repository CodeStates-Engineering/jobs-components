import { useState } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { FocusLayer, Options, Input, InputContainer, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type {
  InputProps,
  InputContainerProps,
  OptionsProps,
  Option,
} from '../../atoms';

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
  Partial<Pick<OptionsProps<_Option>, 'options' | 'value' | 'float'>> & {
    onlyUpdatedByParent?: boolean;
    onChange?: OptionsProps<_Option>['onSelect'];
    label?: string;
    validation?: Validation<SelectboxProps<_Option>['value']>;
    validationSpace?: boolean;
    className?: string;
  };

export const Selectbox = <_Option extends Option = Option>({
  value,
  options,
  onChange,
  float,
  onlyUpdatedByParent,
  disabled,
  placeholder,
  size,
  id,
  ref,
  onClick,
  label,
  validation,
  validationSpace,
  className,
}: SelectboxProps<_Option>) => {
  const [opened, setOpened] = useState(false);

  const [selectedOption, setSelectedOption] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <FocusLayer
      onClick={() => setOpened(false)}
      focused={opened}
      className={cleanClassName(`${styles.selectbox} ${className}`)}
    >
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        size={size}
        onClick={(e) => {
          setOpened(!opened);
          onClick?.(e);
        }}
        validationMessage={validationMessage}
        validationSpace={validationSpace}
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
      </InputContainer>
      <Options
        opened={opened}
        options={options}
        value={selectedOption}
        float={float}
        className={styles['select-box-default-width']}
        onSelect={(option) => {
          const optionForSelect =
            option === selectedOption ? undefined : option;
          setSelectedOption?.(optionForSelect);
          checkValidation?.(optionForSelect);
          onChange?.(optionForSelect);
          setOpened(false);
        }}
      />
    </FocusLayer>
  );
};
