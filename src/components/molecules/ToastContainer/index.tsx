import { useState, useEffect } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Toast, ANIMATION_DURATION } from '../../atoms';

import type { ToastProps } from '../../atoms';

export interface ToastOption extends Pick<ToastProps, 'children' | 'type'> {
  deleted: boolean;
}

export type ToastContainerProps = Omit<ToastProps, 'maintained'>;

export const ToastContainer = ({
  children,
  type,
  floatDirection = 'from-top',
  holdTime = 2000,
}: ToastContainerProps) => {
  const [toastPropsList, setToastPropsList] = useState<ToastOption[]>([]);

  const [leftSpace, setLeftSpace] = useState(false);

  useEffect(() => {
    if (!leftSpace && toastPropsList.length > 0) {
      const toastPropsListCleanTimer = setTimeout(
        () => setToastPropsList([]),
        holdTime + ANIMATION_DURATION,
      );

      return () => clearTimeout(toastPropsListCleanTimer);
    }
  }, [leftSpace, holdTime, toastPropsList]);

  useEffect(() => {
    if (children) {
      setToastPropsList((prevToastPropsList) => [
        ...prevToastPropsList.filter((toastProps) => !toastProps.deleted),
        { children, type, deleted: false },
      ]);
    }
  }, [children, type]);

  return (
    <div
      className={cleanClassName(
        `${styles['toast-container']} ${
          styles[`float-direction-${floatDirection}`]
        }`,
      )}
    >
      <div
        onMouseEnter={() => setLeftSpace(true)}
        onMouseLeave={() => {
          setLeftSpace(false);
        }}
      >
        {toastPropsList.map((toastProps, index) => (
          <Toast
            {...toastProps}
            key={index}
            leftSpace={leftSpace}
            floatDirection={floatDirection}
            holdTime={holdTime}
            onToastDelete={() => {
              toastProps.deleted = true;
            }}
          />
        ))}
      </div>
    </div>
  );
};
