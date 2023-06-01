import type { Ref } from 'react';
import type { Typography } from '../../../hooks';
export type InputType = 'text' | 'number' | 'large-number' | 'phone-number' | 'business-number' | 'password' | 'button';
export interface InputProps<T extends InputType = 'text'> extends Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'placeholder' | 'onFocus' | 'id' | 'onClick'>, Typography {
    type?: T;
    value?: T extends 'number' | 'large-number' ? number : string;
    disabled?: boolean | 'read-only';
    onChange?: (value: InputProps<T>['value']) => void;
    ref?: Ref<HTMLInputElement>;
    name?: string;
    className?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface InputContainerProps extends CommonProps {
    validationMessage?: string | null;
    validationSpace?: boolean;
}
export interface InputWrapProps extends CommonProps {
    onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
    size?: 'none' | 'small' | 'medium' | 'large';
    borderRadius?: '4' | '8';
    width?: CSSStyleDeclaration['width'];
}
export declare const Input: (<T extends InputType = "text">(props: InputProps<T>) => JSX.Element | null) & {
    Container: ({ children, className, validationMessage, validationSpace, }: InputContainerProps) => JSX.Element;
    Wrap: ({ children, onClick, size, className, borderRadius, width, }: InputWrapProps) => JSX.Element;
};
export {};
