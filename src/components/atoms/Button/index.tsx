import styles from './index.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
