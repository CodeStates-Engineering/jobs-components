/// <reference types="react" />
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface TooltipProps {
    children?: React.ReactNode;
    mouseEnterDelay?: number;
}
export type TooltipAreaProps = CommonProps;
export type TooltipContentProps = CommonProps;
export declare const Tooltip: (({ children, mouseEnterDelay }: TooltipProps) => import("react/jsx-runtime").JSX.Element) & {
    Area: ({ children, className }: TooltipAreaProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, className }: TooltipContentProps) => import("react/jsx-runtime").JSX.Element | null;
};
export {};
