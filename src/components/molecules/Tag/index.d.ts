import type { ReactNode, MouseEvent } from 'react';
interface TagProps {
    color?: 'green50' | 'purple50' | 'blue50' | 'peach50' | 'orange50' | 'bluish-gray50';
    size?: '14' | '18' | '26';
    className?: string;
    children?: ReactNode;
    onClose?: (e?: MouseEvent<HTMLButtonElement>) => void;
    onClick?: () => void;
}
export declare const Tag: ({ color, size, className, children, onClose, onClick, }: TagProps) => JSX.Element | null;
export {};
