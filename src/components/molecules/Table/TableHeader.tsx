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
    const initialColumnDataList = Array.from(
      {
        length: titleCount,
      },
      (_, originalIndex) => ({
        originalIndex,
      }),
    );

    if (storageKey) {
      const savedColumnIndexListString =
        window.localStorage.getItem(storageKey);

      if (savedColumnIndexListString) {
        const savedColumnIndexList: number[] | undefined = JSON.parse(
          savedColumnIndexListString,
        );

        if (savedColumnIndexList?.length !== titleCount) {
          window.localStorage.removeItem(storageKey);
        } else {
          initialColumnDataList.forEach((columnData, originalIndex) => {
            columnData.originalIndex = savedColumnIndexList[originalIndex];
          });
        }
      }
    }

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
