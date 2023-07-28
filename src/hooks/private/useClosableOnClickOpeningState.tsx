import { useEffect, useRef, useState } from 'react';

export const useClosableOnClickOpeningState = () => {
  const openingState = useState(false);
  const [opened, setOpened] = openingState;

  const closable = useRef(false);

  useEffect(() => {
    if (opened) {
      const handleClickedOutside = () => {
        if (closable.current) {
          setOpened(false);
        }
      };

      window.addEventListener('click', handleClickedOutside);
      return () => window.removeEventListener('click', handleClickedOutside);
    }
  }, [opened, setOpened]);

  return {
    openingState,
    setClosableOnClick: (value: boolean) => {
      closable.current = value;
    },
  };
};
