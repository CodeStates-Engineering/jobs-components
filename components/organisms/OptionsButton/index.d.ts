import type { ButtonProps, OptionsProps, ValidOptionValue } from '../../atoms';
export interface OptionsButtonProps<_ValidOptionValue = ValidOptionValue, _Multiple = boolean> extends Pick<OptionsProps<_ValidOptionValue, _Multiple>, 'float' | 'optionStyle' | 'onChange' | 'multiple' | 'value' | 'textEllipsis' | 'className' | 'options'> {
    buttonStyle: ButtonProps;
    buttonContent: string;
}
export declare const OptionsButton: ({ value, onChange, options, optionStyle, float, textEllipsis, className, buttonStyle, buttonContent, multiple, }: OptionsButtonProps) => import("react/jsx-runtime").JSX.Element;
