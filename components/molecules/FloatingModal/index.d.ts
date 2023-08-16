import type { ReactNode } from 'react';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
interface FloatingModalProps extends CommonProps, Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    opened?: boolean;
    onClose?: () => void;
}
interface FloatingModalTailProps {
    children: ReactNode;
    className?: string;
    border?: boolean;
}
export declare const FloatingModal: (({ children, className, opened, onClose, }: FloatingModalProps) => import("react/jsx-runtime").JSX.Element) & {
    Body: ({ children, className }: CommonProps) => import("react/jsx-runtime").JSX.Element;
    Tail: ({ children, className, border, }: FloatingModalTailProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
