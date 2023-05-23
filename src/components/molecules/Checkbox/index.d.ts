/// <reference types="react" />
export interface CheckboxProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    disabled?: boolean;
    id?: string;
    onlyUpdatedByParent?: boolean;
    size?: 'small' | 'medium';
    essential?: boolean;
    label?: string;
    description?: React.ReactNode;
    className?: string;
    labelDirection?: 'column' | 'row';
}
export declare const Checkbox: ({ value, onChange, disabled, onlyUpdatedByParent, id, size, essential, label, description, className, labelDirection, }: CheckboxProps) => JSX.Element;
