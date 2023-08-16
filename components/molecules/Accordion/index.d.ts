/// <reference types="react" />
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface AccordionProps extends CommonProps {
    opened?: boolean;
}
export type AccordionTitleProps = CommonProps;
export type AccordionContentsProps = CommonProps;
export declare const Accordion: (({ children, className, opened, }: AccordionProps) => import("react/jsx-runtime").JSX.Element) & {
    Title: ({ children, className }: AccordionTitleProps) => import("react/jsx-runtime").JSX.Element;
    Contents: ({ children, className }: AccordionContentsProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
