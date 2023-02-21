import { cleanClassName } from 'utils';

import {
  createRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

import styles from './index.module.scss';

type VaildValue = string | number | null;

export interface Option<T extends VaildValue> {
  label: string;
  value: T;
}

export type OptionHint = Option<VaildValue> | string;

type SelectedValue<T> = T extends Option<infer U> ? Option<U> : Option<string>;

export interface OptionsProps<T extends OptionHint> {
  opened?: boolean;
  options?: T[];
  value?: T extends Option<infer U> ? U : string;
  onSelect?: (value: SelectedValue<T>) => void;
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
        const option = (
          typeof originalOption === 'string'
            ? { label: originalOption, value: originalOption }
            : originalOption
        ) as SelectedValue<T>;
        const ref = createRef<HTMLButtonElement>();
        return { ref, option };
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
          const isSelected = value === option.value;

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
                {option.label}
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
