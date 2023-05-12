/// <reference types="react" />
export interface PaginationProps {
    onChange?: (page: number) => void;
    itemsPerPage?: number;
    totalItems?: number;
    currentPage?: number;
    displayedCount?: number;
    className?: string;
    loading?: boolean;
}
export declare const Pagination: ({ onChange, itemsPerPage, totalItems, currentPage, displayedCount, className, loading, }: PaginationProps) => JSX.Element;
