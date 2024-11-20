import { Children, forwardRef } from 'react';

import { useTableData } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableRow.module.scss';

export interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className }, ref) => {
    const {
      columnDataListState: [columnDataList],
    } = useTableData();

    const childrenArray = Children.toArray(children);

    return (
      <tr
        className={cleanClassName(`${styles.row} ${className || ''}`)}
        ref={ref}
      >
        {columnDataList.map(
          ({ originalIndex }) => childrenArray[originalIndex],
        )}
      </tr>
    );
  },
);

TableRow.displayName = 'TableRow';
