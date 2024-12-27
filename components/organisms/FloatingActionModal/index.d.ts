import type { ReactNode } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import type { FocusLayerProps } from '../../atoms';
interface CommonProps {
    children?: ReactNode;
    className?: string;
}
export interface FloatingActionModalProps extends CommonProps, Pick<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'>, Pick<FocusLayerProps, 'priority'> {
    count?: number;
    opened?: boolean;
    onClose?: () => void;
}
export declare const FloatingActionModal: ({ count, opened, onClose, children, className, priority, }: FloatingActionModalProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
