/// <reference types="react" />
import type { FocusLayerProps } from '../../atoms';
export interface DropdownProps {
    opened?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClose?: FocusLayerProps['onBlur'];
}
export declare const Dropdown: ({ opened, children, className, onClose, }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
