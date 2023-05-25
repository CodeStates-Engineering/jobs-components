/// <reference types="react" />
export interface FocusLayerProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    focused?: boolean;
    blur?: boolean;
    className?: string;
    bodyScroll?: boolean;
    priority?: 1 | 2 | 3;
}
export declare const FocusLayer: ({ children, onClick, focused, blur, className, bodyScroll, priority, }: FocusLayerProps) => JSX.Element;