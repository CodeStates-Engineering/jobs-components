/// <reference types="react" />
import type { InputProps, InputWrapProps, OptionsProps, LabelWithInputProps } from '../../atoms';
import type { ValidateHandler, UseTypographyClassNameParams, ValidationTrigger } from '../../../hooks';
export interface SearchboxProps extends Pick<InputProps<'text'>, 'value' | 'onChange' | 'disabled' | 'placeholder' | 'onFocus' | 'onClick' | 'id' | 'ref'>, Pick<OptionsProps<string, false>, 'float' | 'optionStyle'>, Omit<LabelWithInputProps, 'children'> {
    selfFilter?: boolean;
    options?: string[];
    validation?: ValidateHandler<SearchboxProps['value']>;
    inputStyle?: Pick<InputWrapProps, 'size' | 'width' | 'borderRadius'> & UseTypographyClassNameParams;
    hasSearchIcon?: boolean;
    validationTrigger?: ValidationTrigger;
    description?: InputWrapProps['description'];
    readOnly?: InputWrapProps['readOnly'];
}
export declare const Searchbox: ({ float, value, options: stringOptions, onChange, selfFilter, disabled, placeholder, onFocus, id, onClick, ref, label, validation, className, inputStyle, labelStyle, optionStyle, hasSearchIcon, validationTrigger, description, readOnly, }: SearchboxProps) => JSX.Element;
