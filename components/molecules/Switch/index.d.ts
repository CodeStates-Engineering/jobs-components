import type { LabelWithInputProps } from '../../atoms';
export interface SwitchProps extends LabelWithInputProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    readOnly?: boolean;
    id?: string;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
        width?: CSSStyleDeclaration['width'];
        containerSize?: 'none' | 'small' | 'medium' | 'large';
    };
}
export declare const Switch: ({ value, onChange, disabled, readOnly, id, label, className, labelStyle, inputStyle, }: SwitchProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
