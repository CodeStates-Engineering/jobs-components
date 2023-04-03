import { useState } from 'react';

import { Compatibility } from '../plugins';

export const useClosingState = (opened = false, closingDuration = 300) => {
  const state = useState<boolean | 'closing'>(opened);
  const [status, setStatus] = state;

  Compatibility.useLayoutEffect(
    () =>
      setStatus(
        opened ? true : (beforeStatus) => (beforeStatus ? 'closing' : false),
      ),
    [opened],
  );

  const isClosing = status === 'closing';
  Compatibility.useLayoutEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setStatus(false);
      }, closingDuration);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  return state;
};
