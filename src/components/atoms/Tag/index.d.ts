import type { ReactNode, MouseEventHandler } from 'react';
interface TagProps {
    color?: 'green50' | 'purple50' | 'blue50' | 'peach50' | 'orange50' | 'bluish-gray50';
    size?: '14' | '18' | '26';
    closable?: boolean;
    className?: string;
    children: ReactNode;
    onClose?: MouseEventHandler<SVGElement>;
}
export declare const Tag: ({ color, size, closable, className, children, onClose, }: TagProps) => JSX.Element | null;
export {};
