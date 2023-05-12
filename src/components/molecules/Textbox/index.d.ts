/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, InputType, InputContainerIntreractionProps } from '../../atoms';
export type TextboxProps<_InputType extends InputType = 'text'> = Omit<InputProps<_InputType> & InputContainerProps, 'validationMessage' | 'name' | 'children'> & InputContainerIntreractionProps & {
    onlyUpdatedByParent?: boolean;
    label?: string;
    unit?: React.ReactNode;
    validation?: Validation<TextboxProps<_InputType>['value']>;
    validationSpace?: boolean;
};
export declare const Textbox: <T extends InputType = "text">({ value: originalValue, unit, onlyUpdatedByParent, onChange, type, placeholder, disabled, onFocus, size, id, onClick, ref, label, validation, validationSpace, className, }: TextboxProps<T>) => JSX.Element;
