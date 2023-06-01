/// <reference types="react" />
import type { DayPickerProps, DateRange } from 'react-day-picker';
import type { Validation, Typography } from '../../../hooks';
import type { InputProps, InputWrapProps, LabelContainerProps } from '../../atoms';
type DateType = Exclude<DayPickerProps['mode'], 'default'>;
type DateValue<_DateType = DateType> = _DateType extends 'multiple' ? Date[] : _DateType extends 'range' ? DateRange : Date;
export interface DateSelectboxProps<_DateType = DateType> extends Pick<InputProps<'text'>, 'className' | 'placeholder' | 'disabled' | 'onFocus' | 'id' | 'onClick' | 'ref'> {
    label?: string;
    type?: _DateType;
    value?: DateValue<_DateType>;
    onChange?: (value?: DateValue<_DateType>) => void;
    validation?: Validation<DateSelectboxProps['value']>;
    validationSpace?: boolean;
    inputStyle?: Typography & Pick<InputWrapProps, 'size' | 'borderRadius' | 'width'>;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}
export declare const DateSelectbox: <_DateType extends DateType>({ value: originalValue, type, onChange, placeholder, disabled, onFocus, id, onClick, ref, label, validation, validationSpace, className, inputStyle, labelStyle, }: DateSelectboxProps<_DateType>) => JSX.Element;
export {};
