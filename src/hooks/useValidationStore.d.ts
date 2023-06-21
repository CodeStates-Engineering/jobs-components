/// <reference types="react" />
export declare const useValidationStore: () => {
    data: Map<string, () => string | undefined>;
    provideValidationStore: (children: import("react").ReactNode) => JSX.Element;
    validateAll: () => {
        isValid: boolean;
        invalidKeys: string[];
        scrollToFirstInvalid: (() => void) | undefined;
    };
};
