/// <reference types="react" />
export interface NotFoundProps {
    description: string;
    buttonTitle?: string;
    onConfirm?: () => void;
}
export declare const NotFound: ({ description, buttonTitle, onConfirm, }: NotFoundProps) => JSX.Element;
