import { useMountedLayoutEffect } from 'hooks/useMountedLayoutEffect';

import styles from './index.module.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  useMountedLayoutEffect(() => {
    console.error('test');
  }, [children]);

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
