import { useMemo } from 'react';

export type FontSize =
  | 'large4x'
  | 'large3x'
  | 'large2x'
  | 'large'
  | 'medium'
  | 'normal'
  | 'small'
  | 'small2x'
  | 'small3x';

export type FontWeight = 700 | 500 | 400;

export const useTypography = (fontSize: FontSize, FontWeight: FontWeight) =>
  useMemo(
    () => ({
      fontSize: `font-size-${fontSize}`,
      fontWeight: `font-weight-${FontWeight}`,
    }),
    [fontSize, FontWeight],
  );
