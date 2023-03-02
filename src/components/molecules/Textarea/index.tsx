import { InputContainer, Label } from 'components/atoms';
import { useComponentSelfState, useValidation } from 'hooks';
import { cleanClassName } from 'utils';

import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import styles from './index.module.scss';

import type { InputContainerProps } from 'components/atoms';
import type { Validation } from 'hooks';

export type TextareaProps = Partial<
  Pick<InputContainerProps, 'width'> &
    Pick<
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      'placeholder' | 'disabled' | 'id'
    >
> & {
  resize?: boolean;
  onlyUpdatedByParent?: boolean;
  onChange?: (value?: string) => void;
  value?: string;
  height?: React.CSSProperties['height'];
  validation?: Validation<TextareaProps['value']>;
  label?: string;
};

export const Textarea = ({
  width = '500px',
  height = '300px',
  placeholder = 'Placeholder',
  value: originalValue,
  resize = true,
  onlyUpdatedByParent,
  onChange,
  disabled,
  validation,
  id,
  label,
}: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useComponentSelfState(
    originalValue,
    onlyUpdatedByParent,
  );

  const { validationMessage, checkValidation } = useValidation(
    textareaValue,
    validation,
    label,
  );

  return (
    <div style={{ width }}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        width="100%"
        size="none"
        validationMessage={validationMessage}
      >
        <textarea
          id={id}
          name={label}
          value={textareaValue}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setTextareaValue?.(value);
            onChange?.(value);
            checkValidation?.(value);
          }}
          disabled={disabled}
          style={{
            height,
          }}
          className={cleanClassName(
            `${styles.textarea} ${resize && styles.resize}`,
          )}
        />
      </InputContainer>
    </div>
  );
};
