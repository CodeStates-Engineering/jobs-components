import type { ReactNode, MouseEvent } from 'react';
import { useState } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { Button } from '../../atoms/Button';

interface TagProps {
  color?:
    | 'green50'
    | 'purple50'
    | 'blue50'
    | 'peach50'
    | 'orange50'
    | 'bluish-gray50';
  size?: '14' | '18' | '26';
  className?: string;
  children?: ReactNode;
  onClose?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = ({
  color = 'green50',
  size = '18',
  className,
  children,
  onClose,
}: TagProps) => {
  const [display, setDisplay] = useState(true);

  return display ? (
    <div
      className={`${styles['tag-container']} ${styles[`size-${size}`]} ${
        styles[color.replaceAll('/', '_')]
      } ${className}`}
    >
      {children}
      {onClose ? (
        <Button
          size="small3x"
          className={`${styles['close-button']} ${styles[`close-${size}`]}`}
          theme="bluish-gray700/0"
          shape="round"
          onClick={(e) => {
            onClose?.(e);
            setDisplay(false);
          }}
          icon={<X size="13px" className={styles['close-icon']} />}
        />
      ) : null}
    </div>
  ) : null;
};
