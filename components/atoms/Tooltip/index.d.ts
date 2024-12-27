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
export declare const Tooltip: (({ children, mouseEnterDelay }: TooltipProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Area: ({ children, className }: TooltipAreaProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Content: ({ children, className }: TooltipContentProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element | null;
};
export {};
