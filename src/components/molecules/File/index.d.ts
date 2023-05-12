/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { ButtonProps, InputProps } from '../../atoms';
interface SavedFile {
    name: string;
    url: string;
}
export interface FileProps extends Pick<ButtonProps, 'size' | 'fontSize' | 'fontWeight' | 'className'> {
    children?: React.ReactNode;
    value?: SavedFile;
    onChange?: (file?: File) => void;
    download?: boolean;
    disabled?: InputProps['disabled'];
    accept?: string;
    validation?: Validation<FileProps['value']>;
    validationSpace?: boolean;
    label?: string;
    id?: string;
}
export declare const File: ({ children, size, value, onChange, fontWeight, fontSize, className, download, disabled, accept, validation, validationSpace, label, id, }: FileProps) => JSX.Element;
export {};
