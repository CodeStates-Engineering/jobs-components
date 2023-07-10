import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import {
  useTypographyClassName,
  useValidationMessageDynamicHeight,
} from '@hooks';
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
  size?: 'small3x' | 'small' | 'medium' | 'large';
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
  textAlign?: 'left' | 'center' | 'right';
  validationMessage?: string | null;
}

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
  width,
  textAlign = 'center',
  validationMessage,
}: ButtonProps) => {
  const [delayState, setDelayState] = useState<'before' | 'delaying' | 'after'>(
    'after',
  );
  const { messageRef, wrapHeightStyle } = useValidationMessageDynamicHeight(
    !!validationMessage,
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
    <>
      <button
        type={type}
        className={cleanClassName(
          `${
            isDelayButton ? styles['delayed-button'] : styles.button
          } ${typographyClassName} ${focusOutline && styles['focus-outline']} ${
            styles[`shape-${shape}`]
          } ${styles[`size-${size}`]} ${
            styles[`icon-direction-${iconDirection}`]
          } ${styles[`children-type-${childrenType}`]} ${
            styles[theme.replaceAll('/', '_')]
          } ${padding && styles.padding} ${className}
        ${childrenType !== 'icon' && styles[`text-align-${textAlign}`]}
        ${validationMessage && styles.error}
        `,
        )}
        onClick={onClick}
        disabled={isDisabled}
        style={style}
      >
        {delay && isDelayButton ? (
          <div
            className={`${styles['delay-bar']} ${
              isDelaying && styles.delaying
            }`}
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
      <div
        className={`${validationMessage && styles['validation-message-wrap']}`}
        style={wrapHeightStyle}
      >
        <p
          ref={messageRef}
          className={`${validationMessage && styles['validation-message']}`}
        >
          {validationMessage}
        </p>
      </div>
    </>
  );
};
