import { cleanClassName } from 'utils';

import { createRef, useMemo, useState, useEffect } from 'react';

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
  perPage?: number;
  width?: React.CSSProperties['width'];
}

export const Options = <T extends Option<unknown> | string>({
  opened,
  options: unknowOptions,
  onClick: unknownOnClick,
  perPage = 5,
  width,
}: OptionsProps<T>) => {
  const [firstShownOptionIndex, setFirstShownOptionIndex] = useState(0);
  const tempLastShownOptionIndex = firstShownOptionIndex + perPage - 1;
  const totalOptionCount = unknowOptions?.length ?? 0;
  const totalLastOptionIndex = totalOptionCount - 1;
  const lastShownOptionIndex =
    tempLastShownOptionIndex < totalLastOptionIndex
      ? tempLastShownOptionIndex
      : totalLastOptionIndex;

  const onClick = unknownOnClick as (value: unknown) => void;

  const options = useMemo(
    () =>
      unknowOptions
        ?.slice(firstShownOptionIndex, lastShownOptionIndex + 1)
        .map((option) =>
          typeof option === 'string'
            ? { label: option, value: option }
            : option,
        ) as Option<unknown>[] | undefined,
    [unknowOptions, firstShownOptionIndex, lastShownOptionIndex],
  );

  const optionCount = options?.length ?? 0;
  const lastOptionIndex = optionCount - 1;

  const optionElementRefs = useMemo(
    () => options?.map(() => createRef<HTMLButtonElement>()),
    [options],
  );

  const [optionOverflowStatuses, setOptionOverflowStatuses] =
    useState<boolean[]>();

  useEffect(() => {
    setOptionOverflowStatuses(
      optionElementRefs?.map((optionElement) => {
        const { current } = optionElement;

        if (current) {
          const { offsetWidth, scrollWidth } = current;
          return offsetWidth < scrollWidth;
        }

        return false;
      }),
    );
  }, [optionElementRefs, setOptionOverflowStatuses]);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  useEffect(() => {
    if (opened) {
      const movePrevPage = () =>
        firstShownOptionIndex > 0 &&
        setFirstShownOptionIndex((prev) => prev - 1);

      const moveNextPage = () =>
        lastShownOptionIndex < totalLastOptionIndex &&
        setFirstShownOptionIndex((prev) => prev + 1);

      const KeyboardEvent = ({ key }: KeyboardEvent) => {
        switch (key) {
          case 'ArrowUp':
            return selectedOptionIndex === 0 && movePrevPage();
          case 'ArrowDown':
            return selectedOptionIndex === lastOptionIndex && moveNextPage();
          case 'Enter':
            return (
              selectedOptionIndex > -1 &&
              onClick(options?.[selectedOptionIndex].value)
            );
          default:
            break;
        }
      };

      const mouseWheelListener = ({ deltaY }: WheelEvent) => {
        if (deltaY > 15) {
          return moveNextPage();
        }
        if (deltaY < -15) {
          return movePrevPage();
        }
      };

      document.addEventListener('wheel', mouseWheelListener);
      document.addEventListener('keydown', KeyboardEvent);
      return () => {
        document.removeEventListener('wheel', mouseWheelListener);
        document.removeEventListener('keydown', KeyboardEvent);
      };
    }
  }, [
    lastOptionIndex,
    opened,
    selectedOptionIndex,
    firstShownOptionIndex,
    lastShownOptionIndex,
    totalLastOptionIndex,
    onClick,
    options,
  ]);

  const [allowMouseEnter, setAllowMouseEnter] = useState(true);

  useEffect(() => {
    if (opened) {
      setSelectedOptionIndex(-1);
      const selectListener = ({ key }: KeyboardEvent) => {
        switch (key) {
          case 'ArrowUp':
            setAllowMouseEnter(false);
            return setSelectedOptionIndex((prev) =>
              prev > 0 ? prev - 1 : prev,
            );
          case 'ArrowDown':
            setAllowMouseEnter(false);
            return setSelectedOptionIndex((prev) =>
              prev < lastOptionIndex ? prev + 1 : prev,
            );
          default:
            break;
        }
      };

      document.addEventListener('keydown', selectListener);
      return () => document.removeEventListener('keydown', selectListener);
    }
  }, [lastOptionIndex, opened]);

  useEffect(() => {
    if (opened) {
      const mouseMoveListener = () => setAllowMouseEnter(true);
      document.addEventListener('mousemove', mouseMoveListener);
      return () => document.removeEventListener('mousemove', mouseMoveListener);
    }
  }, [opened]);

  return opened ? (
    <section className={styles.options} style={{ width }}>
      <div
        className={cleanClassName(
          `${styles['page-indicator']} ${
            firstShownOptionIndex === 0 && styles.invisible
          }`,
        )}
      >
        ▲
      </div>
      <ul className={styles['option-container']}>
        {options?.map(({ label, value }, index) => {
          const optionElementRef = optionElementRefs?.[index];
          const isOverflow = optionOverflowStatuses?.[index];
          const isSelected = selectedOptionIndex === index;
          return (
            <li key={index}>
              <button
                ref={optionElementRef}
                className={cleanClassName(
                  `${styles['option-item']} ${
                    allowMouseEnter && styles['mouse-on']
                  } ${isOverflow && styles.overflow} ${
                    isSelected && styles.selected
                  }`,
                )}
                onClick={() => {
                  onClick?.(value);
                }}
                onMouseEnter={() => {
                  if (allowMouseEnter) {
                    setSelectedOptionIndex(index);
                  }
                }}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <div
        className={cleanClassName(
          `${styles['page-indicator']} ${
            lastShownOptionIndex === totalLastOptionIndex && styles.invisible
          }`,
        )}
      >
        ▼
      </div>
    </section>
  ) : (
    <></>
  );
};
