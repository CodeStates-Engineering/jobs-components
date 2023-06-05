/// <reference types="react" />
import type { ButtonProps } from '../../atoms';
import type { ModalProps } from '../Modal';
export interface ConfirmModalProps extends ModalProps {
    confirmButtonProps?: ButtonProps;
}
export declare const ConfirmModal: ({ children, className, confirmButtonProps, ...modalProps }: ConfirmModalProps) => JSX.Element;
