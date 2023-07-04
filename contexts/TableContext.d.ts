import type { ComponentType } from 'react';
export interface ColunmData {
    originalIndex: number;
    width?: number;
    maxWidth?: React.CSSProperties['maxWidth'];
}
type ColunmDataListState = [
    ColunmData[],
    React.Dispatch<React.SetStateAction<ColunmData[]>>
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
export type TableObserverProps = Partial<Pick<TableContextValue, 'fixedColunmCount' | 'storageKey'>>;
export declare const tableDataObserver: <T extends Partial<Pick<TableContextValue, "fixedColunmCount" | "storageKey">>>(TableComponent: ComponentType<T>) => (props: T) => JSX.Element;
export declare const useTableData: () => TableContextValue;
export {};
