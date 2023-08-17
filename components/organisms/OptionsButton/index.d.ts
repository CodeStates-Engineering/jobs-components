import type { ButtonProps, OptionsProps } from '../../atoms';
export interface OptionsButtonProps extends Pick<OptionsProps<string, false>, 'float' | 'optionStyle' | 'onChange' | 'value' | 'textEllipsis' | 'className'> {
    options?: {
        label: string;
        value: string;
    }[];
    buttonStyle: ButtonProps;
    buttonContent: string;
}
export declare const OptionsButton: ({ value, onChange, options, optionStyle, float, textEllipsis, className, buttonStyle, buttonContent, }: OptionsButtonProps) => import("react/jsx-runtime").JSX.Element;
