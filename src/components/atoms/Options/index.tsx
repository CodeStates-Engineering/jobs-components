import { cleanClassName } from 'utils';

import {
  createRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

import styles from './index.module.scss';

type ValidValue = string | number | null;

interface ObjectOption<T extends ValidValue> {
  label: string;
  value: T;
}

export type OptionHint = ObjectOption<ValidValue> | string;

export interface OptionsProps<T extends OptionHint> {
  opened?: boolean;
  options?: T[];
  value?: T extends ObjectOption<infer U> ? U : string;
  onSelect?: (option: T) => void;
  width?: React.CSSProperties['width'];
  float?: 'top' | 'bottom';
}

export const Options = <T extends OptionHint>({
  opened,
  options,
  value,
  onSelect,
  width = '300px',
  float = 'bottom',
}: OptionsProps<T>) => {
  const optionData = useMemo(
    () =>
      options?.map((originalOption) => {
        const ref = createRef<HTMLButtonElement>();
        return {
          ref,
          option: originalOption,
        };
      }),
    [options],
  );

  const [openState, setOpenState] = useState<boolean | 'closing'>(!!opened);

  useLayoutEffect(
    () =>
      setOpenState((prevOpenState) => {
        if (opened) {
          return true;
        }
        if (prevOpenState) {
          return 'closing';
        }
        return false;
      }),
    [opened],
  );

  useEffect(() => {
    if (openState === 'closing') {
      const timeout = setTimeout(() => setOpenState(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [openState]);

  useEffect(() => {
    if (opened && optionData) {
      const keyboardEvent = (event: KeyboardEvent) => {
        let focusOptionIndex = optionData.findIndex(
          ({ ref }) => document.activeElement === ref.current,
        );

        const lastOptionIndex = optionData.length - 1;

        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            if (focusOptionIndex < 0) {
              focusOptionIndex = 0;
            } else if (focusOptionIndex < lastOptionIndex) {
              focusOptionIndex += 1;
            }
            break;

          case 'ArrowUp':
            event.preventDefault();
            if (focusOptionIndex > 0) {
              focusOptionIndex -= 1;
            } else {
              focusOptionIndex = 0;
            }
            break;

          default:
            break;
        }
        optionData[focusOptionIndex]?.ref.current?.focus();
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [opened, optionData]);

  return openState && optionData?.length ? (
    <section
      className={`${styles.options} ${styles[float]} ${
        openState === 'closing' ? styles.closing : styles.opened
      }`}
      style={{ width }}
    >
      <ul className={styles['option-container']}>
        {optionData.map(({ option, ref }, index) => {
          const optionObject =
            typeof option === 'object'
              ? option
              : { label: option satisfies string, value: option };

          const isSelected = value === optionObject.value;

          return (
            <li key={index}>
              <button
                ref={ref}
                className={cleanClassName(
                  `${styles['option-item']} ${isSelected && styles.selected}`,
                )}
                onClick={() => onSelect?.(option)}
                onMouseEnter={() => ref.current?.focus()}
              >
                {optionObject.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <></>
  );
};
