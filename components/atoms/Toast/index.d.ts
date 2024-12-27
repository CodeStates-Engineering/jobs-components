/// <reference types="react" />
export interface ToastProps {
    type?: 'success' | 'fail';
    children?: React.ReactNode;
    isSpaceHolding?: boolean;
    floatDirection?: 'from-top' | 'from-bottom';
    holdTime?: number;
    className?: string;
}
export declare const CLOSE_TOAST_ANIMATION_DURATION = 500;
export declare const Toast: ({ type, children, isSpaceHolding, floatDirection, holdTime, className, }: ToastProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
