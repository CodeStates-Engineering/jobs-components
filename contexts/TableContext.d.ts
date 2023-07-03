/// <reference types="react" />
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
    saveId?: string;
}
export declare const TableContext: import("react").Context<TableContextValue>;
export {};
