import { createContext } from 'react';

export type ValidationResult = string | undefined;

export type ValidationContextValue = Map<
  string,
  () => ValidationResult | Promise<ValidationResult>
>;

/**
 * @deprecated Use `ValidationContextValue` instead.
 */
export type ValidationStoreData = ValidationContextValue;

export const ValidationContext = createContext<ValidationContextValue | null>(
  null,
);
