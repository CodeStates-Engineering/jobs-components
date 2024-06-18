import type { ReactNode, MouseEvent } from 'react';
import { useMemo, useState } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms/Button';

export interface TagProps extends Pick<React.CSSProperties, 'width'> {
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
  onClick?: () => void;
}

export const Tag = ({
  color = 'green50',
  size = '18',
  width,
  className,
  children,
  onClose = undefined,
  onClick,
}: TagProps) => {
  const [display, setDisplay] = useState(true);
  const style = useMemo(() => ({ width }), [width]);

  return display ? (
    <div
      className={cleanClassName(
        `${styles['tag-container']} ${styles[color.replaceAll('/', '_')]} ${
          onClick && styles.clickable
        } ${className}`,
      )}
      style={style}
      onClick={() => onClick?.()}
    >
      <span
        className={cleanClassName(
          `${styles['tag-content']} ${styles[`size-${size}`]} ${
            onClose && styles.close
          }`,
        )}
      >
        {children}
      </span>
      {onClose && (
        <Button
          size="small3x"
          className={`${styles['close-button']} ${styles[`close-${size}`]}`}
          variant="ghost"
          color="bluishGray700"
          shape="pill"
          onClick={(e) => {
            onClose?.(e);
            setDisplay(false);
          }}
          icon={<X size="13px" className={styles['close-icon']} />}
        />
      )}
    </div>
  ) : null;
};
