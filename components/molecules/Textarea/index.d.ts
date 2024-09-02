import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import type { InputWrapProps, LabelWithInputProps } from '../../atoms';
import type { UseTypographyClassNameParams, ValidateHandler, ValidationTrigger } from '../../../hooks';
export interface TextareaProps extends Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'onChange' | 'onClick' | 'disabled'>, Omit<LabelWithInputProps, 'inputStyle'> {
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
    description?: InputWrapProps['description'];
    requireMessage?: string;
}
export declare const Textarea: ({ placeholder, value: originalValue, onChange, disabled, validation, id, label, className, onClick, inputStyle, labelStyle, floatingActionName, onFloatingActionClick, validationTrigger, description, readOnly, requireMessage, maxLength, minLength, }: TextareaProps) => import("react/jsx-runtime").JSX.Element;
