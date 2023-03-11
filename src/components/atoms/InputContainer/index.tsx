import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface InputContainerProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  width?: React.CSSProperties['width'];
  children?: React.ReactNode;
  validationMessage?: string | null;
  validationSpace?: boolean;
  size?: 'none' | 'small' | 'medium' | 'large';
}

export const InputContainer = ({
  width = '100%',
  children,
  validationMessage,
  validationSpace,
  size = 'large',
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
