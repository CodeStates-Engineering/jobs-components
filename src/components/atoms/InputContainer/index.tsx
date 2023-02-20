import { cleanClassName } from 'utils';

import styles from './index.module.scss';

export interface InputContainerProps {
  width?: React.CSSProperties['width'];
  children?: React.ReactNode;
  validationMessage?: string | null;
  size?: 'small' | 'medium' | 'large';
}

export const InputContainer = ({
  width = '300px',
  children,
  validationMessage = null,
  size = 'medium',
}: InputContainerProps) => (
  <div style={{ width }} className={styles['input-container']}>
    <div
      className={cleanClassName(
        `${styles['input-wrap']} ${validationMessage && styles.error} ${
          styles[`size-${size}`]
        }`,
      )}
    >
      {children}
    </div>
    {validationMessage ? (
      <div className={styles['validation-message-wrap']}>
        <p className={styles['validation-message']}>{validationMessage}</p>
      </div>
    ) : null}
  </div>
);
