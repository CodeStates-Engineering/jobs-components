import type { Ref } from 'react';
export type InputType = 'text' | 'number' | 'large-number' | 'phone-number' | 'business-number' | 'password' | 'button';
export interface InputProps<T extends InputType = 'text'> extends Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'placeholder' | 'onFocus' | 'id' | 'onClick'> {
    type?: T;
    value?: T extends 'number' | 'large-number' ? number : string;
    disabled?: boolean | 'read-only';
    onChange?: (value: InputProps<T>['value']) => void;
    ref?: Ref<HTMLInputElement>;
    name?: string;
    className?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const Input: <T extends InputType = 'text'>(props: InputProps<T>) => JSX.Element | null;
