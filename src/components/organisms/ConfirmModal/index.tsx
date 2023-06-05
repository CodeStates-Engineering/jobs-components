import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms';
import { Modal } from '../Modal';

import type { ButtonProps } from '../../atoms';
import type { ModalProps } from '../Modal';

export interface ConfirmModalProps extends ModalProps {
  confirmButtonProps?: ButtonProps;
}

export const ConfirmModal = ({
  children,
  className,
  confirmButtonProps,
  ...modalProps
}: ConfirmModalProps) => (
  <Modal
    {...modalProps}
    className={cleanClassName(`${styles['confirm-modal']} ${className}`)}
  >
    <Modal.Header className={styles['confirm-header']} />
    <Modal.Body className={styles['confirm-body']}>{children}</Modal.Body>
    <Modal.Footer border={false} className={styles.footer}>
      <Button
        {...confirmButtonProps}
        className={cleanClassName(
          `${styles['confirm-button']} ${confirmButtonProps?.className}`,
        )}
      />
    </Modal.Footer>
  </Modal>
);
