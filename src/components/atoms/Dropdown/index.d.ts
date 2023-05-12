/// <reference types="react" />
export interface DropdownProps {
    opened?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export declare const Dropdown: ({ opened, children, className, }: DropdownProps) => JSX.Element;
