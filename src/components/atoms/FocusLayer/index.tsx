import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { cleanClassName } from '../../../utils';

export interface FocusLayerProps {
  children?: React.ReactNode;
  onBlur?: () => void;
  focused?: boolean;
  blur?: boolean;
  className?: string;
  bodyScroll?: boolean;
  priority?: 1 | 2 | 3;
}

export const FocusLayer = ({
  children,
  onBlur,
  focused,
  blur,
  className,
  bodyScroll = false,
  priority,
}: FocusLayerProps) => {
  const [focusStatus] = useClosingState(focused);
  const isClosing = focusStatus === 'closing';

  useEffect(() => {
    if (!bodyScroll) {
      const { classList } = document.body;
      if (focused) {
        classList.add(styles['fixed-body']);
      }
      return () => classList.remove(styles['fixed-body']);
    }
  }, [focused, bodyScroll]);

  const isMouseOnFocusLayer = useRef<boolean>();

  useEffect(() => {
    if (onBlur) {
      const handleBlur = () => {
        if (isMouseOnFocusLayer.current === false) {
          onBlur();
        }
      };

      document.addEventListener('click', handleBlur);
      return () => document.removeEventListener('click', handleBlur);
    }
  }, [onBlur, focusStatus]);

  return priority ? (
    createPortal(
      focusStatus ? (
        <>
          <div
            onClick={onBlur}
            className={cleanClassName(
              `${styles['background-layer']} ${
                styles[`priority-${priority}`]
              } ${isClosing && styles.closing} ${blur && styles.blur}`,
            )}
          />
          <div
            className={cleanClassName(
              `${styles['focus-layer']} ${
                styles[`priority-${priority}`]
              } ${className}`,
            )}
          >
            {children}
          </div>
        </>
      ) : null,
      document.body,
    )
  ) : (
    <div
      onMouseEnter={() => {
        isMouseOnFocusLayer.current = true;
      }}
      onMouseLeave={() => {
        isMouseOnFocusLayer.current = false;
      }}
      className={cleanClassName(`${styles['focus-layer']} ${className}`)}
    >
      {children}
    </div>
  );
};
