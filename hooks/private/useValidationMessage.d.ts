import type { ValidationResult } from '@contexts/ValidationContext';
export type ValidateHandler<TValue> = ((value: TValue) => ValidationResult | Promise<ValidationResult>) | undefined;
export type ValidationTrigger = 'onChange' | 'onBlur';
interface UseValidationMessageParams<TValue> {
    validationTrigger?: ValidationTrigger;
    key?: string;
    value: TValue;
    validateHandler: ValidateHandler<TValue>;
}
export declare const useValidationMessage: <TValue>({ key, value, validateHandler, validationTrigger, }: UseValidationMessageParams<TValue>) => {
    validationMessage: string | undefined;
    validateOnChange: (value: TValue) => Promise<void>;
    validateOnBlur?: undefined;
} | {
    validationMessage: string | undefined;
    validateOnBlur: () => Promise<void>;
    validateOnChange?: undefined;
};
export {};
