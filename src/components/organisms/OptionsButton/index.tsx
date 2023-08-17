import { useState } from 'react';

import type {
  ButtonProps,
  OptionsProps,
  ValidOptionValue,
} from '@components/atoms';
import { Button, Options } from '@components/atoms';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface OptionsButtonProps<
  _ValidOptionValue = ValidOptionValue,
  _Multiple = boolean,
> extends Pick<
    OptionsProps<_ValidOptionValue, _Multiple>,
    | 'float'
    | 'optionStyle'
    | 'onChange'
    | 'multiple'
    | 'value'
    | 'textEllipsis'
    | 'className'
    | 'options'
  > {
  buttonStyle: ButtonProps;
  buttonContent: string;
}

export const OptionsButton = ({
  value,
  onChange,
  options,
  optionStyle,
  float = 'bottom',
  textEllipsis,
  className,
  buttonStyle,
  buttonContent,
  multiple,
}: OptionsButtonProps) => {
  const [opened, setOpened] = useState(false);
  const { className: btnClassName, ...restButtonStyle } = buttonStyle;

  return (
    <div
      className={cleanClassName(
        `${styles['options-button-container']} ${className}`,
      )}
    >
      <Button
        className={cleanClassName(btnClassName)}
        onClick={() => setOpened((prev) => !prev)}
        {...restButtonStyle}
      >
        {buttonContent}
      </Button>

      <Options
        opened={opened}
        className={cleanClassName(`${styles.options}`)}
        options={options?.map(({ label, value }) => ({ label, value }))}
        multiple={multiple}
        value={value}
        onChange={(value) => {
          setOpened(false);
          onChange?.(value);
        }}
        textEllipsis={textEllipsis}
        optionStyle={optionStyle}
        float={float}
      />
    </div>
  );
};
