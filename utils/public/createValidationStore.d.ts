/// <reference types="react" />
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
