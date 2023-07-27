/// <reference types="react" />
export type ValidationResult = string | undefined;
export type ValidationContextValue = Map<string, () => ValidationResult | Promise<ValidationResult>>;
/**
 * @deprecated Use `ValidationContextValue` instead.
 */
export type ValidationStoreData = ValidationContextValue;
export declare const ValidationContext: import("react").Context<ValidationContextValue | null>;
