import { cleanClassName } from 'utils';

import {
  createRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
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
  onKeyDown?: (event: KeyboardEvent) => void;
  width?: React.CSSProperties['width'];
  float?: 'top' | 'bottom';
}

export const Options = <T extends OptionHint>({
  opened,
  options,
  value,
  onSelect,
  onKeyDown,
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

  const [openState, setOpenState] = useState<boolean | 'closing' | 'opening'>(
    !!opened,
  );

  useLayoutEffect(
    () =>
      setOpenState((prevOpenState) => {
        if (prevOpenState !== opened) {
          return opened ? 'opening' : 'closing';
        }
        return prevOpenState;
      }),
    [opened],
  );

  const isChangeOpenState = typeof openState === 'string';
  useEffect(() => {
    if (isChangeOpenState) {
      const timeout = setTimeout(
        () => setOpenState(openState === 'opening'),
        250,
      );
      return () => clearTimeout(timeout);
    }
  }, [openState, isChangeOpenState]);

  const [optionIndexForSelect, setOptionIndexForSelect] = useState(-1);

  const [mouseHoverLock, setMouseHoverLock] = useState(false);

  const optionContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const optionContainer = optionContainerRef.current;
    if (opened && optionData && optionContainer) {
      const keyboardEvent = (event: KeyboardEvent) => {
        const lastOptionIndex = optionData.length - 1;
        setMouseHoverLock(true);
        setOptionIndexForSelect((prevOptionIndexForSelect) => {
          let optionIndexForSelect = prevOptionIndexForSelect;
          switch (event.key) {
            case 'ArrowDown':
              event.preventDefault();
              optionIndexForSelect =
                prevOptionIndexForSelect < lastOptionIndex
                  ? prevOptionIndexForSelect + 1
                  : prevOptionIndexForSelect;
              break;

            case 'ArrowUp':
              event.preventDefault();
              optionIndexForSelect =
                prevOptionIndexForSelect > 0 ? prevOptionIndexForSelect - 1 : 0;
              break;

            default:
              onKeyDown?.(event);
              break;
          }

          optionContainer.scrollTo({
            top: optionData[optionIndexForSelect].ref.current?.offsetTop,
          });

          return optionIndexForSelect;
        });
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [opened, optionData, onKeyDown, optionIndexForSelect]);

  return openState && optionData?.length ? (
    <section
      className={`${styles.options} ${styles[float]} ${
        isChangeOpenState && styles[openState]
      }`}
      style={{ width }}
    >
      <ul className={styles['option-container']} ref={optionContainerRef}>
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
                  `${styles['option-item']} ${isSelected && styles.selected} ${
                    optionIndexForSelect === index && styles.hover
                  }`,
                )}
                onClick={() => onSelect?.(option)}
                onMouseEnter={() => {
                  if (openState === true && !mouseHoverLock) {
                    setOptionIndexForSelect(index);
                  }
                }}
                onMouseMove={() => setMouseHoverLock(false)}
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
