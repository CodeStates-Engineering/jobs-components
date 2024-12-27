import type { ReactNode } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import type { FocusLayerProps } from '../../atoms';
import type { TabMenuProps } from '../../molecules';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
type FormType = 'section' | 'form';
export interface ModalProps extends CommonProps, Pick<FocusLayerProps, 'priority' | 'blur'>, Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    opened?: boolean;
    outsideClickClose?: boolean;
    onClose?: () => void;
    type?: FormType;
    bodyScroll?: boolean;
}
export interface ModalHeaderProps extends CommonProps {
    border?: boolean;
}
export declare const ModalHeader: ({ children, className, border, }: ModalHeaderProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export interface ModalTabMenuHeaderProps extends Omit<ModalHeaderProps, 'children'> {
    items?: TabMenuProps['items'];
}
export type ModalBodyProps = CommonProps;
export interface ModalFooterProps extends CommonProps {
    border?: boolean;
}
export declare const Modal: (({ children, className, opened, onClose, outsideClickClose, priority, blur, type, bodyScroll, onSubmit, }: ModalProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Header: ({ children, className, border, }: ModalHeaderProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    TabMenuHeader: ({ className, items, border, }: ModalTabMenuHeaderProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Body: ({ children, className }: ModalBodyProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Footer: ({ children, className, border, }: ModalFooterProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
export {};
