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
    variant?: {
        default: ButtonProps['variant'];
        selected: ButtonProps['variant'];
    };
    color?: {
        default: ButtonProps['color'];
        selected: ButtonProps['color'];
    };
    selectedLineWeight?: HrProps['weight'] | 'none';
    selectedLineColor?: HrProps['color'];
    className?: string;
}
export declare const TabMenu: ({ items, itemSize, itemShape, bottomLineWeight, selectedLineWeight, variant, color, selectedLineColor, fontWeight, fontSize, className, }: TabMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
