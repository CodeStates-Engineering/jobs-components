/// <reference types="react" />
/**
 * @deprecated validationObserver를 사용해주세요.
 */
export declare const useValidationStore: () => {
    data: import("../../contexts/ValidationContext").ValidationContextValue;
    provideValidationStore: (children: import("react").ReactNode) => JSX.Element;
    validateAll: () => Promise<{
        isValid: boolean;
        invalidKeys: string[];
        scrollToFirstInvalid: (() => void) | undefined;
    }>;
};
