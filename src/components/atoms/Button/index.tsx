import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import styles from './index.module.scss';
import { useTypography } from '../../../hooks';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

import type { Typography } from '../../../hooks';

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = Pick<
  HtmlButtonProps,
  'onClick' | 'children' | 'disabled' | 'type'
> &
  Typography & {
    delay?: number;
    minWidth?: React.CSSProperties['minWidth'];
    size?: 'small' | 'medium' | 'large';
    theme?: 'purple-600' | 'bluish-gray-800' | 'bluish-gray-300';
    themeType?: 'contained' | 'ghost';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'round' | 'default';
    padding?: boolean;
    focusOutline?: boolean;
  };

export const Button = ({
  delay,
  type = 'button',
  children,
  minWidth,
  size = 'medium',
  theme = 'purple-600',
  themeType = 'contained',
  onClick,
  disabled,
  shape = 'default',
  iconDirection = 'left',
  icon,
  padding = true,
  fontSize = 'normal',
  fontWeight = 700,
  focusOutline = true,
}: ButtonProps) => {
  const [delayState, setDelayState] = useState<'before' | 'delaying' | 'after'>(
    'after',
  );

  const childrenType = useMemo(() => {
    if (icon && children) {
      return 'both';
    }
    return icon ? 'icon' : 'text';
  }, [icon, children]);

  Compatibility.useLayoutEffect(() => {
    if (!disabled && delay) {
      setDelayState('before');
      setTimeout(() => setDelayState('delaying'));
      setTimeout(() => setDelayState('after'), delay);
    }
  }, [delay, disabled]);

  const isDelaying = delayState === 'delaying';
  const isDelayButton = delayState === 'before' || isDelaying;

  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );

  return (
    <button
      type={type}
      className={cleanClassName(
        `${isDelayButton ? styles['delayed-button'] : styles.button} ${
          styles[fontSizeClassName]
        } ${styles[fontWeightClassName]} ${styles[`theme-${theme}`]} ${
          styles[themeType]
        } ${focusOutline && styles['focus-outline']} ${
          styles[`shape-${shape}`]
        } ${styles[`size-${size}`]} ${
          styles[`icon-direction-${iconDirection}`]
        } ${styles[`children-type-${childrenType}`]} ${
          padding && styles.padding
        }`,
      )}
      style={{ minWidth }}
      onClick={onClick}
      disabled={disabled || isDelayButton}
    >
      {delay && isDelayButton ? (
        <div
          className={`${styles['delay-bar']} ${isDelaying && styles.delaying}`}
          style={{ transition: `transform ${delay / 1000}s linear` }}
        />
      ) : null}
      {children && <div className={styles['button-content']}>{children}</div>}
      {icon ? (
        <div className={`${styles['button-content']} ${styles.icon}`}>
          {icon}
        </div>
      ) : null}
    </button>
  );
};
