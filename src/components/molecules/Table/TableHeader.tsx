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
    colunmDataListState: [colunmDataList, setColunmDataList],
    storageKey,
  } = useTableData();
  const titleCount = Children.count(children);

  useEffect(() => {
    const savedColunmIndexList: number[] | undefined =
      (storageKey &&
        JSON.parse(window.localStorage.getItem(storageKey) || '')) ??
      undefined;

    const initialColunmDataList = Array.from(
      {
        length: titleCount,
      },
      (_, index) => ({
        originalIndex: savedColunmIndexList?.[index] ?? index,
      }),
    );

    setColunmDataList(initialColunmDataList);
  }, [setColunmDataList, storageKey, titleCount]);

  const childrenArray = Children.toArray(children);

  return (
    <thead className={cleanClassName(`${styles.header} ${className}`)}>
      <tr>
        {colunmDataList.map(
          ({ originalIndex }) => childrenArray[originalIndex],
        )}
      </tr>
    </thead>
  );
};
