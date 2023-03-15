import { useEffect, useState } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface TooltipProps {
  float?: 'top' | 'bottom';
  children?: React.ReactNode;
  message?: string;
}

export const Tooltip = ({
  float = 'bottom',
  children,
  message,
}: TooltipProps) => {
  const [displayed, setDisplayed] = useState<'closing' | boolean>(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (displayed === 'closing') {
      const closeTimer = setTimeout(() => setDisplayed(false), 300);
      return () => clearTimeout(closeTimer);
    }
  }, [displayed]);

  useEffect(() => {
    if (hovered) {
      setDisplayed(true);
    } else {
      const hoverOutTimer = setTimeout(() => setDisplayed('closing'), 100);
      return () => clearTimeout(hoverOutTimer);
    }
  }, [hovered]);

  return (
    <div
      className={cleanClassName(
        `${styles['tooltip-container']} ${styles[`float-${float}`]}`,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles['tooltip-opener']}>{children}</div>
      {displayed && (
        <div
          className={`${styles['tooltip-message-float-base']} ${
            displayed === 'closing' && styles.closing
          }`}
        >
          <div className={styles.triangle} />
          <div
            onMouseEnter={() => {
              if (displayed === 'closing') {
                setHovered(false);
              }
            }}
            className={styles['tooltip-message-container']}
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};
