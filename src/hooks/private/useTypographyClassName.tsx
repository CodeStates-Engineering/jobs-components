import { cleanClassName } from '@utils';

import styles from '../../styles/typography.module.scss';

export interface UseTypographyClassNameParams {
  fontSize?:
    | 'large4x'
    | 'large3x'
    | 'large2x'
    | 'large'
    | 'medium'
    | 'normal'
    | 'small'
    | 'small2x'
    | 'small3x'
    | 'small4x';
  fontWeight?: 700 | 600 | 500 | 400;
}

export const useTypographyClassName = ({
  fontSize,
  fontWeight,
}: UseTypographyClassNameParams) => ({
  typographyClassName: cleanClassName(
    `${styles[`font-size-${fontSize}`]} ${styles[`font-weight-${fontWeight}`]}`,
  ),
});
