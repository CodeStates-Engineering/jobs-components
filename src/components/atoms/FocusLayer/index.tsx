import type { MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

export interface FocusLayerProps {
  children?: React.ReactNode;
  onBlur?: MouseEventHandler<HTMLDivElement>;
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
  priority = 3,
}: FocusLayerProps) => {
  const [focusStatus] = useClosingState(focused);
  const isClosing = focusStatus === 'closing';

  Compatibility.useLayoutEffect(() => {
    if (!bodyScroll) {
      const { classList } = document.body;
      if (focused) {
        classList.add(styles['fixed-body']);
      }
      return () => classList.remove(styles['fixed-body']);
    }
  }, [focused, bodyScroll]);

  const priorityClassName = styles[`priority-${priority}`];

  return (
    <>
      {focusStatus
        ? createPortal(
            <div
              onClick={onBlur}
              className={cleanClassName(
                `${styles['background-layer']} ${isClosing && styles.closing} ${
                  blur && styles.blur
                } ${priorityClassName}`,
              )}
            />,
            document.body,
          )
        : null}
      <div
        className={cleanClassName(
          `${styles['focus-layer']} ${priorityClassName} ${className}`,
        )}
      >
        {children}
      </div>
    </>
  );
};
