import React from 'react';
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface DrawerModalProps extends CommonProps {
    opened?: boolean;
    onClose?: () => void;
    direction?: 'left' | 'right';
}
export type DrawerModalHeaderProps = CommonProps;
export type DrawerModalBodyProps = CommonProps;
export type DrawerModalFooterProps = CommonProps;
export declare const DrawerModal: (({ children, className, opened, onClose, direction, }: DrawerModalProps) => JSX.Element) & {
    Header: ({ children, className }: DrawerModalHeaderProps) => JSX.Element;
    Body: ({ children, className }: DrawerModalBodyProps) => JSX.Element;
    Footer: ({ children, className }: DrawerModalFooterProps) => JSX.Element;
};
export {};
