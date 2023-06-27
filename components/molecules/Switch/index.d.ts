/// <reference types="react" />
import type { LabelWithInputProps } from '../../atoms';
export interface SwitchProps extends LabelWithInputProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    id?: string;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
        width?: CSSStyleDeclaration['width'];
        containerSize?: 'none' | 'small' | 'medium' | 'large';
    };
}
export declare const Switch: ({ value, onChange, disabled, id, label, className, labelStyle, inputStyle, }: SwitchProps) => JSX.Element;
