import type { PaginationProps } from '../../molecules';
export interface BackOfficePaginationProps extends Omit<PaginationProps, 'type' | 'displayedCount'> {
    onChangeItemsPerPage?: (itemsPerPage?: number) => void;
    itemPerPageOptions?: number[];
}
export declare const BackOfficePagination: ({ itemsPerPage, onChangeItemsPerPage, itemPerPageOptions, ...paginationProps }: BackOfficePaginationProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
