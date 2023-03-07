import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface LocalModalProps {
  opened?: boolean;
  children?: React.ReactNode;
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
}

export const LocalModal = ({
  opened = false,
  children,
  top,
  left,
  right,
  bottom,
}: LocalModalProps) => {
  const [openState, setOpenState] = useState<boolean | 'closing'>(opened);
  useEffect(
    () =>
      setOpenState((prevOpenState) => {
        if (opened) {
          return true;
        }
        if (prevOpenState) {
          return 'closing';
        }
        return prevOpenState;
      }),
    [opened],
  );

  useEffect(() => {
    if (openState === 'closing') {
      const timeout = setTimeout(() => {
        setOpenState(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [openState]);

  const floatStyle = useMemo(
    () => ({ top, left, right, bottom }),
    [top, left, right, bottom],
  );

  return openState ? (
    <div
      style={floatStyle}
      className={cleanClassName(
        `${styles['local-modal']} ${openState === 'closing' && styles.closing}`,
      )}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};
