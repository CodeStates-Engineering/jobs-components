import { useEffect, useState } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { FocusLayer } from '../../atoms';

import type { FocusLayerProps } from '../../atoms';

export interface DropdownProps
  extends Pick<FocusLayerProps, 'blur' | 'priority'> {
  opened?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: FocusLayerProps['onBlur'];
}

export const Dropdown = ({
  opened = false,
  children,
  className,
  onClose,
  blur,
  priority,
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
    <FocusLayer
      blur={blur}
      priority={priority}
      focused={!!openState}
      onBlur={onClose}
      className={cleanClassName(
        `${styles.dropdown} ${
          openState === 'closing' && styles.closing
        } ${className}`,
      )}
    >
      {children}
    </FocusLayer>
  ) : (
    <></>
  );
};
