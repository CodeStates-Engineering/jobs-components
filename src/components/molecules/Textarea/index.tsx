import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { useMemo } from 'react';

import styles from './index.module.scss';
import {
  useComponentSelfState,
  useTypography,
  useValidation,
} from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Input, Label } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type { InputWrapProps, LabelContainerProps } from '../../atoms';

export interface TextareaProps
  extends Pick<
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      'placeholder' | 'id'
    >,
    Pick<InputWrapProps, 'onClick'> {
  onlyUpdatedByParent?: boolean;
  onChange?: (value?: string) => void;
  value?: string;
  validation?: Validation<TextareaProps['value']>;
  label?: string;
  validationSpace?: boolean;
  className?: string;
  disabled?: boolean | 'read-only';
  inputStyle?: {
    resize?: boolean;
    height?: React.CSSProperties['height'];
  } & Pick<InputWrapProps, 'borderRadius' | 'width'> &
    Typography;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}

export const Textarea = ({
  placeholder = '',
  value: originalValue,
  onlyUpdatedByParent,
  onChange,
  disabled,
  validation,
  id,
  label,
  validationSpace,
  className,
  onClick,
  inputStyle,
  labelStyle,
}: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useComponentSelfState(
    originalValue ?? '',
    onlyUpdatedByParent,
  );

  const { fontSizeClassName, fontWeightClassName } = useTypography(
    inputStyle?.fontSize,
    inputStyle?.fontWeight,
  );

  const { validationMessage, checkValidation } = useValidation(
    textareaValue,
    validation,
    label,
  );

  const style = useMemo(
    () => ({
      height: inputStyle?.height,
    }),
    [inputStyle?.height],
  );

  return (
    <Input.Container
      validationMessage={validationMessage}
      validationSpace={validationSpace}
      className={className}
    >
      <Label.Container direction={labelStyle?.direction}>
        {label ? (
          <Label
            htmlFor={label}
            fontSize={labelStyle?.fontSize}
            fontWeight={labelStyle?.fontWeight}
          >
            {label}
          </Label>
        ) : null}
        <Input.Wrap
          size="none"
          onClick={onClick}
          width={inputStyle?.width}
          borderRadius={inputStyle?.borderRadius}
        >
          <textarea
            id={id}
            name={label}
            value={textareaValue}
            placeholder={placeholder}
            style={style}
            onChange={({ target: { value } }) => {
              setTextareaValue?.(value);
              onChange?.(value);
              checkValidation?.(value);
            }}
            disabled={!!disabled}
            className={cleanClassName(
              `${styles['textarea-content']} ${
                (inputStyle?.resize ?? true) && styles.resize
              } ${styles[fontSizeClassName]} ${styles[fontWeightClassName]} ${
                disabled === 'read-only' && [styles['read-only']]
              } ${styles['full-size']}`,
            )}
          />
        </Input.Wrap>
      </Label.Container>
    </Input.Container>
  );
};
