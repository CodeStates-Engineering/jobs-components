/// <reference types="react" />
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface AccordionProps extends CommonProps {
    opened?: boolean;
    onlyUpdatedByParent?: boolean;
}
export type AccordionTitleProps = CommonProps;
export type AccordionContentsProps = CommonProps;
export declare const Accordion: (({ children, className, opened, onlyUpdatedByParent, }: AccordionProps) => JSX.Element) & {
    Title: ({ children, className }: AccordionTitleProps) => JSX.Element;
    Contents: ({ children, className }: AccordionContentsProps) => JSX.Element;
};
export {};
