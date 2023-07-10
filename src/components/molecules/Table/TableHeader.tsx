import { useEffect, Children } from 'react';
import type { ReactNode } from 'react';

import { useTableData } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableHeader.module.scss';

export interface TableHeaderProps {
  className?: string;
  children?: ReactNode;
}

export const TableHeader = ({ children, className }: TableHeaderProps) => {
  const {
    columnDataListState: [columnDataList, setColumnDataList],
    storageKey,
  } = useTableData();
  const titleCount = Children.count(children);

  useEffect(() => {
    const savedColumnIndexList: number[] | undefined =
      (storageKey &&
        JSON.parse(window.localStorage.getItem(storageKey) || '')) ??
      undefined;

    const initialColumnDataList = Array.from(
      {
        length: titleCount,
      },
      (_, index) => ({
        originalIndex: savedColumnIndexList?.[index] ?? index,
      }),
    );

    setColumnDataList(initialColumnDataList);
  }, [setColumnDataList, storageKey, titleCount]);

  const childrenArray = Children.toArray(children);

  return (
    <thead className={cleanClassName(`${styles.header} ${className}`)}>
      <tr>
        {columnDataList.map(
          ({ originalIndex }) => childrenArray[originalIndex],
        )}
      </tr>
    </thead>
  );
};
