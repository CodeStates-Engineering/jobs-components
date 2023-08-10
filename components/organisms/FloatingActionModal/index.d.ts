import type { ReactNode } from 'react';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
interface FloatingActionModalProps extends CommonProps, Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'> {
    count?: number;
    opened?: boolean;
    onClose?: () => void;
}
export declare const FloatingActionModal: ({ count, opened, onClose, children, className, }: FloatingActionModalProps) => JSX.Element;
export {};
