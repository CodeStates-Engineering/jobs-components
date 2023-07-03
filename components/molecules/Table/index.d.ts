import type { ReactNode } from 'react';
export type { TableHeaderProps } from './TableHeader';
export type { TableTitleProps } from './TableTitle';
export type { TableRowProps } from './TableRow';
export type { TableCellProps } from './TableCell';
export type { TableBodyProps } from './TableBody';
export interface TableProps {
    saveId?: string;
    fixedTitleCount?: number;
    className?: string;
    children?: ReactNode;
}
export declare const Table: (({ className, children, fixedTitleCount, saveId, }: TableProps) => JSX.Element) & {
    Header: ({ children, className }: import("./TableHeader").TableHeaderProps) => JSX.Element;
    Title: ({ children, width, className, draggable, }: import("./TableTitle").TableTitleProps) => JSX.Element;
    Body: ({ children, className }: import("./TableBody").TableBodyProps) => JSX.Element;
    Row: ({ children, className }: import("./TableRow").TableRowProps) => JSX.Element;
    Cell: ({ children, onCopy, className, hoverStyle, }: import("./TableCell").TableCellProps) => JSX.Element;
};
