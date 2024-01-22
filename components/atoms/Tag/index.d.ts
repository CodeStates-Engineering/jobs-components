/// <reference types="react" />
import type { Variant } from '@type/variant';
export interface TagProps {
    children?: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    variant: Variant;
    color?: 'purple-500';
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}
export declare const Tag: ({ variant, color, size, className, ...tagProps }: TagProps) => import("react/jsx-runtime").JSX.Element;
