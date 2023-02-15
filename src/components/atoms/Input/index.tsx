import { cleanClassName } from 'utils';

import styles from './index.module.scss';

export interface InputProps
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'value' | 'onChange' | 'placeholder' | 'onFocus' | 'type'
  > {
  width?: React.CSSProperties['width'];
  disabled?: boolean | 'readonly';
}

export const Input = ({
  width = '100%',
  placeholder = 'Placeholder',
  disabled = false,
  ...inputProps
}: InputProps) => (
  <input
    {...inputProps}
    disabled={!!disabled}
    placeholder={placeholder}
    style={{ width }}
    className={cleanClassName(
      `${styles.input} ${disabled === 'readonly' && styles.readonly}`,
    )}
  />
);
