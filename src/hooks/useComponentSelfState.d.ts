/// <reference types="react" />
export declare function useComponentSelfState<T>(initialState: T, onlyUpdatedByParent?: boolean, dependencies?: React.DependencyList): [T, React.Dispatch<React.SetStateAction<T>> | undefined];
