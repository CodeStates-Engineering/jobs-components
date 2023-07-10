import type { ReactNode } from 'react';
type MaxWidth = React.CSSProperties['maxWidth'];
export interface TableTitleProps {
    className?: string;
    children?: ReactNode;
    maxWidth?: MaxWidth;
}
export declare const TableTitle: ({ children, className, maxWidth, }: TableTitleProps) => JSX.Element;
export {};
