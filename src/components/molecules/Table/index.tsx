import { isNumber } from 'lodash-es';

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
import { Copy } from 'react-feather';
import nodeToString from 'react-node-to-string';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms';

interface TitleData {
  order: {
    origin: number;
    current: number;
  };
  width?: number;
}

interface TableState {
  draggingOrder?: number;
  dropOrder?: number;
  hoveredOrder?: number;
  titles: TitleData[];
}

interface TableContextValue {
  tableState: TableState;
  setTableState: Dispatch<SetStateAction<TableState>>;
  fixedTitleCount: number;
  isLeftScrolled: boolean;
}

const TableContext = createContext<TableContextValue>({
  tableState: {
    titles: [],
  },
  setTableState: () => undefined,
  fixedTitleCount: 0,
  isLeftScrolled: false,
});

export interface TableProps {
  fixedTitleCount: number;
  className?: string;
  children?: ReactNode;
}

const TableMain = ({ className, children, fixedTitleCount }: TableProps) => {
  const [tableState, setTableState] = useState<TableState>({
    titles: [],
  });
  const [isLeftScrolled, setIsLeftScrolled] = useState(false);

  const tableContextValue: TableContextValue = useMemo(
    () => ({
      tableState,
      setTableState,
      fixedTitleCount,
      isLeftScrolled,
    }),
    [fixedTitleCount, tableState, isLeftScrolled],
  );

  return (
    <article
      className={cleanClassName(`${styles.table} ${className}`)}
      onScroll={(e) => setIsLeftScrolled(e.currentTarget.scrollLeft > 0)}
    >
      <table>
        <TableContext.Provider value={tableContextValue}>
          {children}
        </TableContext.Provider>
      </table>
    </article>
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
    <thead className={styles.header}>
      <tr>{titles.map(({ order: { origin } }) => childrenArray[origin])}</tr>
    </thead>
  );
};

export interface TableTitleProps {
  children?: ReactNode;
  width?: number;
}

const TableTitle = ({ children, width }: TableTitleProps) => {
  const { tableState, setTableState, fixedTitleCount, isLeftScrolled } =
    useContext(TableContext);

  const { titles } = tableState;

  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const { current: element } = ref;
    if (element) {
      const { offsetWidth, cellIndex } = element;

      setTableState((prevState) => {
        prevState.titles[cellIndex].width = width ?? offsetWidth;

        return { ...prevState };
      });
    }
  }, [ref, setTableState, width]);

  const currentOrder = ref.current?.cellIndex ?? -1;

  const { draggingOrder, hoveredOrder, dropOrder } = tableState;

  const setHoveredOrder = (hoveredOrder?: number) => {
    if (draggingOrder === undefined) {
      setTableState((prevState) => ({
        ...prevState,
        hoveredOrder,
      }));
    }
  };

  const handleDrop = () => {
    if (isNumber(draggingOrder) && currentOrder >= 0) {
      let sortedTitles = [...titles];

      const [draggingTitle] = sortedTitles.splice(draggingOrder, 1);

      sortedTitles = sortedTitles.sort(
        (a, b) => a.order.current - b.order.current,
      );

      const { order } = titles[currentOrder];

      sortedTitles = [
        ...sortedTitles.slice(0, order.current),
        draggingTitle,
        ...sortedTitles.slice(order.current),
      ];

      sortedTitles.forEach((title, newOrder) => {
        title.order.current = newOrder;
      });

      const newTableState = {
        ...tableState,
        titles: sortedTitles,
        dropOrder: undefined,
        draggingOrder: undefined,
        hoveredOrder: undefined,
      };

      setTableState(newTableState);

      setTimeout(() =>
        setTableState({
          ...newTableState,
          hoveredOrder: currentOrder,
        }),
      );
    }
  };

  const isDropTarget = dropOrder === currentOrder;
  const isDragging = draggingOrder === currentOrder;

  let left = 0;
  for (let i = 0; i < currentOrder; i += 1) {
    left += titles[i]?.width ?? 0;
  }

  return (
    <th
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.title} ${currentOrder < fixedTitleCount && styles.fixed} ${
          currentOrder === fixedTitleCount - 1 &&
          isLeftScrolled &&
          styles.shadow
        } ${hoveredOrder === currentOrder && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingOrder ?? 0) > dropOrder
              ? styles['drop-left']
              : styles['drop-right']))
        } ${isDragging && (isDropTarget ? styles.restoring : styles.dragging)}`,
      )}
      ref={ref}
      draggable
      onMouseEnter={() => setHoveredOrder(currentOrder)}
      onMouseLeave={() => {
        setHoveredOrder();
      }}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() =>
        setTableState((prevState) => ({
          ...prevState,
          draggingOrder: currentOrder,
        }))
      }
      onDragEnter={() =>
        setTableState((prevState) => ({
          ...prevState,
          dropOrder: currentOrder,
        }))
      }
      onDrop={handleDrop}
    >
      <div
        className={styles['title-content']}
        style={{
          width,
        }}
      >
        {children}
      </div>
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

  const childrenArray = Children.toArray(children);

  return (
    <tr className={styles.row}>
      {titles.map(({ order: { origin } }) => childrenArray[origin])}
    </tr>
  );
};

export interface TableCellProps {
  children?: ReactNode;
  onCopy?: (value: string) => void;
}

const TableCell = ({ children, onCopy }: TableCellProps) => {
  const {
    tableState: { titles, hoveredOrder, draggingOrder, dropOrder },
    fixedTitleCount,
    isLeftScrolled,
  } = useContext(TableContext);

  const ref = useRef<HTMLTableCellElement>(null);
  const currentOrder = ref.current?.cellIndex ?? -1;

  const { width } = titles[currentOrder ?? 0] ?? {};
  let left = 0;
  for (let i = 0; i < currentOrder; i += 1) {
    left += titles[i]?.width ?? 0;
  }

  const [isHovered, setIsHovered] = useState(false);

  const isDropTarget = dropOrder === currentOrder;
  const isDragging = draggingOrder === currentOrder;

  return (
    <td
      ref={ref}
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.cell} ${currentOrder < fixedTitleCount && styles.fixed} ${
          currentOrder === fixedTitleCount - 1 &&
          isLeftScrolled &&
          styles.shadow
        } ${hoveredOrder === currentOrder && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingOrder ?? 0) > dropOrder
              ? styles['drop-left']
              : styles['drop-right']))
        } ${isDragging && (isDropTarget ? styles.restoring : styles.dragging)}`,
      )}
    >
      <div
        style={{
          width,
        }}
        className={cleanClassName(`${styles['cell-content']}`)}
        onMouseEnter={({ currentTarget }) => {
          if (currentTarget.scrollWidth > currentTarget.clientWidth || onCopy) {
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {isHovered ? (
          <div className={styles['hovered-cell']}>
            {children}
            {onCopy ? (
              <div className={styles['copy-button-wrap']}>
                <Button
                  className={styles['copy-button']}
                  size="small"
                  shape="round"
                  theme="bluish-gray700/0"
                  icon={<Copy size={14} />}
                  onClick={() => {
                    const childrenString = nodeToString(children);
                    navigator.clipboard.writeText(childrenString);
                    onCopy?.(childrenString);
                  }}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
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
