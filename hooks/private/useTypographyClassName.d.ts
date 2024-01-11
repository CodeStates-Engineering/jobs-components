import type { FontSize, FontWeight } from '@type/typo';
export interface UseTypographyClassNameParams {
    fontSize?: FontSize;
    fontWeight?: FontWeight;
}
export declare const useTypographyClassName: ({ fontSize, fontWeight, }: UseTypographyClassNameParams) => {
    typographyClassName: string | undefined;
};
