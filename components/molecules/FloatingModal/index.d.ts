import type { ReactNode } from 'react';
import type { FocusLayerProps } from '../../atoms';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
export interface FloatingModalProps extends CommonProps, Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'>, Pick<FocusLayerProps, 'priority'> {
    opened?: boolean;
    onClose?: () => void;
}
interface FloatingModalTailProps {
    children: ReactNode;
    className?: string;
    border?: boolean;
}
export declare const FloatingModal: (({ children, className, opened, onClose, priority, }: FloatingModalProps) => import("react/jsx-runtime").JSX.Element) & {
    Body: ({ children, className }: CommonProps) => import("react/jsx-runtime").JSX.Element;
    Tail: ({ children, className, border, }: FloatingModalTailProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
