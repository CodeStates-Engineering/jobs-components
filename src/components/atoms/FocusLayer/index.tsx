import { useState } from 'react';

import styles from './index.module.scss';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

export interface FocusLayerProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  focused?: boolean;
  blur?: boolean;
  className?: string;
  bodyScroll?: boolean;
}

export const FocusLayer = ({
  children,
  onClick,
  focused,
  blur,
  className,
  bodyScroll = false,
}: FocusLayerProps) => {
  const [focusState, setFocusState] = useState<boolean | 'closing'>(
    focused ?? false,
  );

  const isClosing = focusState === 'closing';

  Compatibility.useLayoutEffect(() => {
    setFocusState(
      focused ? true : (beforeState) => (beforeState ? 'closing' : false),
    );

    if (!bodyScroll) {
      const { classList } = document.body;
      if (focused) {
        classList.add(styles['fixed-body']);
      }
      return () => classList.remove(styles['fixed-body']);
    }
  }, [focused, bodyScroll]);

  Compatibility.useLayoutEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setFocusState(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  return (
    <>
      <div className={cleanClassName(`${styles['focus-layer']} ${className}`)}>
        {children}
      </div>
      {focusState ? (
        <div
          onClick={onClick}
          className={cleanClassName(
            `${styles['background-layer']} ${isClosing && styles.closing} ${
              blur && styles.blur
            }`,
          )}
        />
      ) : null}
    </>
  );
};
