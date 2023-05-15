/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, InputContainerInteractionProps, OptionsProps, Option } from '../../atoms';
type BaseOptionsProps = OptionsProps<Option<string>, false>;
export type SearchboxProps = Omit<InputProps<'text'> & InputContainerProps, 'type' | 'children' | 'validationMessage' | 'name'> & Partial<Pick<BaseOptionsProps, 'float'>> & InputContainerInteractionProps & {
    selfFilter?: boolean;
    onlyUpdatedByParent?: boolean;
    options?: string[];
    label?: string;
    validation?: Validation<SearchboxProps['value']>;
    validationSpace?: boolean;
    className?: string;
};
export declare const Searchbox: ({ float, value, options: stringOptions, onChange, selfFilter, onlyUpdatedByParent, disabled, placeholder, onFocus, size, id, onClick, ref, label, validation, validationSpace, className, }: SearchboxProps) => JSX.Element;
export {};
