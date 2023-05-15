/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, OptionsProps, Option, InputContainerInteractionProps } from '../../atoms';
export type SelectboxProps<_Option extends Option = Option> = Omit<InputProps<'button'> & InputContainerProps, 'type' | 'children' | 'validationMessage' | 'onFocus' | 'value' | 'onChange' | 'name'> & Partial<Pick<OptionsProps<_Option>, 'options' | 'float'>> & InputContainerInteractionProps & {
    onlyUpdatedByParent?: boolean;
    onChange?: OptionsProps<_Option>['onSelect'];
    value?: Exclude<OptionsProps<_Option>['value'], undefined>['value'];
    label?: string;
    validation?: Validation<SelectboxProps<_Option>['value']>;
    validationSpace?: boolean;
    className?: string;
};
export declare const Selectbox: <_Option extends Option<string | number | undefined> = Option<string | number | undefined>>({ value, options, onChange, float, onlyUpdatedByParent, disabled, placeholder, size, id, ref, onClick, label, validation, validationSpace, className, }: SelectboxProps<_Option>) => JSX.Element;
