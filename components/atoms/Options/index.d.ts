/// <reference types="react" />
import type { UseTypographyClassNameParams } from '../../../hooks';
export type ValidOptionValue = string | number;
export interface OptionsProps<OptionValue = ValidOptionValue, Multiple = boolean> {
    opened?: boolean;
    options?: {
        label: string;
        value: OptionValue;
    }[];
    multiple?: Multiple;
    value?: Multiple extends true ? OptionValue[] : OptionValue;
    onChange?: (value?: Multiple extends true ? OptionValue[] : OptionValue) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    float?: 'top' | 'bottom';
    className?: string;
    optionStyle?: UseTypographyClassNameParams & Pick<React.CSSProperties, 'width' | 'maxHeight'>;
    cancelable?: boolean;
}
export declare const Options: <OptionValue extends ValidOptionValue, Multiple extends boolean = false>({ opened, options, multiple, value: selectedValue, onChange, onKeyDown, float, className, optionStyle, cancelable, }: OptionsProps<OptionValue, Multiple>) => JSX.Element;
