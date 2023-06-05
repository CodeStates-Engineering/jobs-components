import type { ReactNode } from 'react';
import type { FocusLayerProps } from '../../atoms';
import type { TabMenuProps } from '../../molecules';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
export interface ModalProps extends CommonProps, Pick<FocusLayerProps, 'priority' | 'blur'> {
    opened?: boolean;
    onClose?: () => void;
}
export interface ModalHeaderProps extends CommonProps {
    border?: boolean;
}
export declare const ModalHeader: ({ children, className, border, }: ModalHeaderProps) => JSX.Element;
export interface ModalTabMenuHeaderProps extends Omit<ModalHeaderProps, 'children'> {
    items?: TabMenuProps['items'];
}
export type ModalBodyProps = CommonProps;
export interface ModalFooterProps extends CommonProps {
    border?: boolean;
}
export declare const Modal: (({ children, className, opened, onClose, priority, blur, }: ModalProps) => JSX.Element) & {
    Header: ({ children, className, border, }: ModalHeaderProps) => JSX.Element;
    TabMenuHeader: ({ className, items, border, }: ModalTabMenuHeaderProps) => JSX.Element;
    Body: ({ children, className }: ModalBodyProps) => JSX.Element;
    Footer: ({ children, className, border, }: ModalFooterProps) => JSX.Element;
};
export {};
