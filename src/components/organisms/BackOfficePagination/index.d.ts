/// <reference types="react" />
import type { PaginationProps } from '../../molecules';
interface BackOfficePaginationProps extends Omit<PaginationProps, 'type' | 'displayedCount'> {
    onChangeItemsPerPage?: (itemsPerPage?: number) => void;
    itemPerPageOptions?: number[];
}
export declare const BackOfficePagination: ({ itemsPerPage, onChangeItemsPerPage, itemPerPageOptions, ...paginationProps }: BackOfficePaginationProps) => JSX.Element;
export {};
