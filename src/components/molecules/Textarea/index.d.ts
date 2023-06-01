import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import type { Validation, Typography } from '../../../hooks';
import type { InputWrapProps, LabelContainerProps } from '../../atoms';
export interface TextareaProps extends Pick<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'placeholder' | 'id'>, Pick<InputWrapProps, 'onClick'> {
    onChange?: (value?: string) => void;
    value?: string;
    validation?: Validation<TextareaProps['value']>;
    label?: string;
    validationSpace?: boolean;
    className?: string;
    disabled?: boolean | 'read-only';
    inputStyle?: {
        resize?: boolean;
        height?: React.CSSProperties['height'];
    } & Pick<InputWrapProps, 'borderRadius' | 'width'> & Typography;
    labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}
export declare const Textarea: ({ placeholder, value: originalValue, onChange, disabled, validation, id, label, validationSpace, className, onClick, inputStyle, labelStyle, }: TextareaProps) => JSX.Element;
