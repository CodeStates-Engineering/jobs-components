import type { ReactNode } from 'react';
import type { TableObserverProps } from '@contexts/TableContext';
export type { TableHeaderProps } from './TableHeader';
export type { TableTitleProps } from './TableTitle';
export type { TableRowProps } from './TableRow';
export type { TableCellProps } from './TableCell';
export type { TableBodyProps } from './TableBody';
export interface TableProps extends Partial<Pick<TableObserverProps, 'fixedColunmCount' | 'storageKey'>> {
    className?: string;
    children?: ReactNode;
}
export declare const Table: ((props: TableProps) => JSX.Element) & {
    Header: ({ children, className }: import("./TableHeader").TableHeaderProps) => JSX.Element;
    Title: ({ children, className, maxWidth, }: import("./TableTitle").TableTitleProps) => JSX.Element;
    Body: ({ children, className }: import("./TableBody").TableBodyProps) => JSX.Element;
    Row: ({ children, className }: import("./TableRow").TableRowProps) => JSX.Element;
    Cell: ({ children, onCopy, className, hoverStyle, }: import("./TableCell").TableCellProps) => JSX.Element;
};
