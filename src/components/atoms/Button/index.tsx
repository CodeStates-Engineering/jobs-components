import { cleanClassName } from 'utils';

import { useLayoutEffect, useState } from 'react';
import type { FunctionComponent } from 'react';

import styles from './index.module.scss';

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps
  extends Pick<HtmlButtonProps, 'onClick' | 'children' | 'disabled' | 'type'> {
  delay?: number;
  width?: React.CSSProperties['width'];
  theme?: 'gray-800' | 'transparent';
  icon?: FunctionComponent;
  shape?: 'round' | 'default';
}

export const Button = ({
  delay,
  type = 'button',
  children,
  width = '150px',
  theme = 'gray-800',
  onClick,
  disabled,
  shape = 'default',
  icon: Icon,
}: ButtonProps) => {
  const [delayState, setDelayState] = useState<'before' | 'delaying' | 'after'>(
    'after',
  );

  useLayoutEffect(() => {
    if (!disabled && delay) {
      setDelayState('before');
      setTimeout(() => setDelayState('delaying'));
      setTimeout(() => setDelayState('after'), delay);
    }
  }, [delay, disabled]);

  const isDelaying = delayState === 'delaying';
  const isDelayButton = delayState === 'before' || isDelaying;

  return (
    <button
      type={type}
      className={cleanClassName(
        `${isDelayButton ? styles['delayed-button'] : styles.button} ${
          styles['font-size-bold']
        } ${styles[`theme-${theme}`]} ${styles[`shape-${shape}`]}`,
      )}
      style={{ width }}
      onClick={onClick}
      disabled={disabled || isDelayButton}
    >
      {delay && isDelayButton ? (
        <div
          className={`${styles['delay-bar']} ${isDelaying && styles.delaying}`}
          style={{ transition: `transform ${delay / 1000}s linear` }}
        />
      ) : null}
      {Icon ? (
        <div className={`${styles['button-content']} ${styles.icon}`}>
          <Icon />
        </div>
      ) : null}
      <div className={styles['button-content']}>{children}</div>
    </button>
  );
};
