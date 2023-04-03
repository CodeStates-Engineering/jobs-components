import styles from './index.module.scss';
import { useTypography } from '../../../hooks';
import { cleanClassName } from '../../../utils';

import type { Typography } from '../../../hooks';

export interface SkeletonProps extends Typography {
  className?: string;
}

export const Skeleton = ({
  className,
  fontSize,
  fontWeight,
}: SkeletonProps) => {
  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );
  return (
    <div className={cleanClassName(`${styles.skeleton} ${className}`)}>
      {fontSize || fontWeight ? (
        <span
          className={cleanClassName(
            `${styles['text-space']} ${styles[fontSizeClassName]} ${styles[fontWeightClassName]}`,
          )}
        >
          .
        </span>
      ) : null}
      <div className={styles['shimmer-wrap']}>
        <div className={styles.shimmer} />
      </div>
    </div>
  );
};
