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
  InputContainerInteractionProps,
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
  Partial<Pick<OptionsProps<_Option>, 'options' | 'float'>> &
  InputContainerInteractionProps & {
    onlyUpdatedByParent?: boolean;
    onChange?: OptionsProps<_Option>['onSelect'];
    value?: Exclude<OptionsProps<_Option>['value'], undefined>['value'];
    label?: string;
    validation?: Validation<SelectboxProps<_Option>['value']>;
    validationSpace?: boolean;
    className?: string;
    labelDirection?: 'column' | 'row';
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
  borderRadius,
  labelDirection = 'column',
}: SelectboxProps<_Option>) => {
  const [opened, setOpened] = useState(false);

  const [selectedValue, setSelectedValue] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
  );

  const selectedOption = options?.find(({ value }) => value === selectedValue);

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <FocusLayer
      onClick={() => setOpened(false)}
      focused={opened}
      className={cleanClassName(
        `${styles.selectbox} ${styles[`label-${labelDirection}`]} ${className}`,
      )}
      bodyScroll
    >
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <InputContainer.Interaction
          size={size}
          borderRadius={borderRadius}
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
        </InputContainer.Interaction>
        <Options
          opened={opened}
          options={options}
          value={selectedOption}
          float={float}
          className={styles['select-box-default-width']}
          onSelect={(option) => {
            const optionForSelect =
              option === selectedOption ? undefined : option;
            const value = optionForSelect?.value;
            setSelectedValue?.(value);
            checkValidation?.(value);
            onChange?.(optionForSelect);
            setOpened(false);
          }}
        />
      </InputContainer>
    </FocusLayer>
  );
};
