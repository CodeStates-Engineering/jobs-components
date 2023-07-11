/// <reference types="react" />
import type { ValidationContextValue } from '@contexts/ValidationContext';
interface ValidateOptions {
    scrollToFirstInvalid?: boolean;
}
export declare const useValidate: () => {
    validationMap: ValidationContextValue | null;
    validate: ({ scrollToFirstInvalid }: ValidateOptions) => void;
    isValid?: boolean | undefined;
    invalidElementIds?: string[] | undefined;
};
export declare const validationObserver: <T extends object>(Component: (props: T) => JSX.Element | null) => (props: T) => JSX.Element;
export {};
