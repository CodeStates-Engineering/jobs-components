import { useRef } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Button, InputContainer, Label } from '../../atoms';

import type { Validation } from '../../../hooks';
import type { ButtonProps, InputProps } from '../../atoms';

interface SavedFile {
  name: string;
  url: string;
}

export interface FileProps
  extends Pick<ButtonProps, 'size' | 'fontSize' | 'fontWeight' | 'className'> {
  children?: React.ReactNode;
  value?: SavedFile;
  onChange?: (file?: File) => void;
  download?: boolean;
  disabled?: InputProps['disabled'];
  accept?: string;
  validation?: Validation<FileProps['value']>;
  validationSpace?: boolean;
  label?: string;
  id?: string;
}

export const File = ({
  children,
  size,
  value,
  onChange,
  fontWeight,
  fontSize,
  className,
  download = true,
  disabled = false,
  accept,
  validation,
  validationSpace,
  label,
  id,
}: FileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [savedFile, setSavedFile] = useComponentSelfState(value, false, [
    value?.name,
    value?.url,
  ]);

  const isDownloadActived = disabled !== true;

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  const FileInput = (
    <input
      type="file"
      className={styles['file-input']}
      ref={inputRef}
      accept={accept}
      disabled={!!disabled}
      onChange={({ target: { files } }) => {
        const file = files?.[0];
        if (file) {
          const savedFile = { name: file.name, url: URL.createObjectURL(file) };
          onChange?.(file);
          checkValidation?.(savedFile);
          setSavedFile?.(savedFile);
        }
      }}
    />
  );

  return (
    <div
      className={cleanClassName(
        `${styles['download-link-container']} ${className}`,
      )}
    >
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      {savedFile ? (
        <InputContainer
          validationMessage={validationMessage}
          validationSpace={validationSpace}
        >
          <InputContainer.Interaction
            className={styles['download-link-interaction']}
          >
            <a
              href={isDownloadActived ? savedFile?.url : undefined}
              className={cleanClassName(
                `${styles['download-link']} ${
                  isDownloadActived ? styles.actived : styles.disabled
                }`,
              )}
              download={download}
            >
              {savedFile?.name}
            </a>
            {disabled ? (
              FileInput
            ) : (
              <Button
                icon={<X />}
                size="small"
                shape="round"
                theme="bluish-gray700/0"
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
          </InputContainer.Interaction>
        </InputContainer>
      ) : (
        <Button
          size={size}
          className={styles['upload-button']}
          fontSize={fontSize}
          fontWeight={fontWeight}
          disabled={!!disabled}
          theme="bluish-gray400/bluish-gray10/bluish-gray200"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          {children}
          {disabled ? null : FileInput}
        </Button>
      )}
    </div>
  );
};
