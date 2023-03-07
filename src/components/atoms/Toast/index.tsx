/* eslint-disable */
import { MouseEventHandler, useEffect, useState } from 'react';

import styles from './index.module.scss';
import CircleCheck from '../../../assets/svgs/circle-check.svg';
import CircleExclamation from '../../../assets/svgs/circle-exclamation.svg';
import { cleanClassName } from '../../../utils';

export interface ToastProps {
  type?: 'success' | 'fail';
  children?: React.ReactNode;
  maintained?: boolean | 'only-space';
  floatDirection?: 'from-top' | 'from-bottom';
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  holdTime?: number;
}

export const Toast = ({
  type = 'success',
  children,
  maintained = false,
  floatDirection = 'from-top',
  onMouseEnter,
  onMouseLeave,
  holdTime = 5000,
}: ToastProps) => {
  const [display, setDisplay] = useState<'closing' | boolean>(true);
  const isClosing = display === 'closing';
  const [maintainedState, setMaintainedState] = useState(maintained);

  useEffect(() => {
    if (display) {
      switch (maintainedState) {
        case false: {
          const holdTimer = setTimeout(() => {
            console.log('holdTimer');
            setDisplay('closing');
          }, holdTime);
          const animationTimer = setTimeout(() => {
            console.log('animationTimer');
            setDisplay(false);
          }, holdTime + 1000);

          return () => {
            clearTimeout(holdTimer);
            clearTimeout(animationTimer);
          };
        }
        case 'only-space': {
          const holdTimer = setTimeout(() => {
            console.log('only-space-holdTimer');
            setDisplay('closing');
          }, holdTime);
          return () => clearTimeout(holdTimer);
        }

        default:
          return;
      }
    }
  }, [display, maintainedState]);

  console.log(display);

  return display ? (
    <div
      onMouseEnter={(e) => {
        setDisplay(true);
        setMaintainedState(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setMaintainedState(maintained);
        onMouseLeave?.(e);
      }}
      className={cleanClassName(
        `${styles.toast} ${!maintainedState && styles['remove-space']} ${
          styles[`float-direction-${floatDirection}`]
        } ${isClosing && styles.closing} ${
          !maintainedState && styles['remove-space']
        }`,
      )}
    >
      <img
        src={
          {
            success: CircleCheck,
            fail: CircleExclamation,
          }[type]
        }
        alt="mark"
      />
      <div className={styles['toast-contents-wrap']}>{children}</div>
    </div>
  ) : (
    <></>
  );
};
