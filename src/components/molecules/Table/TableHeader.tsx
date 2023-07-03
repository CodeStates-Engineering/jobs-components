import { useContext, useEffect, Children } from 'react';
import type { ReactNode } from 'react';

import { TableContext } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableHeader.module.scss';

export interface TableHeaderProps {
  className?: string;
  children?: ReactNode;
}

export const TableHeader = ({ children, className }: TableHeaderProps) => {
  const titleCount = Children.count(children);
  const {
    setTableState,
    tableState: { titles },
    saveId,
  } = useContext(TableContext);
  useEffect(() => {
    const savedTableTitles: typeof titles | undefined = saveId
      ? (JSON.parse(window.localStorage.getItem(saveId) || '') ?? undefined)
          ?.titles
      : undefined;

    setTableState((prevState) => ({
      ...prevState,
      titles: Array.from(
        {
          length: titleCount,
        },
        (_, index) => {
          const savedTableTitle = savedTableTitles?.[index].order;
          return {
            order: savedTableTitle || {
              origin: index,
              current: index,
            },
          };
        },
      ),
    }));
  }, [titleCount, setTableState, saveId]);

  const childrenArray = Children.toArray(children);

  return (
    <thead className={cleanClassName(`${styles.header} ${className}`)}>
      <tr>{titles.map(({ order: { origin } }) => childrenArray[origin])}</tr>
    </thead>
  );
};
