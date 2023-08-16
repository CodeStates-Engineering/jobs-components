/// <reference types="react" />
import type { InputProps, InputType, InputWrapProps, LabelContainerProps } from '../../atoms';
import type { ValidateHandler, UseTypographyClassNameParams, ValidationTrigger } from '../../../hooks';
type TextboxType = Exclude<InputType, 'button'>;
export interface TextboxProps<T extends TextboxType = 'text'> extends Pick<InputProps<T>, 'value' | 'onChange' | 'type' | 'placeholder' | 'disabled' | 'onFocus' | 'ref' | 'id' | 'onClick' | 'className' | 'onBlur' | 'readOnly'> {
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
export declare const Textbox: <T extends TextboxType = "text">({ value: originalValue, unit, onChange, type, placeholder, disabled, onFocus, id, onClick, ref, label, validation, className, onBlur, labelStyle, inputStyle, validationTrigger, description, readOnly, requireMessage, }: TextboxProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
