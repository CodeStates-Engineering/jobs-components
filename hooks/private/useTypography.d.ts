type FontSize = 'large4x' | 'large3x' | 'large2x' | 'large' | 'medium' | 'normal' | 'small' | 'small2x' | 'small3x';
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
export declare const useTypography: (fontSize?: FontSize, FontWeight?: FontWeight | undefined) => {
    fontSizeClassName: string;
    fontWeightClassName: string;
};
export {};
