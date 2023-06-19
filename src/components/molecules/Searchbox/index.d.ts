/// <reference types="react" />
import type { Validation, Typography } from '../../../hooks';
import type { InputProps, InputWrapProps, OptionsProps, LabelContainerProps } from '../../atoms';
export interface SearchboxProps extends Pick<InputProps<'text'>, 'value' | 'onChange' | 'disabled' | 'placeholder' | 'onFocus' | 'onClick' | 'id' | 'ref'>, Pick<OptionsProps<string, false>, 'float' | 'optionStyle'> {
    selfFilter?: boolean;
    options?: string[];
    label?: string;
    validation?: Validation<SearchboxProps['value']>;
    validationSpace?: boolean;
    className?: string;
    inputStyle?: Pick<InputWrapProps, 'size' | 'width' | 'borderRadius'> & Typography;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
    hasSearchIcon?: boolean;
}
export declare const Searchbox: ({ float, value, options: stringOptions, onChange, selfFilter, disabled, placeholder, onFocus, id, onClick, ref, label, validation, validationSpace, className, inputStyle, labelStyle, optionStyle, hasSearchIcon, }: SearchboxProps) => JSX.Element;
