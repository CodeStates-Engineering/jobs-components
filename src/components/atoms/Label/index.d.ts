import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
export type LabelProps = Partial<Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'children' | 'htmlFor' | 'className'>>;
export declare const Label: ({ children, htmlFor, className }: LabelProps) => JSX.Element;
