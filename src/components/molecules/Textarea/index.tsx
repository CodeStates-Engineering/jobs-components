import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { InputContainer, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type { InputContainerProps } from '../../atoms';

export type TextareaProps = Partial<
  Omit<
    InputContainerProps,
    'size' | 'onClick' | 'children' | 'validationMessage'
  > &
    Pick<
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      'placeholder' | 'id'
    >
> & {
  resize?: boolean;
  onlyUpdatedByParent?: boolean;
  onChange?: (value?: string) => void;
  value?: string;
  validation?: Validation<TextareaProps['value']>;
  label?: string;
  validationSpace?: boolean;
  className?: string;
  disabled?: boolean | 'read-only';
  height?: React.CSSProperties['height'];
};

export const Textarea = ({
  placeholder = '',
  value: originalValue,
  resize = true,
  onlyUpdatedByParent,
  onChange,
  disabled,
  validation,
  id,
  label,
  validationSpace,
  className,
  height,
}: TextareaProps) => {
  const [textareaValue, setTextareaValue] = useComponentSelfState(
    originalValue ?? '',
    onlyUpdatedByParent,
  );

  const { validationMessage, checkValidation } = useValidation(
    textareaValue,
    validation,
    label,
  );

  return (
    <div className={cleanClassName(`${styles} ${className}`)}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <InputContainer
        validationMessage={validationMessage}
        validationSpace={validationSpace}
      >
        <InputContainer.Interaction size="none">
          <textarea
            id={id}
            name={label}
            value={textareaValue}
            placeholder={placeholder}
            style={{ height }}
            onChange={({ target: { value } }) => {
              setTextareaValue?.(value);
              onChange?.(value);
              checkValidation?.(value);
            }}
            disabled={!!disabled}
            className={cleanClassName(
              `${styles['textarea-content']} ${resize && styles.resize} ${
                disabled === 'read-only' && [styles['read-only']]
              } ${styles['full-size']}`,
            )}
          />
        </InputContainer.Interaction>
      </InputContainer>
    </div>
  );
};
