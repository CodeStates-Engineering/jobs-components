/// <reference types="react" />
import type { InputProps, InputType, InputWrapProps, LabelContainerProps } from '../../atoms';
import type { ValidateHandler, UseTypographyClassNameParams, ValidationTrigger } from '../../../hooks';
type TextboxType = Exclude<InputType, 'button'>;
export interface TextboxProps<T extends TextboxType = 'text'> extends InputProps<T> {
    label?: string;
    unit?: React.ReactNode;
    validation?: ValidateHandler<TextboxProps<T>['value']>;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & UseTypographyClassNameParams;
    inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> & UseTypographyClassNameParams & {
        fontColor?: string;
    };
    validationTrigger?: ValidationTrigger;
    description?: InputWrapProps['description'];
    requireMessage?: string;
}
export declare const Textbox: <T extends TextboxType = "text">({ value: originalValue, unit, onChange, type, placeholder, disabled, onFocus, id, onClick, ref, label, validation, className, onBlur, labelStyle, inputStyle, validationTrigger, description, readOnly, requireMessage, maxLength, minLength, ...props }: TextboxProps<T>) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
