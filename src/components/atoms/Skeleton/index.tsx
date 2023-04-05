import type { ReactNode } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface SkeletonProps {
  className?: string;
  children?: ReactNode;
}

export const Skeleton = ({ className, children }: SkeletonProps) => (
  <div className={cleanClassName(`${styles.skeleton} ${className}`)}>
    {children ? <span className={styles['text-space']}>{children}</span> : null}
    <div className={styles['shimmer-wrap']}>
      <div className={styles.shimmer} />
    </div>
  </div>
);
