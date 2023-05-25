import type { ReactNode } from 'react';
import type { Typography } from '../../../hooks';
type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface ButtonProps extends Pick<HtmlButtonProps, 'children' | 'disabled' | 'type' | 'onClick' | 'className'>, Typography, Pick<React.CSSProperties, 'width'> {
    delay?: number;
    size?: 'small3x' | 'small' | 'medium' | 'large';
    theme?: 'white/purple600' | 'white/bluish-gray800' | 'purple600/0' | 'bluish-gray700/0' | 'bluish-gray300/0' | 'bluish-gray500/0' | 'bluish-gray400/0/bluish-gray200' | 'bluish-gray700/0/bluish-gray200' | 'bluish-gray400/bluish-gray10/bluish-gray200';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'round' | 'default';
    padding?: boolean;
    focusOutline?: boolean;
}
export declare const Button: ({ delay, type, children, size, theme, onClick, disabled, shape, iconDirection, icon, padding, fontSize, fontWeight, focusOutline, className, width, }: ButtonProps) => JSX.Element;
export {};
