import type { ReactNode } from 'react';
import { X } from 'react-feather';

import type { FocusLayerProps } from '@components/atoms';
import { Button } from '@components/atoms';
import { FloatingModal } from '@components/molecules';

import styles from './index.module.scss';

interface CommonProps {
  children?: ReactNode;
  className?: string;
}

export interface FloatingActionModalProps
  extends CommonProps,
    Pick<
      React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >,
      'onSubmit'
    >,
    Pick<FocusLayerProps, 'priority'> {
  count?: number;
  opened?: boolean;
  onClose?: () => void;
}
export const FloatingActionModal = ({
  count = 0,
  opened,
  onClose,
  children,
  className,
  priority = 3,
}: FloatingActionModalProps) => (
  <FloatingModal opened={opened} className={className} priority={priority}>
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
