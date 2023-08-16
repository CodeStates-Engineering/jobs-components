import type { ComponentType } from 'react';
export interface ColumnData {
    originalIndex: number;
    width?: number;
    maxWidth?: React.CSSProperties['maxWidth'];
}
type ColumnDataListState = [
    ColumnData[],
    React.Dispatch<React.SetStateAction<ColumnData[]>>
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
    isReady: boolean;
    storageKey?: string;
}
export type TableObserverProps = Partial<Pick<TableContextValue, 'fixedColumnCount' | 'storageKey'>>;
export declare const tableDataObserver: <T extends Partial<Pick<TableContextValue, "fixedColumnCount" | "storageKey">>>(TableComponent: ComponentType<T>) => (props: T) => import("react/jsx-runtime").JSX.Element;
export declare const useTableData: () => TableContextValue;
export {};
