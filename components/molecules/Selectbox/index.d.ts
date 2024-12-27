import type { InputProps, OptionsProps, ValidOptionValue, InputWrapProps, LabelWithInputProps } from '../../atoms';
import type { ValidateHandler, UseTypographyClassNameParams } from '../../../hooks';
export interface SelectboxProps<_ValidOptionValue = ValidOptionValue, _Multiple = boolean> extends Pick<OptionsProps<_ValidOptionValue, _Multiple>, 'options' | 'float' | 'onChange' | 'value' | 'multiple' | 'optionStyle' | 'textEllipsis'>, Pick<InputProps<'button'>, 'disabled' | 'placeholder' | 'id' | 'ref'>, Pick<InputWrapProps, 'onClick' | 'readOnly'>, Omit<LabelWithInputProps, 'children'> {
    validation?: ValidateHandler<SelectboxProps<_ValidOptionValue>['value']>;
    inputStyle?: Pick<InputWrapProps, 'borderRadius' | 'size' | 'width'> & UseTypographyClassNameParams;
    description?: InputWrapProps['description'];
    cancelable?: boolean;
    requireMessage?: string;
}
export declare const Selectbox: <_ValidOptionValue extends ValidOptionValue = ValidOptionValue, _Multiple extends boolean = false>({ value, options, onChange, float, disabled, placeholder, id, ref, onClick, label, validation, className, inputStyle, labelStyle, multiple, optionStyle, description, readOnly, cancelable, textEllipsis, requireMessage, }: SelectboxProps<_ValidOptionValue, _Multiple>) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
