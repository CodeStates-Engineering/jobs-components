import { useRef } from 'react';
import { X, Paperclip } from 'react-feather';

import { Button, Label, Input } from '@components/atoms';
import type {
  InputProps,
  InputWrapProps,
  LabelWithInputProps,
} from '@components/atoms';
import {
  useSubscribedState,
  useTypographyClassName,
  useValidationMessage,
  useValidationMessageDynamicHeight,
} from '@hooks';
import type { ValidateHandler, UseTypographyClassNameParams } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

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
  } & Pick<InputWrapProps, 'borderRadius' | 'width'> &
    UseTypographyClassNameParams;
  description?: InputWrapProps['description'];
  requireMessage?: string;
}

const getIconSizeBy = (size: 'small' | 'medium' | 'large' | undefined) => {
  switch (size) {
    case 'small':
      return 16;
    case 'medium':
    case 'large':
      return 18;
    default:
      return undefined;
  }
};

export const File = ({
  children,
  value,
  onChange,
  className,
  download = true,
  disabled = false,
  accept,
  validation,
  label,
  id,
  labelStyle,
  inputStyle,
  description,
  readOnly,
  requireMessage,
}: FileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [savedFile, setSavedFile] = useSubscribedState(value);

  const { typographyClassName } = useTypographyClassName({
    fontSize: inputStyle?.fontSize,
    fontWeight: inputStyle?.fontWeight,
  });

  const isClosable = !disabled && !readOnly;

  const { validationMessage, validateOnChange, isRequried } =
    useValidationMessage({
      key: label,
      value: savedFile,
      validateHandler: validation,
      validationTrigger: 'onChange',
      requireMessage,
    });

  const { messageRef, wrapHeightStyle } = useValidationMessageDynamicHeight(
    !!validationMessage || !!description,
  );

  return (
    <Label.WithInput
      className={className}
      label={label}
      inputStyle={inputStyle}
      labelStyle={labelStyle}
      required={isRequried}
    >
      <input
        type="file"
        id={id}
        className={styles['file-input']}
        ref={inputRef}
        accept={accept}
        disabled={!!disabled}
        onChange={({ target: { files } }) => {
          const file = files?.[0];
          if (file) {
            const savedFile = {
              name: file.name,
              url: URL.createObjectURL(file),
            };
            onChange?.(file);
            validateOnChange?.(savedFile);
            setSavedFile?.(savedFile);
          }
        }}
      />
      {savedFile ? (
        <>
          <Input.Wrap
            validationMessage={validationMessage}
            borderRadius={inputStyle?.borderRadius}
            size={inputStyle?.size}
            width={inputStyle?.width}
            description={description}
            readOnly={readOnly}
          >
            <Paperclip size={getIconSizeBy(inputStyle?.size)} />
            <a
              target="_blank"
              href={!disabled ? savedFile?.url : undefined}
              className={cleanClassName(
                `${styles['download-link']} ${typographyClassName} ${
                  !disabled ? styles.actived : styles.disabled
                }
                `,
              )}
              download={download}
              rel="noreferrer"
            >
              {savedFile?.name}
            </a>
            {isClosable && (
              <Button
                icon={<X size="1em" />}
                size="small3x"
                shape="pill"
                variant="ghost"
                color="bluishGray700"
                onClick={() => {
                  setSavedFile?.(undefined);
                  onChange?.(undefined);
                  const { current } = inputRef;
                  if (current) {
                    current.value = '';
                  }
                }}
              />
            )}
          </Input.Wrap>
        </>
      ) : (
        <div
          className={styles['upload-button-wrap']}
          style={{
            width: inputStyle?.width,
          }}
        >
          <Button
            size={inputStyle?.size}
            className={styles['upload-button']}
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
            disabled={!!disabled}
            color="bluishGray400"
            onClick={() => inputRef.current?.click()}
            width={inputStyle?.width}
          >
            {children}
          </Button>
          <div
            className={`${styles['description-wrap']} ${
              validationMessage && styles['validation-message-wrap']
            }`}
            style={wrapHeightStyle}
          >
            <p
              ref={messageRef}
              className={`${styles.description} ${
                validationMessage && styles['validation-message']
              }`}
            >
              {validationMessage || description}
            </p>
          </div>
        </div>
      )}
    </Label.WithInput>
  );
};
