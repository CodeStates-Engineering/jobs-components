/* eslint-disable */
import { useEffect, useMemo, useState } from 'react';
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
  'children' | 'disabled' | 'type'
> &
  Typography & {
    delay?: number;
    size?: 'small' | 'medium' | 'large';
    theme?:
      | 'white/purple600'
      | 'white/bluish-gray800'
      | 'purple600/0'
      | 'bluish-gray700/0'
      | 'bluish-gray300/0'
      | 'bluish-gray500/0'
      | 'bluish-gray400/0/bluish-gray200'
      | 'bluish-gray700/0/bluish-gray200'
      | 'bluish-gray400/bluish-gray10/bluish-gray200';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'round' | 'default';
    padding?: boolean;
    focusOutline?: boolean;
    className?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    enterClick?: boolean;
  };

export const Button = ({
  delay,
  type = 'button',
  children,
  size = 'large',
  theme = 'white/purple600',
  onClick,
  disabled = false,
  shape = 'default',
  iconDirection = 'left',
  icon,
  padding = true,
  fontSize = 'normal',
  fontWeight = 700,
  focusOutline = true,
  className,
  enterClick = false,
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
  const isDisabled = disabled || isDelayButton;

  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );

  useEffect(() => {
    if (enterClick && !isDisabled) {
      const EVENT_TYPE = 'keydown';
      const enterClickEventListener = ({ key }: KeyboardEvent) => {
        if (key === 'Enter') {
          onClick?.(undefined);
        }
      };

      document.addEventListener(EVENT_TYPE, enterClickEventListener);
      return () =>
        document.removeEventListener(EVENT_TYPE, enterClickEventListener);
    }
  }, [enterClick, onClick, isDisabled]);

  return (
    <button
      type={type}
      className={cleanClassName(
        `${isDelayButton ? styles['delayed-button'] : styles.button} ${
          styles[fontSizeClassName]
        } ${styles[fontWeightClassName]} ${
          focusOutline && styles['focus-outline']
        } ${styles[`shape-${shape}`]} ${styles[`size-${size}`]} ${
          styles[`icon-direction-${iconDirection}`]
        } ${styles[`children-type-${childrenType}`]} ${
          styles[theme.replaceAll('/', '_')]
        } ${padding && styles.padding} ${className}`,
      )}
      onClick={onClick}
      disabled={isDisabled}
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
