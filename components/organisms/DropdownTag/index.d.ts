/// <reference types="react" />
import type { ButtonProps } from '../../atoms';
export interface DropdownTagProps extends Pick<ButtonProps, 'icon' | 'className'> {
    avtive?: boolean;
    children?: React.ReactNode;
    onClickX?: () => void;
    tagContent?: React.ReactNode;
}
export declare const DropdownTag: ({ avtive, children, onClickX, icon, tagContent, className, }: DropdownTagProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
