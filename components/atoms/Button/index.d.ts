import type { ReactNode } from 'react';
import type { UseTypographyClassNameParams } from '../../../hooks';
type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface ButtonProps extends Pick<HtmlButtonProps, 'children' | 'disabled' | 'type' | 'onClick' | 'className'>, UseTypographyClassNameParams, Pick<React.CSSProperties, 'width'> {
    delay?: number;
    size?: 'small3x' | 'small2x' | 'small' | 'medium' | 'large';
    variant?: 'contained' | 'ghost' | 'outlined';
    color?: 'purple550' | 'purple600' | 'bluishGray300' | 'bluishGray400' | 'bluishGray500' | 'bluishGray600' | 'bluishGray700' | 'bluishGray800' | 'peach600';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'pill' | '8' | '4';
    padding?: boolean;
    textAlign?: 'left' | 'center' | 'right';
}
export declare const Button: ({ delay, type, children, size, color, variant, onClick, disabled, shape, iconDirection, icon, padding, fontSize, fontWeight, className, width, textAlign, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
