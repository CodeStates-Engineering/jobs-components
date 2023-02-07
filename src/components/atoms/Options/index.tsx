import { cleanClassName } from 'utils';

import { createRef, useLayoutEffect, useMemo, useState } from 'react';

import styles from './index.module.scss';

export interface Option<T> {
  label: string;
  value: T;
}

export interface OptionsProps<T> {
  opened?: boolean;
  options?: T[];
  onClick?: T extends Option<infer U>
    ? (value: Option<U>) => void
    : (value: string) => void;
}

export const Options = <T extends Option<unknown> | string>({
  opened,
  options,
  onClick,
}: OptionsProps<T>) => {
  const optionElementRefs = useMemo(
    () => options?.map(() => createRef<HTMLButtonElement>()),
    [options],
  );

  const [optionOverflowStatuses, setOptionOverflowStatuses] =
    useState<boolean[]>();

  useLayoutEffect(() => {
    setOptionOverflowStatuses(
      optionElementRefs?.map((optionElement) => {
        const { current } = optionElement;

        if (current) {
          const { offsetWidth, scrollWidth } = current;
          console.log('height', current?.offsetHeight);
          return offsetWidth < scrollWidth;
        }

        return false;
      }),
    );
  }, [optionElementRefs, setOptionOverflowStatuses]);

  return opened ? (
    <ul className={styles['option-container']} style={{ width: 500 }}>
      {options?.map((option, index) => {
        const { label, value } =
          typeof option === 'string'
            ? { label: option, value: option }
            : option;

        const isOverflow = optionOverflowStatuses?.[index];

        return (
          <li key={index}>
            <button
              ref={optionElementRefs?.[index]}
              className={cleanClassName(
                `${styles['option-item']} ${isOverflow && styles.overflow}`,
              )}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick?.(value as any);
              }}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};
