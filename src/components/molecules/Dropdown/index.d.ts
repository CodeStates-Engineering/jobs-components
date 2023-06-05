/// <reference types="react" />
import type { FocusLayerProps } from '../../atoms';
export interface DropdownProps extends Pick<FocusLayerProps, 'blur' | 'priority'> {
    opened?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClose?: FocusLayerProps['onBlur'];
}
export declare const Dropdown: ({ opened, children, className, onClose, blur, priority, }: DropdownProps) => JSX.Element;
