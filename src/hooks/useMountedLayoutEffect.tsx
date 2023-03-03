import { Compatibility } from 'plugins';

import type React from 'react';
import { useRef } from 'react';

export function useMountedLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined,
) {
  const isMounted = useRef(false);
  Compatibility.useLayoutEffect(
    isMounted.current
      ? effect
      : () => {
          isMounted.current = true;
        },
    deps,
  );
}
