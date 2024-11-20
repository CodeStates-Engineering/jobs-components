/// <reference types="react" />
export interface TableRowProps {
    className?: string;
    children?: React.ReactNode;
    ref?: (node: HTMLElement | null) => void;
}
export declare const TableRow: ({ children, className, ref }: TableRowProps) => import("react/jsx-runtime").JSX.Element;
