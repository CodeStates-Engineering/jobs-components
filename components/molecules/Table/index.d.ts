import type { ReactNode } from 'react';
import type { TableObserverProps } from '../../../contexts/TableContext';
export type { TableHeaderProps } from './TableHeader';
export type { TableTitleProps } from './TableTitle';
export type { TableRowProps } from './TableRow';
export type { TableCellProps } from './TableCell';
export type { TableBodyProps } from './TableBody';
export interface TableProps extends Partial<Pick<TableObserverProps, 'fixedColumnCount' | 'storageKey'>> {
    className?: string;
    children?: ReactNode;
}
export declare const Table: ((props: TableProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ children, className }: import("./TableHeader").TableHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ children, className, maxWidth, }: import("./TableTitle").TableTitleProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className }: import("./TableBody").TableBodyProps) => import("react/jsx-runtime").JSX.Element;
    Row: ({ children, className, ref }: import("./TableRow").TableRowProps) => import("react/jsx-runtime").JSX.Element;
    Cell: ({ children, onCopy, className, hoverStyle, }: import("./TableCell").TableCellProps) => import("react/jsx-runtime").JSX.Element;
};
