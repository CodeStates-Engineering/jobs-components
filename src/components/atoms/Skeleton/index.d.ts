import type { ReactNode } from 'react';
export interface SkeletonProps {
    className?: string;
    children?: ReactNode;
}
export declare const Skeleton: ({ className, children }: SkeletonProps) => JSX.Element;
