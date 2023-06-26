import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import styles from './index.module.scss';
import { useTypography } from '../../../hooks';
import { cleanClassName } from '../../../utils';

import type { Typography } from '../../../hooks';

export type LabelProps = Pick<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
  'children' | 'htmlFor' | 'className'
> &
  Typography & {
    space?: 'none' | 'small' | 'medium' | 'large';
  };

const LabelMain = ({
  children,
  htmlFor,
  className,
  fontSize = 'small',
  space = 'none',
  fontWeight = 500,
}: LabelProps) => {
  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );
  return (
    <label
      htmlFor={htmlFor}
      className={cleanClassName(
        `${styles.label} ${styles[`space-${space}`]} ${
          styles[fontSizeClassName]
        } ${styles[fontWeightClassName]} ${className}`,
      )}
    >
      {children}
    </label>
  );
};

export interface LabelContainerProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'column' | 'row';
}

const LabelContainer = ({
  children,
  className,
  direction = 'column',
}: LabelContainerProps) => (
  <div
    className={cleanClassName(
      `${styles['label-container']} ${styles[direction]} ${className}`,
    )}
  >
    {children}
  </div>
);

export const Label = Object.assign(LabelMain, {
  Container: LabelContainer,
});
