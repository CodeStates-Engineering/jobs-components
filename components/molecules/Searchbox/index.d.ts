/// <reference types="react" />
import type { InputProps, InputWrapProps, OptionsProps, LabelContainerProps } from '@components/atoms';
import type { Validation, UseTypographyClassNameParams } from '@hooks';
export interface SearchboxProps extends Pick<InputProps<'text'>, 'value' | 'onChange' | 'disabled' | 'placeholder' | 'onFocus' | 'onClick' | 'id' | 'ref'>, Pick<OptionsProps<string, false>, 'float' | 'optionStyle'> {
    selfFilter?: boolean;
    options?: string[];
    label?: string;
    validation?: Validation<SearchboxProps['value']>;
    className?: string;
    inputStyle?: Pick<InputWrapProps, 'size' | 'width' | 'borderRadius'> & UseTypographyClassNameParams;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & UseTypographyClassNameParams;
    hasSearchIcon?: boolean;
}
export declare const Searchbox: ({ float, value, options: stringOptions, onChange, selfFilter, disabled, placeholder, onFocus, id, onClick, ref, label, validation, className, inputStyle, labelStyle, optionStyle, hasSearchIcon, }: SearchboxProps) => JSX.Element;
