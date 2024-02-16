import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button, FocusLayer } from '../../atoms';
import { TabMenu } from '../../molecules';

import type { FocusLayerProps } from '../../atoms';
import type { TabMenuProps } from '../../molecules';

const ModalContext = createContext<(() => void) | undefined>(undefined);

interface CommonProps {
  children?: ReactNode;
  className?: string;
}

type FormType = 'section' | 'form';

export interface ModalProps
  extends CommonProps,
    Pick<FocusLayerProps, 'priority' | 'blur'>,
    Pick<
      React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >,
      'onSubmit'
    > {
  opened?: boolean;
  onClose?: () => void;
  type?: FormType;
  bodyScroll?: boolean;
}

const ModalMain = ({
  children,
  className,
  opened,
  onClose,
  priority = 1,
  blur = true,
  type = 'section',
  bodyScroll,
  onSubmit,
}: ModalProps) => {
  const commonProps = {
    className: cleanClassName(`${styles['modal-container']} ${className}`),
    children: (
      <ModalContext.Provider value={onClose}>{children}</ModalContext.Provider>
    ),
  };

  return (
    <FocusLayer
      focused={opened}
      onBlur={onClose}
      blur={blur}
      priority={priority}
      bodyScroll={bodyScroll}
    >
      {opened
        ? {
            section: <section {...commonProps} />,
            form: <form {...commonProps} onSubmit={onSubmit} />,
          }[type]
        : null}
    </FocusLayer>
  );
};
export interface ModalHeaderProps extends CommonProps {
  border?: boolean;
}

export const ModalHeader = ({
  children,
  className,
  border = false,
}: ModalHeaderProps) => {
  const handleClose = useContext(ModalContext);
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
        theme="bluish-gray700/0"
        size="small"
        onClick={handleClose}
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
  const handleClose = useContext(ModalContext);
  return (
    <header
      className={cleanClassName(
        `${styles['modal-header']} ${styles['with-tab']} ${
          border && styles['with-border']
        } ${className}`,
      )}
    >
      <TabMenu
        items={items}
        className={styles['tab-menu']}
        fontSize="medium"
        fontWeight={700}
        bottomLineWeight="none"
      />
      <Button
        icon={<X />}
        theme="bluish-gray700/0"
        size="small"
        onClick={handleClose}
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
