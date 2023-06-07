/// <reference types="react" />
import type { Typography, Validation } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';
export interface SwitchProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    id?: string;
    label?: string;
    validation?: Validation<SwitchProps['value']>;
    validationSpace: boolean;
    className?: string;
    labelStyle?: Typography & Pick<LabelContainerProps, 'direction'>;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
        width?: CSSStyleDeclaration['width'];
        containerSize?: 'none' | 'small' | 'medium' | 'large';
    };
}
export declare const Switch: ({ value, onChange, disabled, id, label, validation, validationSpace, className, labelStyle, inputStyle, }: SwitchProps) => JSX.Element;
