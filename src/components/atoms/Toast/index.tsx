import { useState, useEffect } from 'react';

import styles from './index.module.scss';
import CircleCheck from '../../../assets/svgs/circle-check.svg';
import CircleExclamation from '../../../assets/svgs/circle-exclamation.svg';
import { cleanClassName } from '../../../utils';

export interface ToastProps {
  type?: 'success' | 'fail';
  children?: React.ReactNode;
  display?: boolean;
  floatDirection?: 'top' | 'bottom';
}

export const Toast = ({
  type = 'success',
  children,
  display = false,
  floatDirection = 'top',
}: ToastProps) => {
  const [displayState, setDisplayState] = useState<boolean | 'closing'>(
    display,
  );
  useEffect(
    () =>
      setDisplayState((prevOpenState) => {
        if (display) {
          return true;
        }
        if (prevOpenState) {
          return 'closing';
        }
        return prevOpenState;
      }),
    [display],
  );

  useEffect(() => {
    if (displayState === 'closing') {
      const timeout = setTimeout(() => {
        setDisplayState(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayState]);

  return display ? (
    <div
      className={cleanClassName(
        `${styles.toast} ${displayState === 'closing' && styles.closing} ${
          styles[`float-direction-${floatDirection}`]
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
      {children}
    </div>
  ) : (
    <></>
  );
};
