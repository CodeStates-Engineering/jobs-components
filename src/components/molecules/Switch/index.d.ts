/// <reference types="react" />
import type { Typography } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';
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
    };
}
export declare const Switch: ({ value, onChange, disabled, id, label, className, labelStyle, inputStyle, }: SwitchProps) => JSX.Element;
