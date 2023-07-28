import { useEffect, useRef, useState } from 'react';

import { Button, Options } from '@components/atoms';
import type { ButtonProps } from '@components/atoms';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface OptionsTagProps
  extends Pick<ButtonProps, 'icon' | 'className'> {
  value?: string;
  onChange?: (value: string) => void;
  options?: {
    label: string;
    value: string;
    default?: boolean;
  }[];
}

export const OptionsTag = ({
  icon,
  value,
  onChange,
  options,
  className,
}: OptionsTagProps) => {
  const [opened, setOpened] = useState(true);
  const isForClose = useRef(false);
  const isOverOption = useRef(false);

  const isDefault =
    options?.find(({ default: isDefault }) => isDefault)?.value === value;

  useEffect(() => {
    const handleClickedOutside = () => {
      if (!isOverOption.current) {
        setOpened(false);
      }
    };

    document.addEventListener('click', handleClickedOutside);
    return () => document.removeEventListener('click', handleClickedOutside);
  }, []);

  return (
    <div
      className={cleanClassName(
        `${styles['dropdown-tag-container']} ${className}`,
      )}
      onMouseEnter={() => {
        isOverOption.current = true;
      }}
      onMouseLeave={() => {
        isOverOption.current = false;
      }}
    >
      <Button
        className={cleanClassName(
          `${styles.padding} ${isDefault && styles['default-value']}`,
        )}
        size="small2x"
        theme={
          isDefault
            ? 'bluish-gray700/0/bluish-gray200'
            : 'purple550/purple50/purple100'
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
        {value}
      </Button>
      <Options
        opened={opened}
        options={options?.map(({ label, value }) => ({ label, value }))}
        cancelable={false}
        onChange={(value) => {
          setOpened(false);
          onChange?.(value ?? '');
        }}
        className={styles.options}
      />
    </div>
  );
};
