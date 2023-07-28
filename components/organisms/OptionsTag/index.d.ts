/// <reference types="react" />
import type { ButtonProps } from '../../atoms';
export interface OptionsTagProps extends Pick<ButtonProps, 'icon' | 'className'> {
    value?: string;
    onChange?: (value: string) => void;
    options?: {
        label: string;
        value: string;
        default?: boolean;
    }[];
}
export declare const OptionsTag: ({ icon, value, onChange, options, className, }: OptionsTagProps) => JSX.Element;
