import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { useTypographyClassName } from '@hooks';
import type { UseTypographyClassNameParams } from '@hooks';
import { Compatibility } from '@plugins';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps
  extends Pick<
      HtmlButtonProps,
      'children' | 'disabled' | 'type' | 'onClick' | 'className'
    >,
    UseTypographyClassNameParams,
    Pick<React.CSSProperties, 'width'> {
  delay?: number;
  size?: 'small3x' | 'small2x' | 'small' | 'medium' | 'large';
  variant?: 'contained' | 'ghost' | 'outlined';
  color?:
    | 'purple550'
    | 'purple600'
    | 'bluishGray300'
    | 'bluishGray400'
    | 'bluishGray500'
    | 'bluishGray600'
    | 'bluishGray700'
    | 'bluishGray800';
  icon?: ReactNode;
  iconDirection?: 'left' | 'right';
  shape?: 'pill' | '8' | '4';
  padding?: boolean;
  textAlign?: 'left' | 'center' | 'right';
}

export const Button = ({
  delay,
  type = 'button',
  children,
  size = 'large',
  color = 'purple600',
  variant = 'contained',
  onClick,
  disabled = false,
  shape = '8',
  iconDirection = 'left',
  icon,
  padding = true,
  fontSize = 'normal',
  fontWeight = 700,
  className,
  width,
  textAlign = 'center',
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

  const { typographyClassName } = useTypographyClassName({
    fontSize,
    fontWeight,
  });

  const style = useMemo(() => ({ width }), [width]);

  return (
    <button
      type={type}
      className={cleanClassName(
        `${
          isDelayButton ? styles['delayed-button'] : styles.button
        } ${typographyClassName} ${styles[`shape-${shape}`]} ${
          styles[`size-${size}`]
        } ${styles[`icon-direction-${iconDirection}`]} ${
          styles[`children-type-${childrenType}`]
        } ${styles[`${variant}-${color}`]} ${
          padding && styles.padding
        } ${className}
        ${childrenType !== 'icon' && styles[`text-align-${textAlign}`]}
        `,
      )}
      onClick={onClick}
      disabled={isDisabled}
      style={style}
    >
      {delay && isDelayButton ? (
        <div
          className={`${styles['delay-bar']} ${isDelaying && styles.delaying}`}
          style={{ transition: `transform ${delay / 1000}s linear` }}
        />
      ) : null}
      {children}
      {icon && icon}
    </button>
  );
};
