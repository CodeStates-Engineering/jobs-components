import React, { useLayoutEffect, useRef } from 'react';

export function useMountedLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined,
) {
  const isMounted = useRef(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(
    isMounted.current
      ? effect
      : () => {
          isMounted.current = true;
        },
    deps,
  );
}
