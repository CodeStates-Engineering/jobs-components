import { cleanClassName } from '@utils';

import styles from '../styles/typography.module.scss';

type FontSize =
  | 'large4x'
  | 'large3x'
  | 'large2x'
  | 'large'
  | 'medium'
  | 'normal'
  | 'small'
  | 'small2x'
  | 'small3x';

type FontWeight = 700 | 500 | 400;

export interface UseTypographyClassNameParams {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

export const useTypographyClassName = ({
  fontSize,
  fontWeight,
}: UseTypographyClassNameParams) => ({
  typographyClassName: cleanClassName(
    `${styles[`font-size-${fontSize}`]} ${styles[`font-weight-${fontWeight}`]}`,
  ),
});
