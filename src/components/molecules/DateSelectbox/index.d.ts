/// <reference types="react" />
import type { DayPickerProps, DateRange } from 'react-day-picker';
import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, InputContainerInteractionProps } from '../../atoms';
type DateType = Exclude<DayPickerProps['mode'], 'default'>;
type DateValue<_DateType = DateType> = _DateType extends 'multiple' ? Date[] : _DateType extends 'range' ? DateRange : Date;
export type DateSelectboxProps<_DateType = DateType> = Omit<InputProps<'text'> & InputContainerProps, 'validationMessage' | 'name' | 'children' | 'type' | 'value' | 'onChange'> & InputContainerInteractionProps & {
    onlyUpdatedByParent?: boolean;
    label?: string;
    type: _DateType;
    value?: DateValue<_DateType>;
    onChange?: (value?: DateValue<_DateType>) => void;
    validation?: Validation<DateSelectboxProps['value']>;
    validationSpace?: boolean;
    labelDirection?: 'column' | 'row';
};
export declare const DateSelectbox: <_DateType extends DateType>({ value: originalValue, type, onlyUpdatedByParent, onChange, placeholder, disabled, onFocus, size, id, onClick, ref, label, validation, validationSpace, className, borderRadius, labelDirection, }: DateSelectboxProps<_DateType>) => JSX.Element;
export {};
