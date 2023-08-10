import type { ReactNode } from 'react';
import { X } from 'react-feather';

import { Button } from '@components/atoms';
import { FloatingModal } from '@components/molecules/FloatingModal';

import styles from './index.module.scss';

interface CommonProps {
  children?: ReactNode;
  className?: string;
}

interface FloatingActionModalProps
  extends CommonProps,
    Pick<
      React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >,
      'onSubmit'
    > {
  count?: number;
  opened?: boolean;
  onClose?: () => void;
}
export const FloatingActionModal = ({
  count = 3,
  opened,
  onClose,
  children,
  className,
}: FloatingActionModalProps) => (
  <FloatingModal opened={opened} className={className}>
    <FloatingModal.Body>
      <div className={styles['action-floating-modal-container']}>
        <div className={styles['action-count']}>
          <span className={styles['action-count-circle']}>{count}</span>{' '}
          <span className={styles['action-count-text']}>선택됨</span>
        </div>
        {children}
      </div>
    </FloatingModal.Body>
    <FloatingModal.Tail>
      <div style={{ display: 'flex', alignSelf: 'center' }}>
        <Button
          icon={<X />}
          theme="bluish-gray700/0"
          size="small3x"
          onClick={onClose}
        />
      </div>
    </FloatingModal.Tail>
  </FloatingModal>
);
