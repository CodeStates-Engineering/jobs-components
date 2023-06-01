import { useMemo } from 'react';
import { Check } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Label } from '../../atoms';

import type { Typography } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';

export interface SwitchProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  onlyUpdatedByParent?: boolean;
  label?: string;
  className?: string;
  labelStyle?: Typography & Pick<LabelContainerProps, 'direction'>;
  inputStyle?: {
    size?: 'small' | 'medium' | 'large';
    width?: CSSStyleDeclaration['width'];
  };
}

export const Switch = ({
  value = false,
  onChange,
  disabled,
  onlyUpdatedByParent,
  id,
  label,
  className,
  labelStyle,
  inputStyle,
}: SwitchProps) => {
  const [turned, setTurned] = useComponentSelfState(value, onlyUpdatedByParent);

  const style = useMemo(
    () => ({
      width: inputStyle?.width,
    }),
    [inputStyle?.width],
  );

  const sizeClassName = styles[`size-${inputStyle?.size ?? 'medium'}`];
  const turnedClassName = turned ? styles.on : styles.off;

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
      <div
        className={`${styles['switch-container']} ${sizeClassName} ${turnedClassName}`}
        style={style}
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
          }}
        />
      </div>
    </Label.Container>
  );
};
