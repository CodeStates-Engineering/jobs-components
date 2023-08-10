type FontSize = 'large4x' | 'large3x' | 'large2x' | 'large' | 'medium' | 'normal' | 'small' | 'small2x' | 'small3x';
type FontWeight = 700 | 600 | 500 | 400;
export interface UseTypographyClassNameParams {
    fontSize?: FontSize;
    fontWeight?: FontWeight;
}
export declare const useTypographyClassName: ({ fontSize, fontWeight, }: UseTypographyClassNameParams) => {
    typographyClassName: string | undefined;
};
export {};
