/// <reference types="react" />
interface ValidateOptions {
    scrollToFirstInvalid?: boolean;
}
export declare const useValidate: () => {
    validate: ({ scrollToFirstInvalid }: ValidateOptions) => void;
    isValid?: boolean | undefined;
    invalidElementIds?: string[] | undefined;
};
export declare const validationObserver: <T extends object>(Component: (props: T) => JSX.Element | null) => (props: T) => JSX.Element;
export {};
