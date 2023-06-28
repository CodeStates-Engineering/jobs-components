import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import type { InputWrapProps, LabelWithInputProps } from '../../atoms';
import type { UseTypographyClassNameParams, ValidateHandler, ValidationTrigger } from '../../../hooks';
export interface TextareaProps extends Pick<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'placeholder' | 'id'>, Omit<LabelWithInputProps, 'inputStyle'> {
    onChange?: (value?: string) => void;
    onClick?: InputWrapProps['onClick'];
    value?: string;
    validation?: ValidateHandler<TextareaProps['value']>;
    disabled?: boolean | 'read-only';
    inputStyle?: {
        resize?: boolean;
        height?: React.CSSProperties['height'];
    } & Pick<InputWrapProps, 'borderRadius' | 'width'> & UseTypographyClassNameParams;
    floatingActionName?: string;
    onFloatingActionClick?: () => void;
    validationTrigger?: ValidationTrigger;
}
export declare const Textarea: ({ placeholder, value: originalValue, onChange, disabled, validation, id, label, className, onClick, inputStyle, labelStyle, floatingActionName, onFloatingActionClick, validationTrigger, }: TextareaProps) => JSX.Element;
