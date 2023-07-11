/// <reference types="react" />
export interface TableCellProps {
    className?: string;
    children?: React.ReactNode;
    onCopy?: (value: string) => void;
    hoverStyle?: Pick<React.CSSProperties, 'maxHeight' | 'maxWidth'>;
}
export declare const TableCell: ({ children, onCopy, className, hoverStyle, }: TableCellProps) => JSX.Element;