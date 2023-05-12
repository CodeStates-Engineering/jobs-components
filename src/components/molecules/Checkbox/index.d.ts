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
}
export declare const Checkbox: ({ value, onChange, disabled, onlyUpdatedByParent, id, size, essential, label, description, className, }: CheckboxProps) => JSX.Element;
