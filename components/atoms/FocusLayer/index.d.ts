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
export declare const FocusLayer: ({ children, onBlur, focused, blur, className, bodyScroll, priority, }: FocusLayerProps) => import("react/jsx-runtime").JSX.Element | null;
