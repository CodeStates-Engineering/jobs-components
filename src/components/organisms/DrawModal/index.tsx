import React, { createContext, useLayoutEffect, useState } from 'react';

import styles from './index.module.scss';
import { FocusLayer } from '../../atoms';

const DrawModalContext = createContext<(() => void) | undefined>(undefined);

interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

export interface DrawModalProps extends CommonProps {
  opened?: boolean;
  onClose?: () => void;
  direction?: 'left' | 'right';
}
const DrawModalMain = ({
  children,
  className,
  opened = false,
  onClose,
  direction = 'left',
}: DrawModalProps) => {
  const [openState, setOpenState] = useState<boolean | 'closing'>(opened);

  useLayoutEffect(() => {
    setOpenState((prevState) => {
      if (opened) {
        return true;
      }
      if (prevState) {
        return 'closing';
      }
      return prevState;
    });
  }, [opened]);

  useLayoutEffect(() => {
    if (openState === 'closing') {
      const timeout = setTimeout(() => {
        setOpenState(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [openState]);

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
          className={`${styles[`draw-modal-container-${direction}`]}
          ${openState === 'closing' && styles.closing} ${className}`}
        >
          <DrawModalContext.Provider value={onClose}>
            {children}
          </DrawModalContext.Provider>
        </article>
      ) : null}
    </FocusLayer>
  );
};

export type DrawModalHeaderProps = CommonProps;
const DrawModalHeader = ({ children, className }: DrawModalHeaderProps) => (
  <header className={`${styles['draw-modal-header']} ${className}`}>
    {children}
  </header>
);

export type DrawModalBodyProps = CommonProps;
const DrawModalBody = ({ children, className }: DrawModalBodyProps) => (
  <section className={`${styles['draw-modal-body']} ${className}`}>
    {children}
  </section>
);

export type DrawModalFooterProps = CommonProps;
const DrawModalFooter = ({ children, className }: DrawModalFooterProps) => (
  <footer className={`${styles['draw-modal-footer']} ${className}`}>
    {children}
  </footer>
);

export const DrawModal = Object.assign(DrawModalMain, {
  Header: DrawModalHeader,
  Body: DrawModalBody,
  Footer: DrawModalFooter,
});
