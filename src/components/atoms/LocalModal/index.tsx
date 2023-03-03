import { Compatibility } from 'plugins';
import { cleanClassName } from 'utils';

import { useState } from 'react';

import styles from './index.module.scss';

export interface LocalModalProps {
  opened?: boolean;
  children?: React.ReactNode;
}

export const LocalModal = ({ opened = false, children }: LocalModalProps) => {
  const [openState, setOpenState] = useState<boolean | 'closing'>(opened);
  Compatibility.useLayoutEffect(() => {
    if (!opened) {
      setOpenState((prevOpenState) => {
        if (prevOpenState) {
          return 'closing';
        }
        return prevOpenState;
      });
    }
  }, [opened]);

  Compatibility.useLayoutEffect(() => {
    if (openState === 'closing') {
      const timeout = setTimeout(() => {
        setOpenState(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [openState]);

  return openState ? (
    <div
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
