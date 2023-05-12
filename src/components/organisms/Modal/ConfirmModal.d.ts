/// <reference types="react" />
import type { ModalProps } from '.';
import type { ButtonProps } from '../../atoms';
export interface ConfirmModalProps extends ModalProps {
    confirmButtonProps?: ButtonProps;
}
export declare const ConfirmModal: ({ children, className, confirmButtonProps, ...modalProps }: ConfirmModalProps) => JSX.Element;
