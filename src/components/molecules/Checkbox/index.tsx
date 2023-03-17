import { useMemo } from 'react';
import { Check } from 'react-feather';

import styles from './index.module.scss';
import { useComponentSelfState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Label } from '../../atoms';

export interface CheckboxProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  disabled?: boolean;
  id?: string;
  onlyUpdatedByParent?: boolean;
  size?: 'small' | 'medium';
  essential?: boolean;
  label?: string;
  description?: React.ReactNode;
  className?: string;
}

export const Checkbox = ({
  value = false,
  onChange,
  disabled,
  onlyUpdatedByParent,
  id,
  size = 'medium',
  essential,
  label,
  description,
  className,
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
    <div className={cleanClassName(className)}>
      {label ? <Label htmlFor={label}>{label}</Label> : null}
      <div className={styles['checkbox-container-wrap']}>
        <div
          className={cleanClassName(
            `${styles['checkbox-container']} ${styles[`size-${size}`]} ${
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
    </div>
  );
};
