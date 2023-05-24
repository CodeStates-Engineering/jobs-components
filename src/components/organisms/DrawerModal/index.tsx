import React, { createContext } from 'react';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { FocusLayer } from '../../atoms';

const DrawerModalContext = createContext<(() => void) | undefined>(undefined);

interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

export interface DrawerModalProps extends CommonProps {
  opened?: boolean;
  onClose?: () => void;
  direction?: 'left' | 'right';
}
const DrawerModalMain = ({
  children,
  className,
  opened = false,
  onClose,
  direction = 'left',
}: DrawerModalProps) => {
  const [openState] = useClosingState(opened, 250);
  const isClosing = openState === 'closing';

  return (
    <FocusLayer
      onClick={() => {
        onClose?.();
      }}
      focused={opened}
      priority={1}
    >
      {openState ? (
        <article
          className={`${styles[`drawer-modal-container-${direction}`]}
          ${isClosing && styles.closing} ${className}`}
        >
          <DrawerModalContext.Provider value={onClose}>
            {children}
          </DrawerModalContext.Provider>
        </article>
      ) : null}
    </FocusLayer>
  );
};

export type DrawerModalHeaderProps = CommonProps;
const DrawerModalHeader = ({ children, className }: DrawerModalHeaderProps) => (
  <header className={`${styles['drawer-modal-header']} ${className}`}>
    {children}
  </header>
);

export type DrawerModalBodyProps = CommonProps;
const DrawerModalBody = ({ children, className }: DrawerModalBodyProps) => (
  <section className={`${styles['drawer-modal-body']} ${className}`}>
    {children}
  </section>
);

export type DrawerModalFooterProps = CommonProps;
const DrawerModalFooter = ({ children, className }: DrawerModalFooterProps) => (
  <footer className={`${styles['drawer-modal-footer']} ${className}`}>
    {children}
  </footer>
);

export const DrawerModal = Object.assign(DrawerModalMain, {
  Header: DrawerModalHeader,
  Body: DrawerModalBody,
  Footer: DrawerModalFooter,
});
