import type { DayPickerProps, DateRange } from 'react-day-picker';
import type { InputProps, InputWrapProps, LabelWithInputProps } from '../../atoms';
import type { ValidateHandler, UseTypographyClassNameParams } from '../../../hooks';
type DateType = Exclude<DayPickerProps['mode'], 'default'>;
type DateValue<TDateType extends DateType> = TDateType extends 'multiple' ? Date[] : TDateType extends 'range' ? DateRange : Date;
export interface DateSelectboxProps<TDateType extends DateType = 'single'> extends Pick<InputProps<'text'>, 'className' | 'placeholder' | 'disabled' | 'onFocus' | 'id' | 'onClick' | 'ref' | 'readOnly'>, Omit<LabelWithInputProps, 'children'> {
    label?: string;
    type?: TDateType;
    value?: DateValue<TDateType>;
    onChange?: (value?: DateValue<TDateType>) => void;
    validation?: ValidateHandler<DateSelectboxProps<TDateType>['value']>;
    inputStyle?: UseTypographyClassNameParams & Pick<InputWrapProps, 'size' | 'borderRadius' | 'width'> & {
        calendarX?: 'left' | 'right';
    };
    description?: InputWrapProps['description'];
}
export declare const DateSelectbox: <TDateType extends DateType = "single">({ value, type, onChange, placeholder, disabled, onFocus, id, onClick, ref, label, validation, className, inputStyle, labelStyle, description, readOnly, }: DateSelectboxProps<TDateType>) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
