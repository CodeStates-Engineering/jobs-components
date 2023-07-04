import type { ComponentType } from 'react';
import { createContext, useState, useMemo, useContext } from 'react';

import { INITIAL } from '@constants';

export interface ColunmData {
  originalIndex: number;
  width?: number;
  maxWidth?: React.CSSProperties['maxWidth'];
}

type ColunmDataListState = [
  ColunmData[],
  React.Dispatch<React.SetStateAction<ColunmData[]>>,
];

type NumberState = [number, React.Dispatch<React.SetStateAction<number>>];

type BooleanState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

interface TableContextValue {
  colunmDataListState: ColunmDataListState;
  draggingColunmIndexState: NumberState;
  hoveredColunmIndexState: NumberState;
  dropTargetColunmIndexState: NumberState;
  fixedColunmCount: number;
  isHorizontalScrolledState: BooleanState;
  isLoading: boolean;
  storageKey?: string;
}

const TableContext = createContext<TableContextValue | undefined>(undefined);

export type TableObserverProps = Partial<
  Pick<TableContextValue, 'fixedColunmCount' | 'storageKey'>
>;

export const tableDataObserver =
  <T extends TableObserverProps>(TableComponent: ComponentType<T>) =>
  // eslint-disable-next-line react/function-component-definition
  (props: T) => {
    const { fixedColunmCount = 0, storageKey } = props;

    const colunmDataListState = useState<ColunmData[]>([]);
    const draggingColunmIndexState = useState<number>(INITIAL.INDEX);
    const hoveredColunmIndexState = useState<number>(INITIAL.INDEX);
    const dropTargetColunmIndexState = useState<number>(INITIAL.INDEX);

    const isHorizontalScrolledState = useState(false);

    const tableContextValue = useMemo(() => {
      const [colunmDataList] = colunmDataListState;

      const isLoading = colunmDataList.some(({ width }) => !width);

      return {
        colunmDataListState,
        draggingColunmIndexState,
        hoveredColunmIndexState,
        dropTargetColunmIndexState,
        fixedColunmCount,
        isHorizontalScrolledState,
        isLoading,
        storageKey,
      };
    }, [
      colunmDataListState,
      draggingColunmIndexState,
      dropTargetColunmIndexState,
      fixedColunmCount,
      hoveredColunmIndexState,
      isHorizontalScrolledState,
      storageKey,
    ]);

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
