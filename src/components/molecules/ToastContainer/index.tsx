import { useState, useEffect } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Toast, ANIMATION_DURATION } from '../../atoms';

import type { ToastProps } from '../../atoms';

interface ToastOption extends Pick<ToastProps, 'type'> {
  message: ToastProps['children'];
}

interface ToastInfo extends ToastOption {
  deleted: boolean;
}

export interface ToastContainerProps
  extends Omit<
    ToastProps,
    'maintained' | 'leftSpace' | 'children' | 'onToastDelete' | 'type'
  > {
  toastOption?: ToastOption;
}

export const ToastContainer = ({
  toastOption,
  floatDirection = 'from-top',
  holdTime = 2000,
}: ToastContainerProps) => {
  const [toastInfoList, setToastInfoList] = useState<ToastInfo[]>([]);

  const [leftSpace, setLeftSpace] = useState(false);

  useEffect(() => {
    if (!leftSpace && toastInfoList.length > 0) {
      const toastPropsListCleanTimer = setTimeout(
        () => setToastInfoList([]),
        holdTime + ANIMATION_DURATION,
      );

      return () => clearTimeout(toastPropsListCleanTimer);
    }
  }, [leftSpace, holdTime, toastInfoList]);

  useEffect(() => {
    if (toastOption?.message) {
      setToastInfoList((prevToastPropsList) => [
        ...prevToastPropsList.filter((toastProps) => !toastProps.deleted),
        { ...toastOption, deleted: false },
      ]);
    }
  }, [toastOption]);

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
        {toastInfoList.map((toastInfo, index) => (
          <Toast
            key={index}
            leftSpace={leftSpace}
            floatDirection={floatDirection}
            holdTime={holdTime}
            type={toastInfo.type}
            onToastDelete={() => {
              toastInfo.deleted = true;
            }}
          >
            {toastInfo.message}
          </Toast>
        ))}
      </div>
    </div>
  );
};
