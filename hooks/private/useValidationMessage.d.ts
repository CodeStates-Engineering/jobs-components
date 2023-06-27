export type ValidateHandler<TValue> = ((value: TValue) => string | undefined) | undefined;
interface UseValidationMessageParams<TValue> {
    key?: string;
    value: TValue;
    validateHandler: ValidateHandler<TValue>;
}
export declare const useValidationMessage: <TValue>({ key, value, validateHandler, }: UseValidationMessageParams<TValue>) => {
    validationMessage: string | undefined;
    validateValue: (value: TValue) => void;
};
export {};
