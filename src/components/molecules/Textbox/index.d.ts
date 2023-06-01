/// <reference types="react" />
import type { Validation, Typography } from '../../../hooks';
import type { InputProps, InputType, InputWrapProps, LabelContainerProps } from '../../atoms';
type TextboxType = Exclude<InputType, 'button'>;
export interface TextboxProps<T extends TextboxType = 'text'> extends Pick<InputProps<T>, 'value' | 'onChange' | 'type' | 'placeholder' | 'disabled' | 'onFocus' | 'ref' | 'id' | 'onClick' | 'className' | 'onBlur'> {
    label?: string;
    unit?: React.ReactNode;
    validation?: Validation<TextboxProps<T>['value']>;
    validationSpace?: boolean;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
    inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> & Typography;
}
export declare const Textbox: <T extends TextboxType = "text">({ value: originalValue, unit, onChange, type, placeholder, disabled, onFocus, id, onClick, ref, label, validation, validationSpace, className, onBlur, labelStyle, inputStyle, }: TextboxProps<T>) => JSX.Element;
export {};
