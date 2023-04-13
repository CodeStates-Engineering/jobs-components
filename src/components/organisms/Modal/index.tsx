import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button, FocusLayer } from '../../atoms';
import { TabMenu } from '../../molecules';

import type { TabMenuProps } from '../../molecules';

const ModalContext = createContext<(() => void) | undefined>(undefined);

interface CommonProps {
  children?: ReactNode;
  className?: string;
}

export interface ModalProps extends CommonProps {
  opened?: boolean;
  onClose?: () => void;
}
const ModalMain = ({ children, className, opened, onClose }: ModalProps) => (
  <FocusLayer focused={opened} onClick={onClose} blur priority={1}>
    {opened ? (
      <article
        className={cleanClassName(`${styles['modal-container']} ${className}`)}
      >
        <ModalContext.Provider value={onClose}>
          {children}
        </ModalContext.Provider>
      </article>
    ) : null}
  </FocusLayer>
);

export interface ModalTabMenuHeaderProps extends CommonProps {
  items?: TabMenuProps['items'];
}
const ModalTabMenuHeader = ({
  className,
  items,
  children,
}: ModalTabMenuHeaderProps) => {
  const onClickClosingArea = useContext(ModalContext);
  return (
    <header
      className={cleanClassName(`${styles['modal-header']} ${className}`)}
    >
      <TabMenu
        items={items}
        className={styles['tab-menu']}
        fontSize="medium"
        selectedColor="bluish-gray-800"
        fontWeight={700}
        bottomLineWeight="none"
      />
      {children}
      <Button
        icon={<X />}
        themeType="ghost"
        theme="bluish-gray-800"
        size="small"
        onClick={onClickClosingArea}
      />
    </header>
  );
};

export type ModalBodyProps = CommonProps;
const ModalBody = ({ children, className }: ModalBodyProps) => (
  <section className={cleanClassName(`${styles['modal-body']} ${className}`)}>
    {children}
  </section>
);

export type ModalFooterProps = CommonProps;
const ModalFooter = ({ children, className }: ModalFooterProps) => (
  <footer className={`${styles['modal-footer']} ${className}`}>
    {children}
  </footer>
);

export const Modal = Object.assign(ModalMain, {
  TabMenuHeader: ModalTabMenuHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
