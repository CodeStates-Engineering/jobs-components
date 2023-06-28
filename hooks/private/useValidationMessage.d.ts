export type ValidateHandler<TValue> = ((value: TValue) => string | undefined) | undefined;
export type ValidationTrigger = 'onChange' | 'onBlur';
interface UseValidationMessageParams<TValue> {
    validationTrigger?: ValidationTrigger;
    key?: string;
    value: TValue;
    validateHandler: ValidateHandler<TValue>;
}
export declare const useValidationMessage: <TValue>({ key, value, validateHandler, validationTrigger, }: UseValidationMessageParams<TValue>) => {
    validationMessage: string | undefined;
    validateOnChange: (value: TValue) => void;
    validateOnBlur?: undefined;
} | {
    validationMessage: string | undefined;
    validateOnBlur: () => void;
    validateOnChange?: undefined;
};
export {};
