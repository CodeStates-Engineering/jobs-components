/// <reference types="react" />
import type { LabelContainerProps } from '../../atoms';
import type { UseTypographyClassNameParams } from '../../../hooks';
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
    labelStyle?: UseTypographyClassNameParams & Pick<LabelContainerProps, 'direction'>;
    inputStyle?: {
        size?: 'small' | 'medium';
        width?: CSSStyleDeclaration['width'];
        containerSize?: 'none' | 'small' | 'medium' | 'large';
    };
}
export declare const Checkbox: ({ value, onChange, disabled, id, essential, label, description, className, labelStyle, inputStyle, }: CheckboxProps) => JSX.Element;
