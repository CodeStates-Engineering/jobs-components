import type { ButtonProps, OptionsProps } from '../../atoms';
export interface OptionsTagProps extends Pick<ButtonProps, 'icon' | 'className'>, Pick<OptionsProps<string, false>, 'onChange' | 'value' | 'textEllipsis'> {
    options?: {
        label: string;
        value: string;
        default?: boolean;
    }[];
}
export declare const OptionsTag: ({ icon, value, onChange, options, className, textEllipsis, }: OptionsTagProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
