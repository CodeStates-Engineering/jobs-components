/// <reference types="react" />
export interface FocusLayerProps {
    children?: React.ReactNode;
    onBlur?: () => void;
    focused?: boolean;
    blur?: boolean;
    className?: string;
    bodyScroll?: boolean;
    priority?: number;
}
export declare const FocusLayer: ({ children, onBlur, focused, blur, className, bodyScroll, priority, }: FocusLayerProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element | null;
