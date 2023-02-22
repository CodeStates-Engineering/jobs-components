import { cleanClassName } from 'utils';

import styles from './index.module.scss';

export interface InputContainerProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
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
  onClick,
}: InputContainerProps) => (
  <div style={{ width }} className={styles['input-container']}>
    <div
      className={cleanClassName(
        `${styles['input-wrap']} ${validationMessage && styles.error} ${
          styles[`size-${size}`]
        }`,
      )}
      onClick={onClick}
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
