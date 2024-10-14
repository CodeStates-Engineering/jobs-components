import type { ReactNode, MouseEvent } from 'react';
export interface TagProps extends Pick<React.CSSProperties, 'width'> {
    color?: 'green50' | 'purple50' | 'purple600' | 'blue50' | 'peach50' | 'orange50' | 'bluish-gray50';
    size?: '14' | '18' | '26';
    className?: string;
    children?: ReactNode;
    onClose?: (e?: MouseEvent<HTMLButtonElement>) => void;
    onClick?: () => void;
}
export declare const Tag: ({ color, size, width, className, children, onClose, onClick, }: TagProps) => import("react/jsx-runtime").JSX.Element | null;
