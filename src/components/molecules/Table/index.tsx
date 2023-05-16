import { cloneDeep, debounce, throttle } from 'lodash-es';

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
  width: number;
}

interface TableState {
  dragOverIndex?: number;
  headerHeight?: number;
  titles: TitleData[];
}

interface TableContextValue {
  tableState: TableState;
  setTableState: Dispatch<SetStateAction<TableState>>;
  fixedTitleCount: number;
  rendering: {
    titleIndex: number;
    cellIndex: number;
  };
}

const TableContext = createContext<TableContextValue>({
  tableState: {
    titles: [],
  },
  setTableState: () => undefined,
  fixedTitleCount: 0,
  rendering: {
    titleIndex: 0,
    cellIndex: 0,
  },
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
      rendering: {
        titleIndex: 0,
        cellIndex: 0,
      },
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
  height?: number;
}

const TableHeader = ({ children, height }: TableHeaderProps) => {
  const titleCount = Children.count(children);
  const {
    tableState: { headerHeight },
    setTableState,
  } = useContext(TableContext);
  useEffect(
    () =>
      setTableState((prevState) => ({
        ...prevState,
        headerHeight: height,
        titles: Array.from(
          {
            length: titleCount,
          },
          (_, order) => ({
            order,
            width: 0,
          }),
        ),
      })),
    [titleCount, setTableState, height],
  );

  return (
    <thead className={styles.header}>
      <tr
        style={{
          height: headerHeight,
        }}
      >
        {children}
      </tr>
    </thead>
  );
};

export interface TableHeaderItemProps {
  children?: ReactNode;
}

const TableTitle = ({ children }: TableHeaderItemProps) => {
  const { tableState, setTableState } = useContext(TableContext);

  const { dragOverIndex, titles } = tableState;

  const ref = useRef<HTMLTableCellElement>(null);
  const { current: element } = ref;

  const index = element?.cellIndex ?? 0;
  const order = titles[index]?.order ?? 0;

  const sortedTitles = [...titles].sort((a, b) => a.order - b.order);
  let left = 0;
  if (order) {
    for (let i = 0; i < order; i += 1) {
      left += sortedTitles[i].width;
    }
  }

  useEffect(() => {
    if (element) {
      const { offsetWidth, cellIndex, offsetHeight } = element;
      setTableState((prevState) => {
        prevState.titles[cellIndex].width = offsetWidth;

        if ((prevState.headerHeight ?? 0) < offsetHeight) {
          prevState.headerHeight = offsetHeight;
        }
        return { ...prevState };
      });
    }
  }, [element, setTableState]);

  const handleDrag = useMemo(
    () =>
      debounce((tableState: TableState) => {
        const { titles, dragOverIndex } = tableState;
        if (dragOverIndex !== undefined && dragOverIndex !== index) {
          const dragOverTitleOrder = titles[dragOverIndex].order;
          titles[dragOverIndex].order = titles[index].order;
          titles[index].order = dragOverTitleOrder;
          setTableState({ ...tableState });
        }
      }, 100),
    [index, setTableState],
  );

  return (
    <th
      ref={ref}
      style={{
        left,
      }}
      draggable
      onDragOver={(e) => {
        e.preventDefault();
        if (dragOverIndex !== index) {
          tableState.dragOverIndex = index;
        }
      }}
      onDrag={() => {
        handleDrag(tableState);
      }}
      className={styles.title}
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

  return <tr>{children}</tr>;
};

const TableCell = ({ children }: TableRowProps) => {
  const {
    rendering,
    fixedTitleCount,
    tableState: { titles, draggingTitleIndex },
  } = useContext(TableContext);

  const { cellIndex } = rendering;

  if (cellIndex < titles.length - 1) {
    rendering.cellIndex += 1;
  } else {
    rendering.cellIndex = 0;
  }

  return <td>{children}</td>;
};

export const Table = Object.assign(TableMain, {
  Header: TableHeader,
  Title: TableTitle,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
