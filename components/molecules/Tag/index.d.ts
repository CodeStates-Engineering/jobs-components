import type { ReactNode, MouseEvent } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
export interface TagProps extends Pick<React.CSSProperties, 'width'> {
    color?: 'green50' | 'purple50' | 'purple600' | 'blue50' | 'peach50' | 'orange50' | 'bluish-gray50' | 'white';
    size?: '14' | '18' | '26';
    className?: string;
    children?: ReactNode;
    onClose?: (e?: MouseEvent<HTMLButtonElement>) => void;
    onClick?: () => void;
}
export declare const Tag: ({ color, size, width, className, children, onClose, onClick, }: TagProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element | null;
