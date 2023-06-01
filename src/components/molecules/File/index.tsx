import { useRef } from 'react';
import { X } from 'react-feather';

import styles from './index.module.scss';
import {
  useSubscribedState,
  useTypography,
  useValidation,
} from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Button, Label, Input } from '../../atoms';

import type { Validation, Typography } from '../../../hooks';
import type {
  ButtonProps,
  InputProps,
  InputWrapProps,
  LabelContainerProps,
} from '../../atoms';

interface SavedFile {
  name: string;
  url: string;
}

export interface FileProps extends Pick<ButtonProps, 'className'> {
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
  inputStyle?: {
    size?: 'small' | 'medium' | 'large';
  } & Pick<InputWrapProps, 'borderRadius' | 'width'> &
    Typography;
  labelStyle?: Pick<LabelContainerProps, 'direction'> & Typography;
}

export const File = ({
  children,
  value,
  onChange,
  className,
  download = true,
  disabled = false,
  accept,
  validation,
  validationSpace,
  label,
  id,
  labelStyle,
  inputStyle,
}: FileProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [savedFile, setSavedFile] = useSubscribedState(value, false, [
    value?.name,
    value?.url,
  ]);

  const { fontSizeClassName, fontWeightClassName } = useTypography(
    inputStyle?.fontSize,
    inputStyle?.fontWeight,
  );

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
        {savedFile ? (
          <Input.Wrap
            borderRadius={inputStyle?.borderRadius}
            className={styles['download-link-interaction']}
            size={inputStyle?.size}
            width={inputStyle?.width}
          >
            <a
              href={isDownloadActived ? savedFile?.url : undefined}
              className={cleanClassName(
                `${styles['download-link']} ${styles[fontSizeClassName]} ${
                  styles[fontWeightClassName]
                } ${isDownloadActived ? styles.actived : styles.disabled}`,
              )}
              download={download}
            >
              {savedFile?.name}
            </a>
            {disabled ? (
              FileInput
            ) : (
              <Button
                icon={<X size="1em" />}
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
          </Input.Wrap>
        ) : (
          <Button
            size={inputStyle?.size}
            className={styles['upload-button']}
            fontSize={inputStyle?.fontSize}
            fontWeight={inputStyle?.fontWeight}
            disabled={!!disabled}
            theme="bluish-gray400/bluish-gray10/bluish-gray200"
            onClick={() => inputRef.current?.click()}
            width={inputStyle?.width}
          >
            {children}
            {disabled ? null : FileInput}
          </Button>
        )}
      </Label.Container>
    </Input.Container>
  );
};
