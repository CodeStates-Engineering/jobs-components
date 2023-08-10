/// <reference types="react" />
import type { LabelContainerProps } from '../../atoms';
import type { UseTypographyClassNameParams, ValidationTrigger } from '../../../hooks';
export interface CheckboxProps {
    value?: boolean | null;
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
    validationTrigger?: ValidationTrigger;
}
export declare const Checkbox: ({ value, onChange, disabled, id, essential, label, description, className, labelStyle, inputStyle, validationTrigger, }: CheckboxProps) => JSX.Element;
