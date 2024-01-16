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
    containerRef?: React.Ref<HTMLDivElement>;
    labelStyle?: UseTypographyClassNameParams & Pick<LabelContainerProps, 'direction'>;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
        isRound?: boolean;
        width?: CSSStyleDeclaration['width'];
        containerSize?: 'none' | 'small' | 'medium' | 'large';
    };
    validationTrigger?: ValidationTrigger;
}
export declare const Checkbox: ({ value, onChange, disabled, id, essential, label, description, className, labelStyle, inputStyle, validationTrigger, containerRef, }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
