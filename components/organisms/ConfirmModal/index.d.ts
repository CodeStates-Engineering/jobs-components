import type { ButtonProps } from '../../atoms';
import type { ModalProps } from '../Modal';
export interface ConfirmModalProps extends ModalProps {
    confirmButtonProps?: ButtonProps;
}
export declare const ConfirmModal: ({ children, className, confirmButtonProps, ...modalProps }: ConfirmModalProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
