import type { DetailedHTMLProps, LabelHTMLAttributes } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import type { UseTypographyClassNameParams } from '../../../hooks';
import type { InputWrapProps } from '../Input';
export interface LabelProps extends Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'children' | 'htmlFor' | 'className'>, UseTypographyClassNameParams {
    space?: 'none' | 'small' | 'medium' | 'large';
    required?: boolean;
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
    required?: boolean;
}
export declare const Label: (({ children, htmlFor, className, fontSize, space, fontWeight, required, }: LabelProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Container: ({ children, className, direction, }: LabelContainerProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    WithInput: ({ className, label, labelStyle, inputStyle, children, required, }: LabelWithInputProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
