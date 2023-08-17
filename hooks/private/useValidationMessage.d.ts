import type { ValidationResult } from '@contexts/ValidationContext';
export type ValidateHandler<TValue> = ((value: TValue) => ValidationResult | Promise<ValidationResult>) | undefined;
export type ValidationTrigger = 'onChange' | 'onBlur';
interface UseValidationMessageParams<TValue> {
    validationTrigger?: ValidationTrigger;
    key?: string;
    value: TValue;
    requireMessage?: string;
    validateHandler: ValidateHandler<TValue>;
}
export declare const useValidationMessage: <TValue>({ key, value, validateHandler, requireMessage, validationTrigger, }: UseValidationMessageParams<TValue>) => {
    validationMessage: string | undefined;
    validateOnChangeOption: ((value: TValue) => Promise<void>) | undefined;
    isRequried: boolean;
    validateOnChange: (value: TValue) => Promise<void>;
    validateOnBlur?: undefined;
} | {
    validationMessage: string | undefined;
    validateOnChangeOption: ((value: TValue) => Promise<void>) | undefined;
    isRequried: boolean;
    validateOnBlur: () => Promise<void>;
    validateOnChange?: undefined;
};
export {};
