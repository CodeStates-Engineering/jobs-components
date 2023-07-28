import { useRef, useState } from 'react';
import { Trash2, X } from 'react-feather';

import { Button, Options } from '@components/atoms';
import { DUMMY } from '@constants';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface DropdownTagProps {
  avtive?: boolean;
  children?: React.ReactNode;
  onClickX?: () => void;
}

export const DropdownTag = ({
  avtive = false,
  children,
  onClickX,
}: DropdownTagProps) => {
  const [opened, setOpened] = useState(true);
  const isForClose = useRef(false);
  const isOverOption = useRef(false);

  return (
    <div
      className={styles['dropdown-tag-container']}
      onMouseEnter={() => {
        isOverOption.current = true;
      }}
      onMouseLeave={() => {
        isOverOption.current = false;
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
        icon={<Trash2 size={10} />}
        onClick={() => {
          if (!isForClose.current) {
            setOpened((prev) => !prev);
          }
        }}
      >
        <div className={styles['children-container']}>
          {children}
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
      <Options
        opened={opened}
        options={DUMMY.OPTIONS}
        className={styles.options}
      />
    </div>
  );
};
