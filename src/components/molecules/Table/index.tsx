import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { tableDataObserver, useTableData } from '@contexts/TableContext';
import type { TableObserverProps } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableTitle } from './TableTitle';
import styles from './index.module.scss';

export type { TableHeaderProps } from './TableHeader';
export type { TableTitleProps } from './TableTitle';
export type { TableRowProps } from './TableRow';
export type { TableCellProps } from './TableCell';
export type { TableBodyProps } from './TableBody';

export interface TableProps
  extends Partial<Pick<TableObserverProps, 'fixedColumnCount' | 'storageKey'>> {
  className?: string;
  children?: ReactNode;
}

export const Table = Object.assign(
  tableDataObserver(({ className, children, storageKey }: TableProps) => {
    const {
      columnDataListState: [columnDataList],
      isHorizontalScrolledState: [, setIsHorizontalScrolled],
    } = useTableData();

    useEffect(() => {
      if (storageKey) {
        const columnIndexList = columnDataList.map(
          ({ originalIndex }) => originalIndex,
        );

        window.localStorage.setItem(
          storageKey,
          JSON.stringify(columnIndexList),
        );
      }
    }, [storageKey, columnDataList]);

    return (
      <article
        className={cleanClassName(`${styles.table} ${className}`)}
        onScroll={(e) =>
          setIsHorizontalScrolled(e.currentTarget.scrollLeft > 0)
        }
      >
        <table>{children}</table>
      </article>
    );
  }),
  {
    Header: TableHeader,
    Title: TableTitle,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
  },
);
