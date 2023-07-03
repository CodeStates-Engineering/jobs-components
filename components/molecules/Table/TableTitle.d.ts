import type { ReactNode } from 'react';
export interface TableTitleProps {
    width?: React.CSSProperties['width'];
    draggable?: boolean;
    className?: string;
    children?: ReactNode;
}
export declare const TableTitle: ({ children, width, className, draggable, }: TableTitleProps) => JSX.Element;
