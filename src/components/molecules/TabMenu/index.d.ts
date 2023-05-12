/// <reference types="react" />
import type { ButtonProps, HrProps } from '../../atoms';
interface Item {
    label: string;
    path?: string;
    to?: string;
}
interface TabMenuItem extends Item {
    onClick?: (item: Item) => void;
    disabled?: boolean;
}
export interface TabMenuProps {
    items?: TabMenuItem[];
    itemSize?: ButtonProps['size'];
    itemShape?: ButtonProps['shape'];
    bottomLineWeight?: HrProps['weight'] | 'none';
    fontWeight?: ButtonProps['fontWeight'];
    fontSize?: ButtonProps['fontSize'];
    theme?: {
        default: ButtonProps['theme'];
        selected: ButtonProps['theme'];
    };
    selectedLineWeight?: HrProps['weight'] | 'none';
    selectedLineColor?: HrProps['color'];
    className?: string;
}
export declare const TabMenu: ({ items, itemSize, itemShape, bottomLineWeight, selectedLineWeight, theme, selectedLineColor, fontWeight, fontSize, className, }: TabMenuProps) => JSX.Element;
export {};
