/// <reference types="./src/types.d.ts" />
/// <reference types="react" />
import type { InputProps, InputType, InputWrapProps, LabelContainerProps } from '@components/atoms';
import type { Validation, UseTypographyClassNameParams } from '@hooks';
type TextboxType = Exclude<InputType, 'button'>;
export interface TextboxProps<T extends TextboxType = 'text'> extends OptionalPick<InputProps<T>, 'value' | 'onChange' | 'type' | 'placeholder' | 'disabled' | 'onFocus' | 'ref' | 'id' | 'onClick' | 'className' | 'onBlur'> {
    label?: string;
    unit?: React.ReactNode;
    validation?: Validation<TextboxProps<T>['value']>;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & UseTypographyClassNameParams;
    inputStyle?: OptionalPick<InputWrapProps, 'borderRadius' | 'width' | 'size'> & UseTypographyClassNameParams;
}
export declare const Textbox: <T extends TextboxType = "text">({ value: originalValue, unit, onChange, type, placeholder, disabled, onFocus, id, onClick, ref, label, validation, className, onBlur, labelStyle, inputStyle, }: TextboxProps<T>) => JSX.Element;
export {};
