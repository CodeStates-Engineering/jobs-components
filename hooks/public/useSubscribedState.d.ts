/// <reference types="react" />
export declare function useSubscribedState<T>(subscribedState: T | (() => T), dependencyList?: React.DependencyList): [T, import('../../../node_modules/.pnpm/react@19.0.0/node_modules/react').Dispatch<import('../../../node_modules/.pnpm/react@19.0.0/node_modules/react').SetStateAction<T>>];
