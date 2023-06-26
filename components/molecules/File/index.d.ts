/// <reference types="./src/types.d.ts" />
/// <reference types="react" />
import type { Validation, Typography } from '../../../hooks';
import type { ButtonProps, InputProps, InputWrapProps, LabelContainerProps } from '../../atoms';
interface SavedFile {
    name: string;
    url: string;
}
export interface FileProps extends OptionalPick<ButtonProps, 'className'> {
    children?: React.ReactNode;
    value?: SavedFile;
    onChange?: (file?: File) => void;
    download?: boolean;
    disabled?: InputProps['disabled'];
    accept?: string;
    validation?: Validation<FileProps['value']>;
    label?: string;
    id?: string;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
    } & Pick<InputWrapProps, 'borderRadius' | 'width'> & Typography;
    labelStyle?: OptionalPick<LabelContainerProps, 'direction'> & Typography;
}
export declare const File: ({ children, value, onChange, className, download, disabled, accept, validation, label, id, labelStyle, inputStyle, }: FileProps) => JSX.Element;
export {};
