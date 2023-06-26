/// <reference types="react" />
export type ValidationContextValue = Map<string, () => string | undefined>;
/**
 * @deprecated Use `ValidationContextValue` instead.
 */
export type ValidationStoreData = ValidationContextValue;
export declare const ValidationContext: import("react").Context<ValidationContextValue | null>;
