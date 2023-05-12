export type FontSize = 'large4x' | 'large3x' | 'large2x' | 'large' | 'medium' | 'normal' | 'small' | 'small2x' | 'small3x';
export type FontWeight = 700 | 500 | 400;
export interface Typography {
    fontSize?: FontSize;
    fontWeight?: FontWeight;
}
export declare const useTypography: (fontSize?: FontSize, FontWeight?: FontWeight | undefined) => {
    fontSizeClassName: string;
    fontWeightClassName: string;
};
