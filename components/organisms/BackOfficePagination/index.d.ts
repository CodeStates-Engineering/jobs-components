import type { PaginationProps } from '../../molecules';
export interface BackOfficePaginationProps extends Omit<PaginationProps, 'type' | 'displayedCount'> {
    onChangeItemsPerPage?: (itemsPerPage?: number) => void;
    itemPerPageOptions?: number[];
}
export declare const BackOfficePagination: ({ itemsPerPage, onChangeItemsPerPage, itemPerPageOptions, ...paginationProps }: BackOfficePaginationProps) => import("react/jsx-runtime").JSX.Element;
