import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import { useTypographyClassName } from '@hooks';
import type { UseTypographyClassNameParams } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

import type { InputWrapProps } from '../Input';

export interface LabelProps
  extends Pick<
      DetailedHTMLProps<
        LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
      >,
      'children' | 'htmlFor' | 'className'
    >,
    UseTypographyClassNameParams {
  space?: 'none' | 'small' | 'medium' | 'large';
}

const LabelMain = ({
  children,
  htmlFor,
  className,
  fontSize = 'small',
  space = 'none',
  fontWeight = 500,
}: LabelProps) => {
  const { typographyClassName } = useTypographyClassName({
    fontSize,
    fontWeight,
  });
  return (
    <label
      htmlFor={htmlFor}
      className={cleanClassName(
        `${styles.label} ${
          styles[`space-${space}`]
        } ${typographyClassName} ${className}`,
      )}
    >
      {children}
    </label>
  );
};

export interface LabelContainerProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'column' | 'row';
}

const LabelContainer = ({
  children,
  className,
  direction = 'column',
}: LabelContainerProps) => (
  <div
    className={cleanClassName(
      `${styles['label-container']} ${styles[direction]} ${className}`,
    )}
  >
    {children}
  </div>
);

export interface LabelWithInputProps {
  className?: string;
  label?: string;
  labelStyle?: Pick<LabelContainerProps, 'direction'> &
    UseTypographyClassNameParams;
  inputStyle?: Pick<InputWrapProps, 'size'>;
  children?: React.ReactNode;
  required?: boolean;
}

const LabelWithInput = ({
  className,
  label,
  labelStyle,
  inputStyle,
  children,
  required = true,
}: LabelWithInputProps) => (
  <LabelContainer direction={labelStyle?.direction} className={className}>
    {label ? (
      <LabelMain
        fontSize={labelStyle?.fontSize}
        fontWeight={labelStyle?.fontWeight}
        space={
          labelStyle?.direction === 'row' ? inputStyle?.size ?? 'large' : 'none'
        }
        htmlFor={label}
      >
        {label}
        {required ? <span className={styles['require-mark']}>*</span> : null}
      </LabelMain>
    ) : null}
    {children}
  </LabelContainer>
);

export const Label = Object.assign(LabelMain, {
  Container: LabelContainer,
  WithInput: LabelWithInput,
});
