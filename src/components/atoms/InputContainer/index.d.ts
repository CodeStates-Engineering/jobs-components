/// <reference types="react" />
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
}
export interface InputContainerProps extends CommonProps {
    validationMessage?: string | null;
    validationSpace?: boolean;
}
export interface InputContainerInteractionProps extends CommonProps {
    onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
    size?: 'none' | 'small' | 'medium' | 'large';
}
export declare const InputContainer: (({ children, className, validationMessage, validationSpace, }: InputContainerProps) => JSX.Element) & {
    Interaction: ({ children, onClick, size, className, }: InputContainerInteractionProps) => JSX.Element;
};
export {};
