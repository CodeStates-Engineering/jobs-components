export type Validation<TValue> = ((value: TValue) => string | undefined) | undefined;
export declare const useValidation: <TValue>(value: TValue, validation: Validation<TValue>, storeKey?: string) => {
    validationMessage?: undefined;
    checkValidation?: undefined;
} | {
    validationMessage: string | undefined;
    checkValidation: (value: TValue) => void;
};
