/// <reference types="react" />
import type { Validation, Typography } from '../../../hooks';
import type { InputProps, InputType, InputWrapProps, LabelContainerProps } from '../../atoms';
export interface TextboxProps<_InputType = Exclude<InputType, 'button'>> extends Pick<InputProps<_InputType>, 'value' | 'onChange' | 'type' | 'placeholder' | 'disabled' | 'onFocus' | 'ref' | 'id' | 'onClick' | 'className' | 'onBlur'> {
    onlyUpdatedByParent?: boolean;
    label?: string;
    unit?: React.ReactNode;
    validation?: Validation<TextboxProps<_InputType>['value']>;
    validationSpace?: boolean;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
    inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> & Typography;
}
export declare const Textbox: <T extends InputType = "text">({ value: originalValue, unit, onlyUpdatedByParent, onChange, type, placeholder, disabled, onFocus, id, onClick, ref, label, validation, validationSpace, className, onBlur, labelStyle, inputStyle, }: TextboxProps<T>) => JSX.Element;