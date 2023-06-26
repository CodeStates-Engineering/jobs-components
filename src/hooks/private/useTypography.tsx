import { useMemo } from 'react';

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

/**
 * @deprecated UseTypographyClassNameParams를 사용해주세요.
 */
export interface Typography {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

/**
 * @deprecated useTypographyClassName를 사용해주세요.
 */
export const useTypography = (fontSize?: FontSize, FontWeight?: FontWeight) =>
  useMemo(
    () => ({
      fontSizeClassName: fontSize ? `font-size-${fontSize}` : '',
      fontWeightClassName: FontWeight ? `font-weight-${FontWeight}` : '',
    }),
    [fontSize, FontWeight],
  );
