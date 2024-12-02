import classNames from 'classnames';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Check } from 'react-feather';

import { useTypographyClassName } from '@hooks';
import type { UseTypographyClassNameParams } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export type ValidOptionValue = string | number;

export interface OptionsProps<
  OptionValue = ValidOptionValue,
  Multiple = boolean,
> {
  opened?: boolean;
  options?: {
    label: string;
    value: OptionValue;
    disabled?: boolean;
  }[];
  multiple?: Multiple;
  value?: Multiple extends true ? OptionValue[] : OptionValue;
  onChange?: (
    value?: Multiple extends true ? OptionValue[] : OptionValue,
  ) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  float?: 'top' | 'bottom';
  className?: string;
  optionStyle?: UseTypographyClassNameParams &
    Pick<React.CSSProperties, 'width' | 'maxHeight'>;
  cancelable?: boolean;
  textEllipsis?: boolean;
}

export const Options = <
  OptionValue extends ValidOptionValue,
  Multiple extends boolean = false,
>({
  opened = false,
  options,
  multiple = false as Multiple,
  value: selectedValue,
  onChange,
  onKeyDown,
  float = 'bottom',
  className,
  optionStyle,
  cancelable = true,
  textEllipsis = false,
}: OptionsProps<OptionValue, Multiple>) => {
  const [openState, setOpenState] = useState<boolean | 'closing' | 'opening'>(
    opened,
  );

  useEffect(() => {
    setOpenState((prevOpenState) => {
      if (prevOpenState !== opened) {
        return opened ? 'opening' : 'closing';
      }
      return prevOpenState;
    });
  }, [opened]);

  const isChangeOpenState = typeof openState === 'string';
  const [indexForSelect, setIndexForSelect] = useState(-1);

  const [optionsStyle, optionContainerStyle] = useMemo(
    () => [
      { width: optionStyle?.width },
      {
        maxHeight: optionStyle?.maxHeight,
      },
    ],
    [optionStyle?.maxHeight, optionStyle?.width],
  );

  useEffect(() => {
    if (isChangeOpenState) {
      const nextOpenState = openState === 'opening';

      setIndexForSelect(
        options?.findIndex(({ value }) => value === selectedValue) ?? -1,
      );

      const timeout = setTimeout(() => setOpenState(nextOpenState), 250);
      return () => clearTimeout(timeout);
    }
  }, [isChangeOpenState, openState, options, selectedValue]);

  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (openState === true && options) {
      const keyboardEvent = (event: KeyboardEvent) => {
        onKeyDown?.(event);
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex > 0) {
                const nextIndex = prevIndex - 1;
                optionRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });

          case 'ArrowDown':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex < options.length - 1) {
                const nextIndex = prevIndex + 1;
                optionRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });
          case 'Enter':
            event.preventDefault();
            return setIndexForSelect((index) => {
              if (index >= 0) {
                optionRefs.current[index]?.click();
              }
              return index;
            });
          default:
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [openState, options, onKeyDown]);

  const { typographyClassName } = useTypographyClassName({
    fontSize: optionStyle?.fontSize,
    fontWeight: optionStyle?.fontWeight,
  });

  return openState && options?.length ? (
    <section
      style={optionsStyle}
      className={cleanClassName(
        `${styles.options} ${styles[float]} ${
          isChangeOpenState && styles[openState]
        } ${className}`,
      )}
    >
      <ul
        className={cleanClassName(styles['option-container'])}
        style={optionContainerStyle}
      >
        {options?.map(({ label, value, disabled = false }, index) => {
          const isHovered = index === indexForSelect;
          const isSelected = (() => {
            if (selectedValue === undefined) {
              return false;
            }

            if (multiple && selectedValue instanceof Array) {
              return selectedValue.includes(value);
            }

            return selectedValue === value;
          })();

          return (
            <li
              key={index}
              className={classNames(styles['option-wrap'], {
                [styles.disabled]: disabled,
              })}
            >
              <button
                type="button"
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                className={cleanClassName(
                  `${styles['option-item']} ${typographyClassName} ${
                    isHovered && styles.hovered
                  } ${isSelected && styles.selected}`,
                )}
                onClick={() => {
                  if (multiple) {
                    const selectedValues = (selectedValue ??
                      []) as OptionValue[];

                    const handleChange = onChange as
                      | ((values: OptionValue[]) => void)
                      | undefined;

                    let newValues = selectedValues;

                    if (!isSelected) {
                      newValues = [...selectedValues, value];
                    } else if (cancelable) {
                      newValues = selectedValues.filter(
                        (selectedValue) => selectedValue !== value,
                      );
                    }

                    handleChange?.(newValues);
                  } else {
                    const handleChange = onChange as
                      | ((value?: OptionValue) => void)
                      | undefined;

                    handleChange?.(
                      isSelected && cancelable ? undefined : value,
                    );
                  }
                }}
                onMouseEnter={() => {
                  setIndexForSelect(index);
                }}
              >
                <div
                  className={cleanClassName(
                    textEllipsis ? `${styles['text-ellipsis']}` : undefined,
                  )}
                >
                  {label}
                </div>
                {multiple ? (
                  <div
                    className={cleanClassName(
                      `${styles['icon-wrap']} ${isSelected && styles.show}`,
                    )}
                  >
                    {<Check size="1em" />}
                  </div>
                ) : null}
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
