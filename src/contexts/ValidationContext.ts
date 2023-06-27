import { createContext } from 'react';

export type ValidationContextValue = Map<string, () => string | undefined>;

/**
 * @deprecated Use `ValidationContextValue` instead.
 */
export type ValidationStoreData = ValidationContextValue;

export const ValidationContext = createContext<ValidationContextValue | null>(
  null,
);
