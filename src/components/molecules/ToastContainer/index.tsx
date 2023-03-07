import { useState, useEffect, useCallback } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Toast } from '../../atoms';

import type { ToastProps } from '../../atoms';

export interface ToastOption {
  type?: ToastProps['type'];
  content: ToastProps['children'];
}

export interface ToastContainerProps
  extends Partial<Pick<ToastProps, 'floatDirection'>> {
  holdTime?: number;
  toastOption?: ToastOption;
}

interface ToastInfo extends ToastOption {
  timer: NodeJS.Timeout;
  visible: boolean;
  hidden: boolean;
}

export const ToastContainer = ({
  toastOption,
  holdTime = 2000,
  floatDirection = 'from-bottom',
}: ToastContainerProps) => {
  const ANIMATION_DURATION = 1000;
  const [toastInfoList, setToastInfoList] = useState<ToastInfo[]>([]);
  const toastInfoCount = toastInfoList.length;

  const createToastTimer = useCallback(
    (toastIndex: number) =>
      setTimeout(() => {
        setToastInfoList((prevVisibleToasts) => {
          const toastInfo = prevVisibleToasts[toastIndex];
          if (toastInfo) {
            toastInfo.visible = false;
          }
          return [...prevVisibleToasts];
        });

        setTimeout(() => {
          setToastInfoList((prevVisibleToasts) => {
            const toastInfo = prevVisibleToasts[toastIndex];
            if (toastInfo) {
              toastInfo.hidden = true;
            }
            return [...prevVisibleToasts];
          });
        }, ANIMATION_DURATION);
      }, holdTime),
    [holdTime],
  );

  useEffect(() => {
    if (toastOption) {
      setToastInfoList((prevVisibleToasts) => [
        ...prevVisibleToasts,
        {
          ...toastOption,
          visible: true,
          hidden: false,
          timer: createToastTimer(prevVisibleToasts.length),
        },
      ]);
    }
  }, [toastOption, holdTime, createToastTimer]);

  useEffect(() => {
    if (toastInfoCount) {
      if (!toastInfoList.filter(({ hidden }) => !hidden).length) {
        const infoClearTimer = setTimeout(
          () => setToastInfoList([]),
          ANIMATION_DURATION,
        );
        return () => clearTimeout(infoClearTimer);
      }
    }
  }, [toastInfoList, toastInfoCount]);

  return (
    <ul
      className={cleanClassName(
        `${styles['toast-container']} ${
          styles[`float-direction-${floatDirection}`]
        }`,
      )}
    >
      {toastInfoList.map(({ timer, content, ...toastProps }, index) => (
        <li key={index}>
          <Toast
            {...toastProps}
            onMouseEnter={() => clearTimeout(timer)}
            onMouseLeave={() => {
              if (toastInfoCount) {
                setToastInfoList((prevVisibleToasts) => {
                  const focusedToast = prevVisibleToasts[index];
                  const newToastInfoList = prevVisibleToasts.filter(
                    ({ hidden }) => !hidden,
                  );
                  const focusedToastIndex =
                    newToastInfoList.indexOf(focusedToast);
                  const focusedToastInfo = newToastInfoList[focusedToastIndex];

                  if (focusedToastInfo) {
                    focusedToastInfo.timer =
                      createToastTimer(focusedToastIndex);
                  }

                  return newToastInfoList;
                });
              }
            }}
          >
            {content}
          </Toast>
        </li>
      ))}
    </ul>
  );
};
