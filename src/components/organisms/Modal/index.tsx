import { X } from 'react-feather';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Button, FocusLayer } from '../../atoms';
import { TabMenu } from '../../molecules';

import type { FocusLayerProps } from '../../atoms';
import type { TabMenuProps } from '../../molecules';

export interface ModalProps
  extends Pick<FocusLayerProps, 'blur' | 'className' | 'children'> {
  opened?: boolean;
  className?: string;
  onClose?: () => void;
  tabItems?: TabMenuProps['items'];
}

export const Modal = ({
  className,
  opened = false,
  tabItems,
  blur = true,
  onClose,
  children,
}: ModalProps) => {
  const [openStatus] = useClosingState(opened);
  return (
    <FocusLayer
      focused={opened}
      onClick={onClose}
      blur={blur}
      className={styles.container}
      priority={1}
    >
      {openStatus ? (
        <article
          className={cleanClassName(
            `${styles['modal-container']} ${
              openStatus === 'closing' && styles.closing
            } ${className}`,
          )}
        >
          <header className={styles['modal-header']}>
            <TabMenu
              items={tabItems}
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
              onClick={onClose}
            />
          </header>
          {children}
        </article>
      ) : null}
    </FocusLayer>
  );
};
