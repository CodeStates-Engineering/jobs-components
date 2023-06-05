import { useMemo } from 'react';

import styles from './index.module.scss';
import { useSubscribedState } from '../../../hooks';
import { Label } from '../../atoms';

import type { Typography } from '../../../hooks';
import type { LabelContainerProps } from '../../atoms';

export interface SwitchProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;

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
  id,
  label,
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
            }}
          />
        </div>
      </div>
    </Label.Container>
  );
};
