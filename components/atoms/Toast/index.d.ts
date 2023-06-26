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
export declare const Toast: ({ type, children, isSpaceHolding, floatDirection, holdTime, className, }: ToastProps) => JSX.Element;
