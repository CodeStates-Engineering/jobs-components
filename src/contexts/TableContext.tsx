import type { ComponentType } from 'react';
import { createContext, useState, useMemo, useContext } from 'react';

import { INITIAL } from '@constants';

export interface ColumnData {
  originalIndex: number;
  width?: number;
  maxWidth?: React.CSSProperties['maxWidth'];
}

type ColumnDataListState = [
  ColumnData[],
  React.Dispatch<React.SetStateAction<ColumnData[]>>,
];

type NumberState = [number, React.Dispatch<React.SetStateAction<number>>];

type BooleanState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

interface TableContextValue {
  columnDataListState: ColumnDataListState;
  draggingColumnIndexState: NumberState;
  hoveredColumnIndexState: NumberState;
  dropTargetColumnIndexState: NumberState;
  fixedColumnCount: number;
  isHorizontalScrolledState: BooleanState;

  storageKey?: string;
}

const TableContext = createContext<TableContextValue | undefined>(undefined);

export type TableObserverProps = Partial<
  Pick<TableContextValue, 'fixedColumnCount' | 'storageKey'>
>;

export const tableDataObserver =
  <T extends TableObserverProps>(TableComponent: ComponentType<T>) =>
  // eslint-disable-next-line react/function-component-definition
  (props: T) => {
    const { fixedColumnCount = 0, storageKey } = props;

    const columnDataListState = useState<ColumnData[]>([]);
    const draggingColumnIndexState = useState<number>(INITIAL.INDEX);
    const hoveredColumnIndexState = useState<number>(INITIAL.INDEX);
    const dropTargetColumnIndexState = useState<number>(INITIAL.INDEX);

    const isHorizontalScrolledState = useState(false);

    const tableContextValue = useMemo(
      () => ({
        columnDataListState,
        draggingColumnIndexState,
        hoveredColumnIndexState,
        dropTargetColumnIndexState,
        fixedColumnCount,
        isHorizontalScrolledState,
        storageKey,
      }),
      [
        columnDataListState,
        draggingColumnIndexState,
        dropTargetColumnIndexState,
        fixedColumnCount,
        hoveredColumnIndexState,
        isHorizontalScrolledState,
        storageKey,
      ],
    );

    return (
      <TableContext.Provider value={tableContextValue}>
        <TableComponent {...props} />
      </TableContext.Provider>
    );
  };

export const useTableData = () => {
  const tableContextValue = useContext(TableContext);
  if (!tableContextValue) {
    throw new Error('TableContext가 선언되지 않았습니다.');
  }

  return tableContextValue;
};
