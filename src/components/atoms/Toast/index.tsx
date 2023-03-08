import { useEffect, useState } from 'react';

import styles from './index.module.scss';
import CircleCheck from '../../../assets/svgs/circle-check.svg';
import CircleExclamation from '../../../assets/svgs/circle-exclamation.svg';
import { cleanClassName } from '../../../utils';

export interface ToastProps {
  type?: 'success' | 'fail';
  children?: React.ReactNode;
  leftSpace?: boolean;
  floatDirection?: 'from-top' | 'from-bottom';
  onToastDelete?: () => void;
  holdTime?: number;
}

export const ANIMATION_DURATION = 1000;

export const Toast = ({
  type = 'success',
  children,
  leftSpace = false,
  floatDirection = 'from-top',
  onToastDelete,
  holdTime = 2000,
}: ToastProps) => {
  const [display, setDisplay] = useState<boolean | 'holding'>(true);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (display === true) {
      const holdTimer = setTimeout(() => setDisplay(false), holdTime);
      return () => clearTimeout(holdTimer);
    }
  }, [display, holdTime]);

  useEffect(() => {
    if (!display && !leftSpace) {
      const deleteTimer = setTimeout(() => {
        setDeleted(true);
        onToastDelete?.();
      }, ANIMATION_DURATION);
      return () => clearTimeout(deleteTimer);
    }
  }, [display, onToastDelete, leftSpace]);

  return deleted ? (
    <></>
  ) : (
    <div
      onMouseEnter={() => {
        if (display) {
          setDisplay('holding');
        }
      }}
      onMouseLeave={() => {
        if (display) {
          setDisplay(true);
        }
      }}
      className={cleanClassName(
        `${styles.toast} ${!leftSpace && styles['remove-space']} ${
          display ? styles[`float-direction-${floatDirection}`] : styles.closing
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
  );
};
