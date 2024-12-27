/// <reference types="react" />
import type { ValidationContextValue } from '../../contexts/ValidationContext';
interface ValidateOptions {
    scrollToFirstInvalid?: boolean;
}
export declare const useValidate: () => {
    validationContext: ValidationContextValue | null;
    validate: (options?: ValidateOptions) => {
        isValid: boolean;
        invalidElementIds: string[];
    };
    validateAsync: (options?: ValidateOptions) => Promise<{
        isValid: boolean;
        invalidElementIds: string[];
    }>;
};
export declare const validationObserver: <T extends object>(Component: (props: T) => JSX.Element | null) => (props: T) => import('../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
