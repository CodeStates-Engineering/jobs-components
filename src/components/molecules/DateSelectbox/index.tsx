import ko from 'date-fns/locale/ko';
import days from 'dayjs';
import { isDate, isNaN } from 'lodash-es';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import type { DayPickerProps, DateRange } from 'react-day-picker';
import { Calendar } from 'react-feather';

import '../../../styles/dayPicker.scss';
import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Input, Label, Dropdown, FocusLayer } from '../../atoms';

import 'react-day-picker/dist/style.css';
import type { Validation, Typography } from '../../../hooks';
import type {
  InputProps,
  InputWrapProps,
  LabelContainerProps,
} from '../../atoms';

type DateType = Exclude<DayPickerProps['mode'], 'default'>;
type DateValue<_DateType = DateType> = _DateType extends 'multiple'
  ? Date[]
  : _DateType extends 'range'
  ? DateRange
  : Date;

export interface DateSelectboxProps<_DateType = DateType>
  extends Pick<
    InputProps<'text'>,
    | 'className'
    | 'placeholder'
    | 'disabled'
    | 'onFocus'
    | 'id'
    | 'onClick'
    | 'ref'
  > {
  label?: string;
  type?: _DateType;
  value?: DateValue<_DateType>;
  onChange?: (value?: DateValue<_DateType>) => void;
  validation?: Validation<DateSelectboxProps['value']>;
  validationSpace?: boolean;
  inputStyle?: Typography &
    Pick<InputWrapProps, 'size' | 'borderRadius' | 'width'>;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}

export const DateSelectbox = <_DateType extends DateType>({
  value: originalValue,
  type = 'single',
  onChange,
  placeholder,
  disabled,
  onFocus,
  id,
  onClick,
  ref,
  label,
  validation,
  validationSpace,
  className,
  inputStyle,
  labelStyle,
}: DateSelectboxProps<_DateType>) => {
  const DATE_FORMAT = 'YYYY.MM.DD';
  const TIME_FORMAT = 'HH:mm';
  const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
  const MONTH_FORMAT = 'YYYY.MM';
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useSubscribedState<DateValue | undefined>(
    originalValue,
  );

  const reloadCalendar = () => {
    setOpened(false);
    setTimeout(() => setOpened(true), 500);
  };

  const [inputValue, setInputValue] = useState('');

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  const { dayPickerProps, inputProps } = ((): {
    dayPickerProps: DayPickerProps;
    inputProps?: InputProps<'text'>;
  } => {
    const handleChange = (date?: DateValue) => {
      setValue?.(date);
      (onChange as ((date?: DateValue) => void) | undefined)?.(date);
      checkValidation?.(date);
    };

    // TODO: 추후 다른 타입에 대한 처리 추가
    switch (type) {
      case 'multiple': {
        return {
          dayPickerProps: {
            mode: type,
            selected: value as Date[] | undefined,
            onSelect: (value?: Date[]) => {
              handleChange(value);
            },
          },
        };
      }

      case 'range': {
        return {
          dayPickerProps: {
            mode: type,
            selected: value as DateRange | undefined,
            onSelect: (value?: DateRange) => {
              handleChange(value);
            },
          },
        };
      }

      case 'single':
      default: {
        const selectedDate = value as Date | undefined;
        return {
          inputProps: {
            value:
              inputValue ||
              (selectedDate && days(selectedDate).format(DATE_TIME_FORMAT)),
            onChange: (value) => {
              if (value) {
                setInputValue(value);
                const date = new Date(value);
                if (isDate(date) && !isNaN(Number(date))) {
                  handleChange(date);
                  if (
                    !isNaN(Number(selectedDate)) &&
                    days(date).format(MONTH_FORMAT) !==
                      days(selectedDate).format(MONTH_FORMAT)
                  ) {
                    reloadCalendar();
                  }
                }
              } else {
                setInputValue('');
                handleChange(undefined);
              }
            },
            onBlur: () => {
              setInputValue(
                selectedDate ? days(selectedDate).format(DATE_TIME_FORMAT) : '',
              );
            },
          },
          dayPickerProps: {
            mode: type,
            selected: selectedDate,
            onSelect: (value?: Date) => {
              const dateString = value
                ? `${days(value).format(DATE_FORMAT)} ${
                    selectedDate
                      ? days(selectedDate).format(TIME_FORMAT)
                      : '00:00'
                  }`
                : '';
              setInputValue(dateString);
              handleChange(value ? new Date(dateString) : undefined);
              setOpened(false);
            },
            defaultMonth: selectedDate,
          },
        };
      }
    }
  })();

  return (
    <FocusLayer
      className={cleanClassName(`${styles['date-selectbox']} ${className}`)}
      bodyScroll
      focused={opened}
      onBlur={() => setOpened(false)}
    >
      <Input.Container
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <Label.Container direction={labelStyle?.direction}>
          {label ? (
            <Label
              htmlFor={label}
              fontSize={labelStyle?.fontSize}
              fontWeight={labelStyle?.fontWeight}
            >
              {label}
            </Label>
          ) : null}
          <Input.Wrap
            size={inputStyle?.size}
            borderRadius={inputStyle?.borderRadius}
            width={inputStyle?.width}
          >
            <Input
              {...inputProps}
              onClick={onClick}
              ref={ref}
              name={label}
              disabled={disabled}
              placeholder={placeholder}
              fontSize={inputStyle?.fontSize}
              fontWeight={inputStyle?.fontWeight}
              onFocus={(e) => {
                onFocus?.(e);
                setOpened(true);
              }}
              id={id}
              type="text"
            />
            <Calendar size="1.2em" className={styles['calendar-icon']} />
          </Input.Wrap>
        </Label.Container>
        <Dropdown opened={opened} className={styles.calendar}>
          <DayPicker
            {...dayPickerProps}
            className={styles['day-picker']}
            locale={ko}
            formatters={{
              formatCaption: (month) => `${days(month).format('YYYY MM월')}`,
            }}
          />
        </Dropdown>
      </Input.Container>
    </FocusLayer>
  );
};
