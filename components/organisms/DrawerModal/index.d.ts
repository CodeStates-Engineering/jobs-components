/// <reference types="react" />
import type { FocusLayerProps } from '../../atoms';
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface DrawerModalProps extends CommonProps, Pick<FocusLayerProps, 'priority'> {
    opened?: boolean;
    onClose?: FocusLayerProps['onBlur'];
    direction?: 'left' | 'right';
}
export type DrawerModalHeaderProps = CommonProps;
export type DrawerModalBodyProps = CommonProps;
export type DrawerModalFooterProps = CommonProps;
export declare const DrawerModal: (({ children, className, opened, onClose, direction, priority, }: DrawerModalProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ children, className }: DrawerModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, className }: DrawerModalBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ children, className }: DrawerModalFooterProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
