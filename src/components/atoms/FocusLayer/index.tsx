import { cleanClassName } from 'utils';

import { useLayoutEffect } from 'react';

import styles from './index.module.scss';

export interface FocusLayerProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  focused?: boolean;
  blur?: boolean;
}

export const FocusLayer = ({
  children,
  onClick,
  focused,
  blur = true,
}: FocusLayerProps) => {
  useLayoutEffect(() => {
    const { classList } = document.body;
    if (focused) {
      classList.add(styles['fixed-body']);
    }
    return () => classList.remove(styles['fixed-body']);
  }, [focused]);

  return (
    <>
      {focused ? (
        <div
          onClick={onClick}
          className={cleanClassName(
            `${styles['focus-layer']} ${blur && styles.blur}`,
          )}
        />
      ) : null}
      <div className={styles['over-layer']}>{children}</div>
    </>
  );
};
