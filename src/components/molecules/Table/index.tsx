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
  dataConfigs?: DataConfig[];
  setDataConfigs?: (dataConfig: DataConfig[]) => void;
  titleRenderingIndex: number;
}

export interface TableProps {
  className?: string;
  children?: ReactNode;
}

const TableContext = createContext<TableContextType>({
  titleRenderingIndex: 0,
});

const TableMain = ({ className, children }: TableProps) => {
  const [dataConfigs, setDataConfigs] = useState<DataConfig[]>([]);
  const tableContextValue = useMemo(
    () => ({
      dataConfigs,
      setDataConfigs,
      titleRenderingIndex: 0,
    }),
    [dataConfigs],
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
  const { dataConfigs, titleRenderingIndex, setDataConfigs } = tableContext;
  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (dataConfigs) {
      const dataConfig = dataConfigs[titleRenderingIndex];
      const { range } = dataConfig;

      if (!range.start && !range.end) {
        const [start] = ref.current?.getClientRects() || [];
        range.start = start.x;
        range.end = range.start + (ref.current?.offsetWidth || 0);
      }
    }
  }, [dataConfigs, titleRenderingIndex]);

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

          if (dataConfigIndexToChange >= 0) {
            const orginalDataConfig = sortedDataConfigs[configIndex];
            const originalOrder = orginalDataConfig.order.original;
            const dataConfigToChange =
              sortedDataConfigs[dataConfigIndexToChange];
            const orderToChange = dataConfigToChange.order.original;

            orginalDataConfig.order.original = orderToChange;
            dataConfigToChange.order.original = originalOrder;

            setDataConfigs?.(sortedDataConfigs);
          }
        },
        300,
      ),
    [setDataConfigs],
  );

  if (!dataConfigs) {
    return <></>;
  }

  if (titleRenderingIndex < dataConfigs.length) {
    tableContext.titleRenderingIndex += 1;
  } else {
    tableContext.titleRenderingIndex = 0;
  }

  return (
    <th
      ref={ref}
      draggable
      className={styles['table-title']}
      onDrag={({ clientX }) => {
        handleDrag(clientX, dataConfigs, titleRenderingIndex);
      }}
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

  return <tr>{sortedChildren}</tr>;
};

const TableCell = ({ children }: TableRowProps) => <td>{children}</td>;

export const Table = Object.assign(TableMain, {
  Header: TableHeader,
  Title: TableTitle,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
