import { useState } from 'react';

import { useMountedLayoutEffect } from './useMountedLayoutEffect';

export function useComponentSelfState<InitialState>(
  initialState: InitialState,
  onlyUpdatedByParent?: boolean,
): [
  InitialState,
  React.Dispatch<React.SetStateAction<InitialState>> | undefined,
] {
  const [state, setState] = useState(initialState);

  useMountedLayoutEffect(() => {
    setState(initialState);
  }, [initialState, setState]);

  return [state, onlyUpdatedByParent ? undefined : setState];
}
