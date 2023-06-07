import { useMemo } from 'react';
import { Check } from 'react-feather';

import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Label } from '../../atoms';

import type { Typography } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';

export interface CheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  disabled?: boolean;
  id?: string;

  essential?: boolean;
  label?: string;
  description?: React.ReactNode;
  className?: string;
  labelStyle?: Typography & Pick<LabelContainerProps, 'direction'>;
  inputStyle?: {
    size?: 'small' | 'medium';
    width?: CSSStyleDeclaration['width'];
    containerSize?: 'none' | 'small' | 'medium' | 'large';
  };
}

export const Checkbox = ({
  value = false,
  onChange,
  disabled,
  id,
  essential,
  label,
  description,
  className,
  labelStyle,
  inputStyle,
}: CheckboxProps) => {
  const [checked, setChecked] = useSubscribedState(value);

  const size = inputStyle?.size ?? 'medium';
  const style = useMemo(
    () => ({
      width: inputStyle?.width,
    }),
    [inputStyle?.width],
  );

  const checkIconSize = {
    small: {
      size: '10px',
      strokeWidth: '4px',
    },
    medium: {
      size: '17px',
      strokeWidth: '3px',
    },
  }[size];

  const essentialValidation = useMemo(
    () =>
      essential
        ? (checked: boolean) => (checked ? undefined : 'invalid')
        : undefined,
    [essential],
  );

  const { validationMessage, checkValidation } = useValidation(
    checked,
    essentialValidation,
    label || id,
  );

  const isValid = !validationMessage;

  return (
    <Label.Container
      direction={labelStyle?.direction}
      className={`${
        styles[`container-size-${inputStyle?.containerSize ?? 'none'}`]
      } ${className}`}
    >
      {label ? (
        <Label
          htmlFor={label}
          fontSize={labelStyle?.fontSize}
          fontWeight={labelStyle?.fontWeight}
        >
          {label}
        </Label>
      ) : null}
      <div className={styles['checkbox-container-wrap']}>
        <div className="checkbox-description-gap" style={style} />
        <div
          className={cleanClassName(
            `${styles['checkbox-content']} ${styles[`size-${size}`]} ${
              isValid || styles.invalid
            }`,
          )}
        >
          <Check
            {...checkIconSize}
            className={`${checked ? styles.checked : styles.unchecked}`}
          />
          <input
            id={id}
            type="checkbox"
            className={styles.checkbox}
            name={label}
            checked={checked}
            disabled={disabled}
            onChange={({ target: { checked } }) => {
              setChecked?.(checked);
              checkValidation?.(checked);
              onChange?.(checked);
            }}
          />
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
      {/* </div> */}
    </Label.Container>
  );
};
