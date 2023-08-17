import { useState } from 'react';

import type { ButtonProps, OptionsProps } from '@components/atoms';
import { Button, Options } from '@components/atoms';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface OptionsButtonProps
  extends Pick<
    OptionsProps<string, false>,
    'float' | 'optionStyle' | 'onChange' | 'textEllipsis' | 'className'
  > {
  options?: {
    label: string;
    value: string;
  }[];
  buttonStyle: ButtonProps;
  buttonContent: string;
}

export const OptionsButton = ({
  onChange,
  options,
  optionStyle,
  float = 'bottom',
  textEllipsis,
  className,
  buttonStyle,
  buttonContent,
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
