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
export declare const DrawerModal: (({ children, className, opened, onClose, direction, priority, }: DrawerModalProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Header: ({ children, className }: DrawerModalHeaderProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Body: ({ children, className }: DrawerModalBodyProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Footer: ({ children, className }: DrawerModalFooterProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
export {};
