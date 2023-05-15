import { cloneDeep, throttle } from 'lodash-es';

import type { ReactNode } from 'react';
import {
  useRef,
  useContext,
  useMemo,
  useState,
  useEffect,
  createContext,
  Children,
} from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

interface DataConfig {
  order: {
    original: number;
    current: number;
  };
  range: {
    start: number;
    end: number;
  };
}

interface TableContextType {
  draggingTitleIndex: number | null;
  setDraggingTitleIndex?: (titleIndex: number | null) => void;
  fixedTitleCount: number;
  dataConfigs?: DataConfig[];
  setDataConfigs?: (dataConfig: DataConfig[]) => void;
  titleIndex: number;
  cellIndex: number;
}

export interface TableProps {
  fixedTitleCount: number;
  className?: string;
  children?: ReactNode;
}

const TableContext = createContext<TableContextType>({
  draggingTitleIndex: null,
  fixedTitleCount: 0,
  titleIndex: 0,
  cellIndex: 0,
});

const TableMain = ({
  className,
  children,
  fixedTitleCount = 3,
}: TableProps) => {
  const [dataConfigs, setDataConfigs] = useState<DataConfig[]>([]);
  const [draggingTitleIndex, setDraggingTitleIndex] = useState<number | null>(
    null,
  );
  const tableContextValue = useMemo(
    () => ({
      fixedTitleCount,
      draggingTitleIndex,
      setDraggingTitleIndex,
      titleIndex: 0,
      cellIndex: 0,
      dataConfigs,
      setDataConfigs,
    }),
    [dataConfigs, draggingTitleIndex, fixedTitleCount],
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
  const { setDataConfigs, dataConfigs } = useContext(TableContext);
  useEffect(() => {
    setDataConfigs?.(
      Array.from({ length: titleCount }, (_, index) => ({
        order: {
          original: index,
          current: index,
        },
        range: {
          start: 0,
          end: 0,
        },
      })),
    );
  }, [titleCount, setDataConfigs]);

  const sortedChildren: ReactNode[] = new Array(titleCount);

  if (dataConfigs) {
    Children.forEach(children, (child, index) => {
      const currentOrder = dataConfigs.sort(
        (a, b) => a.order.original - b.order.original,
      )[index]?.order.current;

      sortedChildren[currentOrder] = child;
    });
  }

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
  const tableContext = useContext(TableContext);
  const {
    dataConfigs,
    titleIndex,
    setDataConfigs,
    setDraggingTitleIndex,
    draggingTitleIndex,
    fixedTitleCount,
  } = tableContext;
  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (dataConfigs) {
      const dataConfig = dataConfigs[titleIndex];
      const { range } = dataConfig;

      if (!range.start && !range.end) {
        const [start] = ref.current?.getClientRects() || [];
        range.start = start.x;
        range.end = range.start + (ref.current?.offsetWidth || 0);
        setDataConfigs?.([...dataConfigs]);
      }
    }
  }, [dataConfigs, titleIndex, setDataConfigs]);

  const handleDrag = useMemo(
    () =>
      throttle(
        (clientX: number, dataConfigs: DataConfig[], configIndex: number) => {
          const sortedDataConfigs = [...dataConfigs].sort(
            (a, b) => a.order.current - b.order.current,
          );

          const dataConfigIndexToChange = sortedDataConfigs.findIndex(
            ({ range: { start, end } }) => start <= clientX && clientX < end,
          );

          if (
            dataConfigIndexToChange >= 0 &&
            configIndex !== dataConfigIndexToChange
          ) {
            const orginalDataConfig = sortedDataConfigs[configIndex];
            const originalOrder = orginalDataConfig.order.original;
            const dataConfigToChange =
              sortedDataConfigs[dataConfigIndexToChange];
            const orderToChange = dataConfigToChange.order.original;
            orginalDataConfig.order.original = orderToChange;
            dataConfigToChange.order.original = originalOrder;
            setDraggingTitleIndex?.(dataConfigIndexToChange);
            setDataConfigs?.(sortedDataConfigs);
          }
        },
        50,
      ),
    [setDataConfigs, setDraggingTitleIndex],
  );

  if (!dataConfigs) {
    return <></>;
  }

  if (titleIndex < dataConfigs.length - 1) {
    tableContext.titleIndex += 1;
  } else {
    tableContext.titleIndex = 0;
  }

  let left = 0;
  if (titleIndex < fixedTitleCount && dataConfigs) {
    dataConfigs.forEach(({ range, order: { current } }) => {
      if (!current) {
        left -= range.start;
      }
      if (current === titleIndex) {
        left += range.start;
      }
    });
  }

  return (
    <th
      ref={ref}
      draggable
      style={{
        left,
      }}
      className={`${styles['table-title']} ${
        titleIndex < fixedTitleCount && styles.fixed
      }`}
      onDragStart={() => {
        setDraggingTitleIndex?.(titleIndex);
      }}
      onDrag={(e) => {
        e.preventDefault();
        handleDrag(e.clientX, dataConfigs, titleIndex);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragEnd={() => setDraggingTitleIndex?.(null)}
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
  const { dataConfigs } = useContext(TableContext);

  const sortedChildren: ReactNode[] = new Array(Children.count(children));

  if (dataConfigs?.length) {
    Children.forEach(children, (child, index) => {
      sortedChildren[dataConfigs[index].order.current] = child;
    });
  }

  return <tr className={styles.row}>{sortedChildren}</tr>;
};

const TableCell = ({ children }: TableRowProps) => {
  const tableContext = useContext(TableContext);
  const { cellIndex, dataConfigs, draggingTitleIndex, fixedTitleCount } =
    tableContext;

  if (dataConfigs) {
    if (cellIndex < dataConfigs.length - 1) {
      tableContext.cellIndex += 1;
    } else {
      tableContext.cellIndex = 0;
    }
  }

  let left = 0;
  let width = 0;
  if (cellIndex < fixedTitleCount && dataConfigs) {
    dataConfigs.forEach(({ range, order: { current } }) => {
      if (!current) {
        left -= range.start;
      }
      if (current === cellIndex) {
        left += range.start;
        width = range.end - range.start;
      }
    });
  }

  return (
    <td
      style={{
        left,
        width,
      }}
      className={`${styles.cell} ${
        cellIndex < fixedTitleCount && styles.fixed
      } ${draggingTitleIndex === cellIndex && styles['cell-dragging']}`}
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
