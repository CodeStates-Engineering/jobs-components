import { cleanClassName } from 'utils';

import { createRef, useMemo, useState, useEffect } from 'react';

import styles from './index.module.scss';

type VaildValue = string | number | null;

export interface Option<T extends VaildValue> {
  label: string;
  value: T;
}

export type OptionHint = Option<VaildValue> | string;

export interface OptionsProps<T extends OptionHint> {
  opened?: boolean;
  options?: T[];
  onClick?: T extends Option<infer U>
    ? (event: Option<U>) => void
    : (event: Option<string>) => void;
  perPage?: number;
  width?: React.CSSProperties['width'];
  float?: 'top' | 'bottom';
}

export const Options = <T extends OptionHint>({
  opened,
  options,
  onClick,
  perPage = 5,
  width = '300px',
  float = 'bottom',
}: OptionsProps<T>) => {
  const [firstShownOptionIndex, setFirstShownOptionIndex] = useState(0);
  const tempLastShownOptionIndex = firstShownOptionIndex + perPage - 1;
  const totalOptionCount = options?.length ?? 0;
  const totalLastOptionIndex = totalOptionCount - 1;
  const lastShownOptionIndex =
    tempLastShownOptionIndex < totalLastOptionIndex
      ? tempLastShownOptionIndex
      : totalLastOptionIndex;

  const handleClick = onClick as
    | ((event: Option<VaildValue>) => void)
    | undefined;

  const displayedOptions = useMemo(
    () =>
      options
        ?.slice(firstShownOptionIndex, lastShownOptionIndex + 1)
        .map((option) =>
          typeof option === 'string'
            ? ({ label: option, value: option } satisfies Option<string>)
            : (option satisfies Option<VaildValue>),
        ),
    [options, firstShownOptionIndex, lastShownOptionIndex],
  );

  const optionCount = displayedOptions?.length ?? 0;
  const lastOptionIndex = optionCount - 1;

  const optionElementRefs = useMemo(
    () => displayedOptions?.map(() => createRef<HTMLButtonElement>()),
    [displayedOptions],
  );

  const [optionOverflowStatuses, setOptionOverflowStatuses] =
    useState<boolean[]>();

  useEffect(() => {
    if (opened) {
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
    }
  }, [optionElementRefs, setOptionOverflowStatuses, opened]);

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
          case 'Enter': {
            if (selectedOptionIndex > -1) {
              const selectedOption = displayedOptions?.[selectedOptionIndex];
              if (selectedOption) {
                handleClick?.(selectedOption);
              }
            }
            break;
          }
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
    handleClick,
    displayedOptions,
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

  return opened && displayedOptions?.length ? (
    <section className={`${styles.options} ${styles[float]}`} style={{ width }}>
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
        {displayedOptions.map((option, index) => {
          const optionElementRef = optionElementRefs?.[index];
          const isOverflow = optionOverflowStatuses?.[index];
          const isSelected = selectedOptionIndex === index;
          const label = typeof option === 'string' ? option : option.label;
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
                  handleClick?.(option);
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
