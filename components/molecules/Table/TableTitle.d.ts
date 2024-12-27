import type { ReactNode } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
type MaxWidth = React.CSSProperties['maxWidth'];
export interface TableTitleProps {
    className?: string;
    children?: ReactNode;
    maxWidth?: MaxWidth;
}
export declare const TableTitle: ({ children, className, maxWidth, }: TableTitleProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
