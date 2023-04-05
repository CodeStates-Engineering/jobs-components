import type { ReactNode } from 'react';
import {
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
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
  onClickClosingArea?: () => (() => void) | void;
}
const ModalMain = ({
  children,
  className,
  opened,
  onClickClosingArea,
}: ModalProps) => {
  const [openStatus] = useClosingState(opened);

  const [closeCallback, setCloseCallback] = useState<() => void>();

  const handleClickClosingArea = useCallback(() => {
    const callback = onClickClosingArea?.();
    setCloseCallback(() => callback);
  }, [onClickClosingArea]);

  useEffect(() => {
    if (!openStatus) {
      closeCallback?.();
    }
  }, [openStatus, closeCallback]);

  return openStatus ? (
    <FocusLayer
      focused={opened}
      onClick={handleClickClosingArea}
      blur
      priority={1}
    >
      <article
        className={cleanClassName(
          `${styles['modal-container']} ${
            openStatus === 'closing' && styles.closing
          } ${className}`,
        )}
      >
        <ModalContext.Provider value={handleClickClosingArea}>
          {children}
        </ModalContext.Provider>
      </article>
    </FocusLayer>
  ) : (
    <></>
  );
};

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
