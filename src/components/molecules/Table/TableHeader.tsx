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
  } = useContext(TableContext);
  useEffect(() => {
    setTableState((prevState) => ({
      ...prevState,
      titles: Array.from(
        {
          length: titleCount,
        },
        (_, index) => ({
          order: {
            origin: index,
            current: index,
          },
        }),
      ),
    }));
  }, [titleCount, setTableState]);

  const childrenArray = Children.toArray(children);

  return (
    <thead className={cleanClassName(`${styles.header} ${className}`)}>
      <tr>{titles.map(({ order: { origin } }) => childrenArray[origin])}</tr>
    </thead>
  );
};
