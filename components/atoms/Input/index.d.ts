/// <reference types="./src/types.d.ts" />
import type { Ref } from 'react';
import type { UseTypographyClassNameParams, InputType } from '../../../hooks';
export type { InputWrapProps } from './InputWrap';
export interface InputProps<T extends InputType = 'text'> extends OptionalPick<HTMLTagProps<'input'>, 'placeholder' | 'onFocus' | 'id' | 'onClick' | 'onBlur' | 'ref' | 'name' | 'className'>, UseTypographyClassNameParams {
    type?: T;
    value?: T extends 'number' | 'large-number' ? number : string;
    disabled?: boolean | 'read-only';
    onChange?: (value: InputProps<T>['value']) => void;
    ref?: Ref<HTMLInputElement>;
}
export declare const Input: (<T extends InputType = "text">(props: InputProps<T>) => JSX.Element | null) & {
    Wrap: ({ children, onClick, size, className, borderRadius, width, validationMessage, }: import("./InputWrap").InputWrapProps) => JSX.Element;
};
export type { InputType };
