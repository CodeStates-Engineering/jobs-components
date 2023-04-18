import { Modal } from '.';
import styles from './ConfirmModal.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms';

import type { ModalProps } from '.';
import type { ButtonProps } from '../../atoms';

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
    <Modal.Header />
    <Modal.Body className={styles['confirm-body']}>{children}</Modal.Body>
    <Modal.Footer border={false} className={styles.footer}>
      <Button {...confirmButtonProps} />
    </Modal.Footer>
  </Modal>
);
