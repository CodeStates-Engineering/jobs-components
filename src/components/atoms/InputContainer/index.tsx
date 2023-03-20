import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface InputContainerProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  children?: React.ReactNode;
  validationMessage?: string | null;
  validationSpace?: boolean;
  size?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

export const InputContainer = ({
  children,
  validationMessage,
  validationSpace,
  size = 'large',
  onClick,
  className,
}: InputContainerProps) => (
  <div className={cleanClassName(`${styles['input-container']} ${className}`)}>
    <div
      className={cleanClassName(
        `${styles['input-wrap']} ${validationMessage && styles.error} ${
          size !== 'none' && styles[`size-${size}`]
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
