/// <reference types="./src/types.d.ts" />
import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import type { Validation, UseTypographyClassNameParams } from '@hooks';
import type { InputWrapProps, LabelContainerProps } from '../../atoms';
export interface TextareaProps extends OptionalPick<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'placeholder' | 'id'>, OptionalPick<InputWrapProps, 'onClick'> {
    onChange?: (value?: string) => void;
    value?: string;
    validation?: Validation<TextareaProps['value']>;
    label?: string;
    className?: string;
    disabled?: boolean | 'read-only';
    inputStyle?: {
        resize?: boolean;
        height?: React.CSSProperties['height'];
    } & OptionalPick<InputWrapProps, 'borderRadius' | 'width'> & UseTypographyClassNameParams;
    labelStyle?: OptionalPick<LabelContainerProps, 'direction'> & UseTypographyClassNameParams;
    floatingActionName?: string;
    onFloatingActionClick?: () => void;
}
export declare const Textarea: ({ placeholder, value: originalValue, onChange, disabled, validation, id, label, className, onClick, inputStyle, labelStyle, floatingActionName, onFloatingActionClick, }: TextareaProps) => JSX.Element;
