import {
  useState,
  useEffect,
  createContext,
  useMemo,
  useRef,
  Children,
} from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Toast } from '../../atoms';

import type { ToastProps } from '../../atoms';

export interface ToastOption extends Pick<ToastProps, 'type'> {
  message?: ToastProps['children'];
}

export interface ToastContainerProps
  extends Omit<
    ToastProps,
    'maintained' | 'leftSpace' | 'children' | 'onToastDelete' | 'type'
  > {
  toastOption?: ToastOption;
}

interface ToastInfo extends Pick<ToastProps, 'type' | 'opened'> {
  message?: ToastProps['children'];
}

const toastMap = new Map<number, ToastInfo>();

export const ToastContext = createContext({
  toastMap,
  renderingCount: 0,
  addRenderingCount: (): void => undefined,
});

export interface ToastProviderProps extends Pick<ToastProps, 'floatDirection'> {
  children?: React.ReactNode;
  holdingTime?: number;
}

const ToastProvider = ({
  floatDirection,
  children,
  holdingTime,
}: ToastProviderProps) => {
  const [renderingCount, setRenderingCount] = useState(0);
  const [isDeletePrevented] = useState(false);
  const { current } = useRef({
    toastMap,
    renderingCount,
    addRenderingCount: () => setRenderingCount((prev) => prev + 1),
  });

  return (
    <ToastContext.Provider value={current}>
      <div
        className={cleanClassName(
          `${styles['toast-container']} ${
            styles[`float-direction-${floatDirection}`]
          }`,
        )}
      >
        <div onMouseEnter={} onMouseLeave={}>
          {[...toastMap].map(([key, info]) => (
            <Toast
              key={key}
              opened={info.opened}
              floatDirection={floatDirection}
              type={info.type}
            >
              {info.message}
            </Toast>
          ))}
        </div>
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const ToastContainer = ({
  toastOption,
  floatDirection = 'from-top',
  holdTime = 3000,
}: ToastContainerProps) => {
  const [toastInfoList, setToastInfoList] = useState<ToastOption[]>([]);

  const [isSpaceHolding, setIsSpaceHolding] = useState(false);

  useEffect(() => {
    if (!isSpaceHolding && toastInfoList.length > 0) {
      const toastPropsListCleanTimer = setTimeout(
        () => setToastInfoList([]),
        holdTime + CLOSE_TOAST_ANIMATION_DURATION,
      );

      return () => clearTimeout(toastPropsListCleanTimer);
    }
  }, [isSpaceHolding, holdTime, toastInfoList]);

  useEffect(() => {
    if (toastOption?.message) {
      setToastInfoList((prevToastPropsList) => [
        ...prevToastPropsList,
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
        onMouseEnter={() => setIsSpaceHolding(true)}
        onMouseLeave={() => {
          setIsSpaceHolding(false);
        }}
      >
        {toastInfoList.map((toastInfo, index) => (
          <Toast
            key={index}
            isSpaceHolding={isSpaceHolding}
            floatDirection={floatDirection}
            holdTime={holdTime}
            type={toastInfo.type}
          >
            {toastInfo.message}
          </Toast>
        ))}
      </div>
    </div>
  );
};
