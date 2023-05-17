import { cloneDeep, debounce, isNumber, omit, throttle } from 'lodash-es';

import {
  useRef,
  useContext,
  useMemo,
  useState,
  useEffect,
  createContext,
  Children,
} from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

interface TitleData {
  order: number;
  width?: number;
}

interface TableState {
  draggingIndex?: number;
  titles: TitleData[];
}

interface TableContextValue {
  tableState: TableState;
  setTableState: Dispatch<SetStateAction<TableState>>;
  fixedTitleCount: number;
}

const TableContext = createContext<TableContextValue>({
  tableState: {
    titles: [],
  },
  setTableState: () => undefined,
  fixedTitleCount: 0,
});

export interface TableProps {
  fixedTitleCount: number;
  className?: string;
  children?: ReactNode;
}

const TableMain = ({
  className,
  children,
  fixedTitleCount = 3,
}: TableProps) => {
  const [tableState, setTableState] = useState<TableState>({
    titles: [],
  });

  const tableContextValue: TableContextValue = useMemo(
    () => ({
      tableState,
      setTableState,
      fixedTitleCount,
    }),
    [fixedTitleCount, tableState],
  );

  return (
    <table className={styles.table}>
      <TableContext.Provider value={tableContextValue}>
        {children}
      </TableContext.Provider>
    </table>
  );
};

export interface TableHeaderProps {
  children?: ReactNode;
}

const TableHeader = ({ children }: TableHeaderProps) => {
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
        (_, order) => ({
          order,
        }),
      ),
    }));
  }, [titleCount, setTableState]);

  const sortedChildren: ReactNode[] = Array.from({
    length: titleCount,
  });

  Children.forEach(children, (child, index) => {
    const order = titles[index]?.order;
    sortedChildren[order] = child;
  });

  return (
    <thead>
      <tr>{sortedChildren}</tr>
    </thead>
  );
};

export interface TableHeaderItemProps {
  children?: ReactNode;
}

const TableTitle = ({ children }: TableHeaderItemProps) => {
  const { tableState, setTableState, fixedTitleCount } =
    useContext(TableContext);

  const { titles } = tableState;

  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const { current: element } = ref;
    if (element) {
      const { offsetWidth, cellIndex } = element;
      setTableState((prevState) => {
        prevState.titles[cellIndex].width = offsetWidth;
        return { ...prevState };
      });
    }
  }, [ref, setTableState]);

  const index = titles.findIndex(
    (title) => title.order === ref.current?.cellIndex,
  );

  const { draggingIndex } = tableState;

  const setDraggingIndex = (draggingIndex?: number) =>
    setTableState((prevState) => ({
      ...prevState,
      draggingIndex,
    }));

  const handleDragEnter = () => {
    if (isNumber(draggingIndex) && index >= 0) {
      let sortedTitles = [...titles];

      const [draggingTitle] = sortedTitles.splice(draggingIndex, 1);

      sortedTitles = sortedTitles.sort((a, b) => a.order - b.order);

      const { order } = titles[index];

      sortedTitles = [
        ...sortedTitles.slice(0, order),
        draggingTitle,
        ...sortedTitles.slice(order),
      ];

      sortedTitles.forEach((title, newOrder) => {
        title.order = newOrder;
      });

      setTableState({
        ...tableState,
      });
    }
  };

  return (
    <th
      ref={ref}
      draggable
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() => setDraggingIndex(index)}
      onDrop={() => handleDragEnter()}
      onDragEnd={() => setDraggingIndex()}
    >
      {children}
    </th>
  );
};

export interface TableBodyProps {
  children?: ReactNode;
}

const TableBody = ({ children }: TableBodyProps) => <tbody>{children}</tbody>;

export interface TableRowProps {
  children?: ReactNode;
}

const TableRow = ({ children }: TableRowProps) => {
  const {
    tableState: { titles },
  } = useContext(TableContext);

  return <tr className={styles.row}>{children}</tr>;
};

const TableCell = ({ children }: TableRowProps) => {
  const {
    tableState: { titles, headerHeight },
  } = useContext(TableContext);

  const ref = useRef<HTMLTableCellElement>(null);
  const index = ref.current?.cellIndex;

  const { width } = titles[index ?? 0] ?? {};

  return (
    <td
      ref={ref}
      className={styles.cell}
      style={{
        width,
      }}
    >
      {children}
    </td>
  );
};

export const Table = Object.assign(TableMain, {
  Header: TableHeader,
  Title: TableTitle,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
