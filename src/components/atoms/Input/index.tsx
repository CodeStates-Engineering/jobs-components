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
}

export const Input = ({
  width = '100%',
  placeholder = 'Placeholder',
  ...inputProps
}: InputProps) => (
  <input
    {...inputProps}
    placeholder={placeholder}
    style={{ width }}
    className={styles.input}
  />
);
