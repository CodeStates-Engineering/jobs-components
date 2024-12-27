/// <reference types="react" />
import type { UseTypographyClassNameParams } from '../../../hooks';
export type ValidOptionValue = string | number;
export interface OptionsProps<OptionValue = ValidOptionValue, Multiple = boolean> {
    opened?: boolean;
    options?: {
        label: string;
        value: OptionValue;
        disabled?: boolean;
    }[];
    multiple?: Multiple;
    value?: Multiple extends true ? OptionValue[] : OptionValue;
    onChange?: (value?: Multiple extends true ? OptionValue[] : OptionValue) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    float?: 'top' | 'bottom';
    className?: string;
    optionStyle?: UseTypographyClassNameParams & Pick<React.CSSProperties, 'width' | 'maxHeight'>;
    cancelable?: boolean;
    textEllipsis?: boolean;
}
export declare const Options: <OptionValue extends ValidOptionValue, Multiple extends boolean = false>({ opened, options, multiple, value: selectedValue, onChange, onKeyDown, float, className, optionStyle, cancelable, textEllipsis, }: OptionsProps<OptionValue, Multiple>) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
