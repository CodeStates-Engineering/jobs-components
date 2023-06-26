import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { useMemo } from 'react';

import {
  useSubscribedState,
  useTypographyClassName,
  useValidation,
} from '@hooks';
import type { Validation, UseTypographyClassNameParams } from '@hooks';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Input, Label } from '../../atoms';
import { Tag } from '../Tag';

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
  onChange?: (value?: string) => void;
  value?: string;
  validation?: Validation<TextareaProps['value']>;
  label?: string;
  className?: string;
  disabled?: boolean | 'read-only';
  inputStyle?: {
    resize?: boolean;
    height?: React.CSSProperties['height'];
  } & Pick<InputWrapProps, 'borderRadius' | 'width'> &
    UseTypographyClassNameParams;
  labelStyle?: Pick<LabelContainerProps, 'direction'> &
    UseTypographyClassNameParams;
  floatingActionName?: string;
  onFloatingActionClick?: () => void;
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
}: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useSubscribedState(
    originalValue ?? '',
  );

  const { typographyClassName } = useTypographyClassName({
    fontSize: inputStyle?.fontSize,
    fontWeight: inputStyle?.fontWeight,
  });

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
    <Label.Container direction={labelStyle?.direction} className={className}>
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
        validationMessage={validationMessage}
        size="none"
        onClick={onClick}
        width={inputStyle?.width}
        borderRadius={inputStyle?.borderRadius}
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
            } ${typographyClassName} ${
              disabled === 'read-only' && [styles['read-only']]
            } ${styles['full-size']}`,
          )}
        />
      </Input.Wrap>
    </Label.Container>
  );
};
