/// <reference types="react" />
import type { ButtonProps } from '../../atoms';
export interface DropdownTagProps extends Pick<ButtonProps, 'icon' | 'className'> {
    avtive?: boolean;
    children?: React.ReactNode;
    onClickX?: () => void;
    tagContent?: React.ReactNode;
}
export declare const DropdownTag: ({ avtive, children, onClickX, icon, tagContent, className, }: DropdownTagProps) => JSX.Element;
