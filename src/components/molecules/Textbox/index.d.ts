/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, InputType, InputContainerInteractionProps } from '../../atoms';
export type TextboxProps<_InputType extends InputType = 'text'> = Omit<InputProps<_InputType> & InputContainerProps, 'validationMessage' | 'name' | 'children'> & Omit<InputContainerInteractionProps, 'children'> & {
    onlyUpdatedByParent?: boolean;
    label?: string;
    unit?: React.ReactNode;
    validation?: Validation<TextboxProps<_InputType>['value']>;
    validationSpace?: boolean;
    labelDirection?: 'column' | 'row';
};
export declare const Textbox: <T extends InputType = "text">({ value: originalValue, unit, onlyUpdatedByParent, onChange, type, placeholder, disabled, onFocus, size, id, onClick, ref, label, validation, validationSpace, className, borderRadius, onBlur, labelDirection, }: TextboxProps<T>) => JSX.Element;
