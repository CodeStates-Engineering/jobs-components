import type { ReactNode, MouseEventHandler } from 'react';
import { useState } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';

interface TagProps {
  color?:
    | 'green50'
    | 'purple50'
    | 'blue50'
    | 'peach50'
    | 'orange50'
    | 'bluish-gray50';
  size?: '14' | '18' | '26';
  closable?: boolean;
  className?: string;
  children: ReactNode;
  onClose?: MouseEventHandler<SVGElement>;
}

export const Tag = ({
  color = 'green50',
  size = '18',
  closable = false,
  className,
  children,
  onClose,
}: TagProps) => {
  const [display, setDisplay] = useState(true);
  const handleClose: MouseEventHandler<SVGElement> = (e) => {
    onClose?.(e);
    setDisplay(false);
  };

  return display ? (
    <div
      className={`${styles['tag-container']} ${styles[`size-${size}`]} ${
        styles[color.replaceAll('/', '_')]
      } ${className}`}
    >
      {children}
      {closable && (
        <X
          viewBox="8 8 8 8"
          className={`${styles.close} ${styles[`close-${size}`]}`}
          onClick={handleClose}
        />
      )}
    </div>
  ) : null;
};
