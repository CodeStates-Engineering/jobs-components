import { useRef } from 'react';
import { X } from 'react-feather';

import type { ButtonProps } from '@components/atoms';
import { Button } from '@components/atoms';
import { Dropdown } from '@components/molecules';
import { useClosableOnClickOpeningState } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface DropdownTagProps
  extends Pick<ButtonProps, 'icon' | 'className'> {
  avtive?: boolean;
  children?: React.ReactNode;
  onClickX?: () => void;
  tagContent?: React.ReactNode;
}

export const DropdownTag = ({
  avtive,
  children,
  onClickX,
  icon,
  tagContent,
  className,
}: DropdownTagProps) => {
  const {
    openingState: [opened, setOpened],
    setClosableOnClick,
  } = useClosableOnClickOpeningState();

  const isForClose = useRef(false);

  return (
    <div
      className={styles['dropdown-tag-container']}
      onMouseEnter={() => {
        setClosableOnClick(false);
      }}
      onMouseLeave={() => {
        setClosableOnClick(true);
      }}
    >
      <Button
        className={styles.padding}
        size="small2x"
        theme={
          avtive
            ? 'purple550/purple50/purple100'
            : 'bluish-gray700/0/bluish-gray200'
        }
        iconDirection="left"
        fontSize="small3x"
        fontWeight={500}
        padding={false}
        shape="4"
        icon={icon}
        onClick={() => {
          if (!isForClose.current) {
            setOpened((prev) => !prev);
          }
        }}
      >
        <div className={styles['children-container']}>
          {tagContent}
          <X
            onClick={onClickX}
            onMouseEnter={() => {
              isForClose.current = true;
            }}
            onMouseLeave={() => {
              isForClose.current = false;
            }}
            className={cleanClassName(
              `${styles['check-icon']} ${avtive || styles.hidden}`,
            )}
          />
        </div>
      </Button>
      <Dropdown
        opened={opened}
        className={cleanClassName(`${styles.dropdown} ${className}`)}
      >
        {children}
      </Dropdown>
    </div>
  );
};
