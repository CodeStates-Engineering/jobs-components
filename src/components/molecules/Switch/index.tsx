import { useMemo } from 'react';

import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { Input, Label } from '../../atoms';

import type { Typography, Validation } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';

export interface SwitchProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;

  label?: string;
  validation?: Validation<SwitchProps['value']>;
  validationSpace: boolean;
  className?: string;
  labelStyle?: Typography & Pick<LabelContainerProps, 'direction'>;
  inputStyle?: {
    size?: 'small' | 'medium' | 'large';
    width?: CSSStyleDeclaration['width'];
    containerSize?: 'none' | 'small' | 'medium' | 'large';
  };
}

export const Switch = ({
  value = false,
  onChange,
  disabled,
  id,
  label,
  validation,
  validationSpace,
  className,
  labelStyle,
  inputStyle,
}: SwitchProps) => {
  const [turned, setTurned] = useSubscribedState(value);

  const style = useMemo(
    () => ({
      width: inputStyle?.width,
    }),
    [inputStyle?.width],
  );

  const sizeClassName = styles[`size-${inputStyle?.size ?? 'medium'}`];
  const turnedClassName = turned ? styles.on : styles.off;

  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    label || id,
  );

  return (
    <Input.Container
      validationMessage={validationMessage}
      validationSpace={validationSpace}
    >
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
        <div style={style} className={styles['switch-container']}>
          <div
            className={`${styles['switch-content']} ${sizeClassName} ${turnedClassName}`}
          >
            <div
              className={`${styles['switch-ball']} ${sizeClassName} ${turnedClassName}`}
            />
            <input
              id={id}
              type="checkbox"
              className={styles['switch-input']}
              name={label}
              checked={turned}
              disabled={disabled}
              onChange={({ target: { checked } }) => {
                setTurned?.(checked);
                onChange?.(checked);
                checkValidation?.(checked);
              }}
            />
          </div>
        </div>
      </Label.Container>
    </Input.Container>
  );
};
