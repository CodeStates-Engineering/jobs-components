import type { ReactNode } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
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
export declare const Table: ((props: TableProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Header: ({ children, className }: import("./TableHeader").TableHeaderProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Title: ({ children, className, maxWidth, }: import("./TableTitle").TableTitleProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Body: ({ children, className }: import("./TableBody").TableBodyProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Row: import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react').ForwardRefExoticComponent<import("./TableRow").TableRowProps & import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react').RefAttributes<HTMLTableRowElement>>;
    Cell: ({ children, onCopy, className, hoverStyle, }: import("./TableCell").TableCellProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
