import { cleanClassName } from 'utils';

import { useLayoutEffect, useState } from 'react';

import styles from './index.module.scss';

export interface LocalModalProps {
  opened?: boolean;
  children?: React.ReactNode;
}

export const LocalModal = ({ opened = true, children }: LocalModalProps) => {
  const [openState, setOpenState] = useState<boolean | 'closing'>(opened);
  useLayoutEffect(() => {
    if (!opened) {
      setOpenState((prevOpenState) => {
        if (prevOpenState) {
          return 'closing';
        }
        return prevOpenState;
      });
    }
  }, [opened]);

  useLayoutEffect(() => {
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
