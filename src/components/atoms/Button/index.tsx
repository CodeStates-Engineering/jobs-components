import { cleanClassName } from 'utils';

import { useLayoutEffect, useState } from 'react';
import type { Icon } from 'react-feather';

import styles from './index.module.scss';

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps
  extends Pick<HtmlButtonProps, 'onClick' | 'children' | 'disabled'> {
  delay?: number;
  type?: HtmlButtonProps['type'];
  width?: React.CSSProperties['width'];
  theme?: 'gray-800';
  icon?: Icon;
}

export const Button = ({
  delay,
  type = 'button',
  children,
  width = '150px',
  theme = 'gray-800',
  onClick,
  disabled,
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
        } ${styles[`background-color-${theme}`]}`,
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
