import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface HrProps {
  color?: 'purple-550' | 'bluish-gray-100';
  weight?: 'thin' | 'medium' | 'thick';
  className?: string;
}

export const Hr = ({
  color = 'bluish-gray-100',
  weight = 'thin',
  className,
}: HrProps) => (
  <hr
    className={cleanClassName(
      `${styles.hr} ${styles[`weight-${weight}`]} ${
        styles[`color-${color}`]
      } ${className}`,
    )}
  />
);
