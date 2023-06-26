/// <reference types="react" />
export declare const ValidationContext: import("react").Context<import("@contexts/ValidationContext").ValidationContextValue | null>;
/**
 * @deprecated Use `validationObserver` instead.
 */
export declare const createValidationStore: () => {
    data: import("@contexts/ValidationContext").ValidationContextValue;
    provideValidationStore: (children: React.ReactNode) => JSX.Element;
    validateAll: () => {
        isValid: boolean;
        invalidKeys: string[];
        scrollToFirstInvalid: (() => void) | undefined;
    };
};
export type ValidationStore = ReturnType<typeof createValidationStore>;
