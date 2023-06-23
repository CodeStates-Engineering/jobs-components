import { useEffect, useRef, useState } from 'react';

export const useValidationMessageDynamicHeight = (
  isMessageVisible: boolean,
) => {
  const messageRef = useRef<HTMLParagraphElement>(null);
  const height = messageRef.current?.offsetHeight;

  const [wrapHeightStyle, setWrapHeightStyle] =
    useState<Pick<React.CSSProperties, 'height'>>();
  useEffect(() => {
    if (isMessageVisible) {
      setWrapHeightStyle({
        height,
      });
    } else {
      setWrapHeightStyle(undefined);
    }
  }, [height, isMessageVisible]);

  return {
    messageRef,
    wrapHeightStyle,
  };
};
