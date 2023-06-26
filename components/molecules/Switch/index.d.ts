/// <reference types="react" />
import type { LabelContainerProps } from '@components/atoms';
import type { Typography } from '@hooks';
export interface SwitchProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    id?: string;
    label?: string;
    className?: string;
    labelStyle?: Typography & Pick<LabelContainerProps, 'direction'>;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
        width?: CSSStyleDeclaration['width'];
        containerSize?: 'none' | 'small' | 'medium' | 'large';
    };
}
export declare const Switch: ({ value, onChange, disabled, id, label, className, labelStyle, inputStyle, }: SwitchProps) => JSX.Element;
