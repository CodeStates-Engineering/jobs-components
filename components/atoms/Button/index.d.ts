import type { ReactNode } from 'react';
import type { UseTypographyClassNameParams } from '../../../hooks';
type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface ButtonProps extends Pick<HtmlButtonProps, 'children' | 'disabled' | 'type' | 'onClick' | 'className'>, UseTypographyClassNameParams, Pick<React.CSSProperties, 'width'> {
    delay?: number;
    size?: 'small3x' | 'small2x' | 'small' | 'medium' | 'large';
    theme?: 'white/purple600' | 'white/bluish-gray800' | 'purple600/0' | 'bluish-gray700/0' | 'bluish-gray300/0' | 'bluish-gray500/0' | 'bluish-gray400/0/bluish-gray200' | 'bluish-gray700/0/bluish-gray200' | 'bluish-gray400/bluish-gray10/bluish-gray200' | 'purple550/purple50/purple100';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'pill' | '8' | '4';
    padding?: boolean;
    focusOutline?: boolean;
    textAlign?: 'left' | 'center' | 'right';
}
export declare const Button: ({ delay, type, children, size, theme, onClick, disabled, shape, iconDirection, icon, padding, fontSize, fontWeight, focusOutline, className, width, textAlign, }: ButtonProps) => JSX.Element;
export {};
