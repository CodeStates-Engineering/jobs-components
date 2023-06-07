import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import type { Typography } from '../../../hooks';
export type LabelProps = Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'children' | 'htmlFor' | 'className'> & Typography;
export interface LabelContainerProps {
    children?: React.ReactNode;
    className?: string;
    direction?: 'column' | 'row-start' | 'row-center';
}
export declare const Label: (({ children, htmlFor, className, fontSize, fontWeight, }: LabelProps) => JSX.Element) & {
    Container: ({ children, className, direction, }: LabelContainerProps) => JSX.Element;
};
