import { useContext, Children } from 'react';

import { TableContext } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableRow.module.scss';

export interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
}

export const TableRow = ({ children, className }: TableRowProps) => {
  const {
    tableState: { titles },
  } = useContext(TableContext);

  const childrenArray = Children.toArray(children);

  return (
    <tr className={cleanClassName(`${styles.row} ${className}`)}>
      {titles.map(({ order: { origin } }) => childrenArray[origin])}
    </tr>
  );
};
