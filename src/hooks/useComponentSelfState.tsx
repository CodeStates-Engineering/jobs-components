import { useState as createState } from 'react';

import { useMountedLayoutEffect as createMountedLayoutEffect } from './useMountedLayoutEffect';

export function useComponentSelfState<T>(
  initialState: T,
  onlyUpdatedByParent?: boolean,
  dependencies?: React.DependencyList,
): [T, React.Dispatch<React.SetStateAction<T>> | undefined] {
  if (onlyUpdatedByParent) {
    return [initialState, undefined];
  }

  const state = createState(initialState);
  createMountedLayoutEffect(
    () => state[1](initialState),
    dependencies || [initialState],
  );

  return state;
}
