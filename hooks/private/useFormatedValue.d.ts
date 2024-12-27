/// <reference types="react" />
export type InputType = 'text' | 'number' | 'large-number' | 'phone-number' | 'business-number' | 'password' | 'button';
interface UseFormatedValueParams<T> {
    value: T;
    placeholder: string;
    type: InputType;
}
export declare const useFormatedValue: <T>({ type, value, placeholder, }: UseFormatedValueParams<T>) => {
    formatedValue: string;
    setIsDisplayFormatedValue: import('../../../node_modules/.pnpm/react@19.0.0/node_modules/react').Dispatch<import('../../../node_modules/.pnpm/react@19.0.0/node_modules/react').SetStateAction<boolean>>;
};
export {};
