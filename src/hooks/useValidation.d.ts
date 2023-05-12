export type Validation<_Value> = ((value: _Value) => string | undefined) | undefined;
export declare const useValidation: <_Value>(value: _Value, validation: Validation<_Value>, storeKey?: string) => {
    validationMessage?: undefined;
    checkValidation?: undefined;
} | {
    validationMessage: string | undefined;
    checkValidation: (value: _Value) => void;
};
