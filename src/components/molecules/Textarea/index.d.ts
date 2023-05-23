import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import type { Validation } from '../../../hooks';
import type { InputContainerProps, InputContainerInteractionProps } from '../../atoms';
export type TextareaProps = Partial<Omit<InputContainerProps, 'size' | 'onClick' | 'children' | 'validationMessage'> & Omit<InputContainerInteractionProps, 'size' | 'children'> & Pick<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'placeholder' | 'id'>> & {
    resize?: boolean;
    onlyUpdatedByParent?: boolean;
    onChange?: (value?: string) => void;
    value?: string;
    validation?: Validation<TextareaProps['value']>;
    label?: string;
    validationSpace?: boolean;
    className?: string;
    disabled?: boolean | 'read-only';
    height?: React.CSSProperties['height'];
    labelDirection?: 'column' | 'row';
};
export declare const Textarea: ({ placeholder, value: originalValue, resize, onlyUpdatedByParent, onChange, disabled, validation, id, label, validationSpace, className, height, onClick, borderRadius, labelDirection, }: TextareaProps) => JSX.Element;
