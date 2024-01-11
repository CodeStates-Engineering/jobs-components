import type { FontSize, FontWeight } from '@type/typo';
import { cleanClassName } from '@utils';

import styles from '../../styles/typography.module.scss';

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
