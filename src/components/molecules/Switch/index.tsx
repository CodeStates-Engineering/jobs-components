import { Label } from '@components/atoms';
import type { LabelContainerProps } from '@components/atoms';
import { useSubscribedState } from '@hooks';
import type { Typography } from '@hooks';
import { getLabelSpace } from '@utils';

import styles from './index.module.scss';

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
    containerSize?: 'none' | 'small' | 'medium' | 'large';
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

  const sizeClassName = styles[`size-${inputStyle?.size ?? 'medium'}`];
  const turnedClassName = turned ? styles.on : styles.off;

  const labelSpace = getLabelSpace(
    labelStyle?.direction,
    inputStyle?.containerSize,
  );

  return (
    <Label.Container direction={labelStyle?.direction} className={className}>
      {label ? (
        <Label
          htmlFor={label}
          fontSize={labelStyle?.fontSize}
          fontWeight={labelStyle?.fontWeight}
          space={labelSpace}
        >
          {label}
        </Label>
      ) : null}
      <div
        style={{
          width: inputStyle?.width,
        }}
        className={`${styles['switch-container']} ${
          styles[`container-size-${inputStyle?.containerSize ?? labelSpace}`]
        }`}
      >
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
