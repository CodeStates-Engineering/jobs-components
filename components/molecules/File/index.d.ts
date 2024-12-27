import type { InputProps, InputWrapProps, LabelWithInputProps } from '../../atoms';
import type { ValidateHandler, UseTypographyClassNameParams } from '../../../hooks';
interface SavedFile {
    name: string;
    url: string;
}
export interface FileProps extends Omit<LabelWithInputProps, 'required'> {
    value?: SavedFile;
    onChange?: (file?: File) => void;
    download?: boolean;
    disabled?: InputProps['disabled'];
    readOnly?: InputProps['readOnly'];
    accept?: string;
    validation?: ValidateHandler<FileProps['value']>;
    id?: string;
    inputStyle?: {
        size?: 'small' | 'medium' | 'large';
    } & Pick<InputWrapProps, 'borderRadius' | 'width'> & UseTypographyClassNameParams;
    description?: InputWrapProps['description'];
    requireMessage?: string;
}
export declare const File: ({ children, value, onChange, className, download, disabled, accept, validation, label, id, labelStyle, inputStyle, description, readOnly, requireMessage, }: FileProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
