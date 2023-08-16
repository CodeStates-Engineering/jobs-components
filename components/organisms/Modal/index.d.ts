import type { ReactNode } from 'react';
import type { FocusLayerProps } from '../../atoms';
import type { TabMenuProps } from '../../molecules';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
type FormType = 'section' | 'form';
export interface ModalProps extends CommonProps, Pick<FocusLayerProps, 'priority' | 'blur'>, Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    opened?: boolean;
    onClose?: () => void;
    type?: FormType;
}
export interface ModalHeaderProps extends CommonProps {
    border?: boolean;
}
export declare const ModalHeader: ({ children, className, border, }: ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
export interface ModalTabMenuHeaderProps extends Omit<ModalHeaderProps, 'children'> {
    items?: TabMenuProps['items'];
}
export type ModalBodyProps = CommonProps;
export interface ModalFooterProps extends CommonProps {
    border?: boolean;
}
export declare const Modal: (({ children, className, opened, onClose, priority, blur, type, onSubmit, }: ModalProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ children, className, border, }: ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
    TabMenuHeader: ({ className, items, border, }: ModalTabMenuHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className }: ModalBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, className, border, }: ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
