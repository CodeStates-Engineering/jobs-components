import type { ReactNode } from 'react';
export interface TableTitleProps {
    className?: string;
    children?: ReactNode;
    maxWidth?: React.CSSProperties['maxWidth'];
}
export declare const TableTitle: ({ children, className, maxWidth, }: TableTitleProps) => JSX.Element;
