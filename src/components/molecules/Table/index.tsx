import { debounce } from 'lodash-es';

import { useMemo, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

import { TableContext } from '@contexts/TableContext';
import type { TableState, TableContextValue } from '@contexts/TableContext';
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
export interface TableProps {
  saveId?: string;
  fixedTitleCount?: number;
  className?: string;
  children?: ReactNode;
}

export const Table = Object.assign(
  ({
    className,
    children,
    fixedTitleCount = 0,
    saveId = 'test hyeokjae',
  }: TableProps) => {
    const [tableState, setTableState] = useState<TableState>({
      titles: [],
    });
    const [isLeftScrolled, setIsLeftScrolled] = useState(false);

    useEffect(() => {
      const debouncedResizeEvent = debounce(() => {
        setTableState((prevState) => {
          prevState.titles.forEach((title) => {
            title.width = undefined;
          });

          return {
            ...prevState,
          };
        });
      }, 300);

      window.addEventListener('resize', debouncedResizeEvent);
      return () => window.removeEventListener('resize', debouncedResizeEvent);
    }, []);

    const tableContextValue: TableContextValue = useMemo(() => {
      const isLoading = !tableState.titles.find(({ width }) => !!width);

      if (saveId && !isLoading) {
        window.localStorage.setItem(saveId, JSON.stringify(tableState));
      }

      return {
        tableState,
        setTableState,
        fixedTitleCount,
        isLeftScrolled,
        isLoading,
        saveId,
      };
    }, [tableState, saveId, fixedTitleCount, isLeftScrolled]);

    return (
      <article
        className={cleanClassName(`${styles.table} ${className}`)}
        onScroll={(e) => setIsLeftScrolled(e.currentTarget.scrollLeft > 0)}
      >
        <table>
          <TableContext.Provider value={tableContextValue}>
            {children}
          </TableContext.Provider>
        </table>
      </article>
    );
  },
  {
    Header: TableHeader,
    Title: TableTitle,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
  },
);
