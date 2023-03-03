import { cleanClassName } from 'utils';

import { useMemo } from 'react';

import styles from './index.module.scss';

export interface HrProps {
  type?: 'vertical' | 'horizontal';
  color?: 'purple-550' | 'bluish-gray-100';
  weight?: 'thin' | 'medium' | 'thick';
  size?: React.CSSProperties['width'] | React.CSSProperties['height'];
  margin?: React.CSSProperties['margin'];
}

export const Hr = ({
  type = 'horizontal',
  color = 'bluish-gray-100',
  weight = 'thin',
  size = '100%',
  margin,
}: HrProps) => {
  const hrProps = useMemo(
    () => ({
      className: cleanClassName(
        `${styles.hr} ${styles[`type-${type}`]} ${styles[`weight-${weight}`]} ${
          styles[`color-${color}`]
        }`,
      ),
      style: {
        [type === 'horizontal' ? 'width' : 'height']: size,
        margin,
      },
    }),
    [type, color, weight, size, margin],
  );
  return type === 'horizontal' ? <hr {...hrProps} /> : <div {...hrProps} />;
};
