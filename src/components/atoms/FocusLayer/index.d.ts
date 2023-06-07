/// <reference types="react" />
export interface FocusLayerProps {
    children?: React.ReactNode;
    onBlur?: () => void;
    focused?: boolean;
    blur?: boolean;
    className?: string;
    bodyScroll?: boolean;
    priority?: 1 | 2 | 3;
}
export declare const FocusLayer: ({ children, onBlur, focused, blur, className, bodyScroll, priority, }: FocusLayerProps) => JSX.Element;
