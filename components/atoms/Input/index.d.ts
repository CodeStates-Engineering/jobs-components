import type { Ref } from 'react';
import type { UseTypographyClassNameParams, InputType } from '../../../hooks';
export type { InputWrapProps } from './InputWrap';
export interface InputProps<T extends InputType = 'text'> extends Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'placeholder' | 'onFocus' | 'id' | 'onClick' | 'onBlur' | 'ref' | 'name' | 'className' | 'readOnly'>, UseTypographyClassNameParams {
    type?: T;
    value?: T extends 'number' | 'large-number' ? number : string;
    disabled?: boolean;
    onChange?: (value: InputProps<T>['value']) => void;
    ref?: Ref<HTMLInputElement>;
}
export declare const Input: (<T extends InputType = "text">(props: InputProps<T>) => JSX.Element | null) & {
    Wrap: ({ children, onClick, size, className, borderRadius, width, validationMessage, description, fontColor, readOnly, }: import("./InputWrap").InputWrapProps) => JSX.Element;
};
export type { InputType };
