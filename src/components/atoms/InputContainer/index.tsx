import { cleanClassName } from 'utils';

import styles from './index.module.scss';

export interface InputContainerProps {
  width?: React.CSSProperties['width'];
  children?: React.ReactNode;
  validationMessage?: string;
}

export const InputContainer = ({
  width = '300px',
  children,
  validationMessage,
}: InputContainerProps) => (
  <div style={{ width }} className={styles['input-container']}>
    <div
      className={cleanClassName(
        `${styles['input-wrap']} ${validationMessage && styles.invalid}`,
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
