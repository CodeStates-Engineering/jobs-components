import { cleanClassName } from 'utils';

import {
  createRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
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
  // value를 array로 받을 수 있어야함
  const optionData = useMemo(
    () =>
      options?.map((originalOption) => {
        const ref = createRef<HTMLButtonElement>();
        const optionValue =
          typeof originalOption === 'object'
            ? originalOption.value
            : originalOption;
        const isSelected = value === optionValue;
        return {
          ref,
          isSelected,
          option: originalOption,
        };
      }),
    [options],
  );

  const [openState, setOpenState] = useState<boolean | 'closing' | 'opening'>(
    !!opened,
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

  const handleSelect = useCallback(
    (option: T) => {
      onSelect?.(option);
      setOptionIndexForSelect(-1);
    },
    [onSelect],
  );

  const [mouseHoverLock, setMouseHoverLock] = useState(false);

  const optionContainerRef = useRef<HTMLUListElement>(null);
  const optionContainer = optionContainerRef.current;

  useLayoutEffect(() => {
    setOpenState((prevOpenState) => {
      if (prevOpenState !== opened) {
        return opened ? 'opening' : 'closing';
      }
      return prevOpenState;
    });

    if (optionContainer) {
      optionContainer.scrollTo({
        top: 0,
      });
    }
  }, [opened, optionContainer]);

  useEffect(() => {
    if (openState === true && optionData && optionContainer) {
      const keyboardEvent = (event: KeyboardEvent) => {
        const { key } = event;
        switch (key) {
          case 'Enter':
            event.preventDefault();
            return handleSelect(optionData[optionIndexForSelect].option);

          case 'ArrowUp':
          case 'ArrowDown':
            setMouseHoverLock(true);
            event.preventDefault();

            return setOptionIndexForSelect((prevIndex) => {
              if (key === 'ArrowDown') {
                prevIndex =
                  prevIndex < optionData.length - 1 ? prevIndex + 1 : prevIndex;
              } else {
                prevIndex = prevIndex > 0 ? prevIndex - 1 : 0;
              }

              optionContainer.scrollTo({
                top: optionData[prevIndex].ref.current?.offsetTop,
              });

              return prevIndex;
            });

          default:
            return onKeyDown?.(event);
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [
    openState,
    optionData,
    onKeyDown,
    optionIndexForSelect,
    handleSelect,
    optionContainer,
  ]);

  return openState && optionData?.length ? (
    <section
      className={`${styles.options} ${styles[float]} ${
        isChangeOpenState && styles[openState]
      }`}
      style={{ width }}
    >
      <ul
        className={cleanClassName(
          `${styles['option-container']} ${
            !mouseHoverLock && styles['mouse-hover-enabled']
          }`,
        )}
        ref={optionContainerRef}
      >
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
                    mouseHoverLock &&
                    optionIndexForSelect === index &&
                    styles.hovered
                  }`,
                )}
                onClick={() => handleSelect(option)}
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
