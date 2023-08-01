import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import { FocusLayer, Options, Input, Label } from '@components/atoms';
import type {
  InputProps,
  InputWrapProps,
  OptionsProps,
  LabelWithInputProps,
} from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type {
  ValidateHandler,
  UseTypographyClassNameParams,
  ValidationTrigger,
} from '@hooks';
import { regex } from '@utils';

import styles from './index.module.scss';

export interface SearchboxProps
  extends Pick<
      InputProps<'text'>,
      | 'value'
      | 'onChange'
      | 'disabled'
      | 'placeholder'
      | 'onFocus'
      | 'onClick'
      | 'id'
      | 'ref'
    >,
    Pick<OptionsProps<string, false>, 'float' | 'optionStyle'>,
    Omit<LabelWithInputProps, 'children'> {
  selfFilter?: boolean;
  options?: string[];
  validation?: ValidateHandler<SearchboxProps['value']>;
  inputStyle?: Pick<InputWrapProps, 'size' | 'width' | 'borderRadius'> &
    UseTypographyClassNameParams;
  hasSearchIcon?: boolean;
  validationTrigger?: ValidationTrigger;
  description?: InputWrapProps['description'];
  readOnly?: InputWrapProps['readOnly'];
}

export const Searchbox = ({
  float,
  value,
  options: stringOptions,
  onChange,
  selfFilter = true,
  disabled,
  placeholder,
  onFocus,
  id,
  onClick,
  ref,
  label,
  validation,
  className,
  inputStyle,
  labelStyle,
  optionStyle,
  hasSearchIcon = true,
  validationTrigger,
  description,
  readOnly,
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputText, setInputText] = useSubscribedState(value);

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

  const { validationMessage, validateOnChange, validateOnBlur } =
    useValidationMessage({
      key: label,
      validateHandler: validation,
      value,
      validationTrigger,
    });

  const handleChange = (value?: string) => {
    setInputText?.(value);
    onChange?.(value);
    validateOnChange?.(value);
  };

  return (
    <Label.WithInput
      className={className}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      label={label}
    >
      <FocusLayer
        onBlur={() => setOpened(false)}
        focused={opened}
        className={styles['layer-width']}
        bodyScroll
      >
        <Input.Wrap
          validationMessage={validationMessage}
          onClick={onClick}
          size={inputStyle?.size}
          width={inputStyle?.width}
          borderRadius={inputStyle?.borderRadius}
          description={description}
          className={styles['align-end']}
          readOnly={readOnly}
        >
          <Input
            name={label}
            ref={ref}
            onChange={(value) => {
              setOpened(true);
              handleChange(value);
            }}
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
            onClick={() => setOpened(true)}
            onFocus={onFocus}
            id={id}
            value={inputText}
            disabled={disabled}
            placeholder={placeholder}
            onBlur={validateOnBlur}
            readOnly={readOnly}
          />
          {hasSearchIcon ? <Search /> : null}
        </Input.Wrap>
        <Options
          optionStyle={optionStyle}
          opened={opened}
          options={options}
          value={inputText}
          onChange={(value) => {
            setOpened(false);
            handleChange(value);
          }}
          cancelable={false}
          float={float}
        />
      </FocusLayer>
    </Label.WithInput>
  );
};
