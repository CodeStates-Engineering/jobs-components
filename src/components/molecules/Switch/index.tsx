import { Label } from '@components/atoms';
import type { LabelWithInputProps } from '@components/atoms';
import { useSubscribedState } from '@hooks';

import styles from './index.module.scss';

export interface SwitchProps extends LabelWithInputProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
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
  readOnly,
  id,
  label,
  className,
  labelStyle,
  inputStyle,
}: SwitchProps) => {
  const [turned, setTurned] = useSubscribedState(value);

  const sizeClassName = styles[`size-${inputStyle?.size ?? 'medium'}`];
  const turnedClassName = turned ? styles.on : styles.off;

  return (
    <Label.WithInput
      inputStyle={{
        size: inputStyle?.containerSize,
      }}
      label={label}
      labelStyle={labelStyle}
      className={className}
    >
      <div
        style={{
          width: inputStyle?.width,
        }}
        className={`${styles['switch-container']} ${
          styles[
            `container-size-${
              inputStyle?.containerSize ?? labelStyle?.direction === 'row'
                ? inputStyle?.containerSize ?? 'large'
                : 'none'
            }`
          ]
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
              if (!readOnly) {
                setTurned?.(checked);
                onChange?.(checked);
              }
            }}
          />
        </div>
      </div>
    </Label.WithInput>
  );
};
