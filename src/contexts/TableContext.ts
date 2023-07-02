import { createContext } from 'react';

interface TitleData {
  order: {
    origin: number;
    current: number;
  };
  width?: number;
}

export interface TableState {
  titles: TitleData[];
  draggingOrder?: number;
  dropOrder?: number;
  hoveredOrder?: number;
}

export interface TableContextValue {
  tableState: TableState;
  setTableState: React.Dispatch<React.SetStateAction<TableState>>;
  fixedTitleCount: number;
  isLeftScrolled: boolean;
  isLoading: boolean;
}

export const TableContext = createContext<TableContextValue>({
  tableState: {
    titles: [],
  },
  setTableState: () => undefined,
  fixedTitleCount: 0,
  isLeftScrolled: false,
  isLoading: false,
});
