/// <reference types="react" />
import type { Typography } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';
export interface CheckboxProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    disabled?: boolean;
    id?: string;
    essential?: boolean;
    label?: string;
    description?: React.ReactNode;
    className?: string;
    labelStyle?: Typography & Pick<LabelContainerProps, 'direction'>;
    inputStyle?: {
        size?: 'small' | 'medium';
        width?: CSSStyleDeclaration['width'];
    };
}
export declare const Checkbox: ({ value, onChange, disabled, id, essential, label, description, className, labelStyle, inputStyle, }: CheckboxProps) => JSX.Element;
