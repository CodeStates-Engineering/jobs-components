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
export declare const Accordion: (({ children, className, opened, }: AccordionProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element) & {
    Title: ({ children, className }: AccordionTitleProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
    Contents: ({ children, className }: AccordionContentsProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
};
export {};
