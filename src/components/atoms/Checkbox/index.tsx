import { useComponentSelfState } from 'hooks';
import { cleanClassName } from 'utils';

import { Check } from 'react-feather';

import styles from './index.module.scss';

export interface CheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  disabled?: boolean;
  id?: string;
  onlyUpdatedByParent?: boolean;
  size?: 'small' | 'medium';
  essential?: boolean;
}

export const Checkbox = ({
  value = true,
  onChange,
  name,
  disabled,
  onlyUpdatedByParent,
  id,
  size = 'medium',
  essential,
}: CheckboxProps) => {
  const [checked, setChecked] = useComponentSelfState(
    value,
    onlyUpdatedByParent,
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

  return (
    <div
      className={cleanClassName(
        `${styles['checkbox-container']} ${styles[`size-${size}`]} ${
          essential && !checked && styles.invalid
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
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={({ target: { checked } }) => {
          setChecked?.(checked);
          onChange?.(checked);
        }}
      />
    </div>
  );
};
