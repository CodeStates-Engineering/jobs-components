import type { ToastProps } from '../../atoms';
export interface ToastOption extends Pick<ToastProps, 'type'> {
    message?: ToastProps['children'];
}
export interface ToastContainerProps extends Omit<ToastProps, 'maintained' | 'leftSpace' | 'children' | 'onToastDelete' | 'type'> {
    toastOption?: ToastOption;
}
export declare const ToastContainer: ({ toastOption, floatDirection, holdTime, }: ToastContainerProps) => import("react/jsx-runtime").JSX.Element;
