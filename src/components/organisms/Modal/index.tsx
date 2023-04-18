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

export interface ModalHeaderProps extends CommonProps {
  border?: boolean;
}

export const ModalHeader = ({
  children,
  className,
  border = false,
}: ModalHeaderProps) => {
  const onClickClosingArea = useContext(ModalContext);
  return (
    <header
      className={cleanClassName(
        `${styles['modal-header']} ${
          border && styles['with-border']
        } ${className}`,
      )}
    >
      <div>{children}</div>
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

export interface ModalTabMenuHeaderProps
  extends Omit<ModalHeaderProps, 'children'> {
  items?: TabMenuProps['items'];
}
const ModalTabMenuHeader = ({
  className,
  items,
  border = true,
}: ModalTabMenuHeaderProps) => {
  const onClickClosingArea = useContext(ModalContext);
  return (
    <header
      className={cleanClassName(
        `${styles['modal-header']} ${styles['tab-menu']} ${
          border && styles['with-border']
        } ${className}`,
      )}
    >
      <TabMenu
        items={items}
        className={styles['tab-menu']}
        fontSize="medium"
        selectedColor="bluish-gray-800"
        fontWeight={700}
        bottomLineWeight="none"
      />
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

export interface ModalFooterProps extends CommonProps {
  border?: boolean;
}

const ModalFooter = ({
  children,
  className,
  border = true,
}: ModalFooterProps) => (
  <footer
    className={`${styles['modal-footer']} ${
      border && styles['with-border']
    } ${className}`}
  >
    {children}
  </footer>
);

export const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  TabMenuHeader: ModalTabMenuHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
