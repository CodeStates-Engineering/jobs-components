import type { ReactNode } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
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
export declare const FloatingModal: (({ children, className, opened, onClose, priority, }: FloatingModalProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Body: ({ children, className }: CommonProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Tail: ({ children, className, border, }: FloatingModalTailProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
export {};
