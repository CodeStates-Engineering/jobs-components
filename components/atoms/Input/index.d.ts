import type { Ref } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import type { UseTypographyClassNameParams, InputType } from '../../../hooks';
export type { InputWrapProps } from './InputWrap';
export interface InputProps<T extends InputType = 'text'> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'size'>, UseTypographyClassNameParams {
    type?: T;
    value?: T extends 'number' | 'large-number' ? number : string;
    disabled?: boolean;
    onChange?: (value: InputProps<T>['value']) => void;
    ref?: Ref<HTMLInputElement>;
}
export declare const Input: (<T extends InputType = "text">(props: InputProps<T>) => React.ReactNode) & {
    Wrap: ({ children, onClick, size, className, borderRadius, width, validationMessage, description, fontColor, disabled, readOnly, }: import("./InputWrap").InputWrapProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
export type { InputType };
