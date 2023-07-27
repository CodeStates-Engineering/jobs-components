/// <reference types="react" />
export interface CheckTagProps {
    value?: boolean;
    onChange?: (value: boolean) => void;
    children?: React.ReactNode;
}
export declare const CheckTag: ({ value, onChange, children, }: CheckTagProps) => JSX.Element;
