/// <reference types="react" />
export interface InputWrapProps extends Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'children' | 'className' | 'color' | 'readOnly' | 'disabled'> {
    onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
    size?: 'none' | 'small' | 'medium' | 'large';
    borderRadius?: '4' | '8';
    width?: React.CSSProperties['width'];
    validationMessage?: string | null;
    description?: string | null;
    fontColor?: string;
}
export declare const InputWrap: ({ children, onClick, size, className, borderRadius, width, validationMessage, description, fontColor, disabled, readOnly, }: InputWrapProps) => import("react/jsx-runtime").JSX.Element;
