import { cleanClassName } from 'utils';

import styles from './index.module.scss';

export interface InputContainerProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  width?: React.CSSProperties['width'];
  children?: React.ReactNode;
  validationMessage?: string | null;
  validationSpace?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const InputContainer = ({
  width = '300px',
  children,
  validationMessage,
  validationSpace,
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
      <p className={styles['validation-message']}>{validationMessage}</p>
    ) : (
      validationSpace && <div className={styles['validation-space']} />
    )}
  </div>
);
