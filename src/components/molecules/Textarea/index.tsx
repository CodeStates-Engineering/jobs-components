import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { Input, Label } from '@components/atoms';
import type { InputWrapProps, LabelWithInputProps } from '@components/atoms';
import {
  useSubscribedState,
  useTypographyClassName,
  useValidationMessage,
} from '@hooks';
import type {
  UseTypographyClassNameParams,
  ValidateHandler,
  ValidationTrigger,
} from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';
import { Tag } from '../Tag';

export interface TextareaProps
  extends Omit<
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      'onChange' | 'onClick' | 'disabled'
    >,
    Omit<LabelWithInputProps, 'inputStyle'> {
  onChange?: (value?: string) => void;
  onClick?: InputWrapProps['onClick'];
  value?: string;
  validation?: ValidateHandler<TextareaProps['value']>;
  disabled?: boolean | 'read-only';
  inputStyle?: {
    resize?: boolean;
    height?: React.CSSProperties['height'];
  } & Pick<InputWrapProps, 'borderRadius' | 'width'> &
    UseTypographyClassNameParams;
  floatingActionName?: string;
  onFloatingActionClick?: () => void;
  validationTrigger?: ValidationTrigger;
  description?: InputWrapProps['description'];
  requireMessage?: string;
}

export const Textarea = ({
  placeholder = '',
  value: originalValue,
  onChange,
  disabled,
  validation,
  id,
  label,
  className,
  onClick,
  inputStyle,
  labelStyle,
  floatingActionName,
  onFloatingActionClick,
  validationTrigger,
  description,
  readOnly = false,
  requireMessage,
  maxLength,
  minLength,
}: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useSubscribedState(
    originalValue ?? '',
  );

  const { typographyClassName } = useTypographyClassName({
    fontSize: inputStyle?.fontSize,
    fontWeight: inputStyle?.fontWeight,
  });

  const { validationMessage, validateOnChange, validateOnBlur, isRequried } =
    useValidationMessage({
      key: label,
      validateHandler: validation,
      value: textareaValue,
      validationTrigger,
      requireMessage,
    });

  return (
    <Label.Container direction={labelStyle?.direction} className={className}>
      {label ? (
        <Label
          htmlFor={label}
          fontSize={labelStyle?.fontSize}
          fontWeight={labelStyle?.fontWeight}
          required={isRequried}
        >
          {label}
        </Label>
      ) : null}
      <Input.Wrap
        validationMessage={validationMessage}
        size="none"
        onClick={onClick}
        width={inputStyle?.width}
        borderRadius={inputStyle?.borderRadius}
        description={description}
        readOnly={readOnly}
      >
        {floatingActionName && (
          <div className={styles['floating-action-container']}>
            <Tag color="purple50" onClick={onFloatingActionClick}>
              {floatingActionName}
            </Tag>
          </div>
        )}

        <textarea
          id={id}
          name={label}
          value={textareaValue}
          placeholder={placeholder}
          style={{
            height: inputStyle?.height,
          }}
          onChange={({ target: { value } }) => {
            setTextareaValue?.(value);
            onChange?.(value);
            validateOnChange?.(value);
          }}
          disabled={!!disabled}
          className={cleanClassName(
            `${styles['textarea-content']} ${
              (inputStyle?.resize ?? true) && styles.resize
            } ${typographyClassName} ${readOnly && [styles['read-only']]} ${
              styles['full-size']
            } ${styles.textarea}`,
          )}
          onBlur={validateOnBlur}
          readOnly={readOnly}
          minLength={minLength}
          maxLength={maxLength}
        />
      </Input.Wrap>
    </Label.Container>
  );
};
