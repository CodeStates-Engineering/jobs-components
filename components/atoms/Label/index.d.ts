import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import type { UseTypographyClassNameParams } from '../../../hooks';
import type { InputWrapProps } from '../Input';
export interface LabelProps extends Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'children' | 'htmlFor' | 'className'>, UseTypographyClassNameParams {
    space?: 'none' | 'small' | 'medium' | 'large';
}
export interface LabelContainerProps {
    children?: React.ReactNode;
    className?: string;
    direction?: 'column' | 'row';
}
export interface LabelWithInputProps {
    className?: string;
    label?: string;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & UseTypographyClassNameParams;
    inputStyle?: Pick<InputWrapProps, 'size'>;
    children?: React.ReactNode;
}
export declare const Label: (({ children, htmlFor, className, fontSize, space, fontWeight, }: LabelProps) => JSX.Element) & {
    Container: ({ children, className, direction, }: LabelContainerProps) => JSX.Element;
    WithInput: ({ className, label, labelStyle, inputStyle, children, }: LabelWithInputProps) => JSX.Element;
};
