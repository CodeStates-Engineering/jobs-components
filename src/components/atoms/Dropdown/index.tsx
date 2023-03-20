import { useEffect, useState } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface DropdownProps {
  opened?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Dropdown = ({
  opened = false,
  children,
  className,
}: DropdownProps) => {
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

  return openState ? (
    <div
      className={cleanClassName(
        `${styles.dropdown} ${
          openState === 'closing' && styles.closing
        } ${className}`,
      )}
    >
      {children}
    </div>
  ) : (
    <></>
  );
};
