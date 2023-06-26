/// <reference types="react" />
export type InputType = 'text' | 'number' | 'large-number' | 'phone-number' | 'business-number' | 'password' | 'button';
interface UseFormatedValueParams<T> {
    value: T;
    placeholder: string;
    type: InputType;
}
export declare const useFormatedValue: <T>({ type, value, placeholder, }: UseFormatedValueParams<T>) => {
    formatedValue: string;
    setIsDisplayFormatedValue: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export {};
