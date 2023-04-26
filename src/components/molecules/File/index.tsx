import { useRef } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Button, InputContainer } from '../../atoms';

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
}: FileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [savedFile, setSavedFile] = useComponentSelfState(value, false, [
    value?.name,
    value?.url,
  ]);

  const isDownloadActived = disabled !== true;

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
          onChange?.(file);
          setSavedFile?.(
            file && { name: file.name, url: URL.createObjectURL(file) },
          );
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
      {savedFile ? (
        <InputContainer className={styles['download-link-container']}>
          {disabled ? FileInput : null}
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
          {disabled ? null : (
            <Button
              icon={<X />}
              size="small"
              themeType="ghost"
              shape="round"
              theme="bluish-gray-800"
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
        </InputContainer>
      ) : (
        <Button
          size={size}
          className={styles['upload-button']}
          fontSize={fontSize}
          fontWeight={fontWeight}
          disabled={!!disabled}
          theme="bluish-gray-800"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          {children}
        </Button>
      )}
      {disabled ? null : FileInput}
    </div>
  );
};
