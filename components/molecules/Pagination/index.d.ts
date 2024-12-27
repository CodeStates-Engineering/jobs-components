export interface PaginationProps {
    onChange?: (page: number) => void;
    itemsPerPage?: number;
    totalItems?: number;
    currentPage?: number;
    displayedCount?: number;
    className?: string;
    loading?: boolean;
    type?: 'default' | 'simple';
    size: 'small' | 'medium';
}
export declare const Pagination: ({ onChange, itemsPerPage, totalItems, currentPage, displayedCount, className, loading, type, size, }: PaginationProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
