import { Check, Minus } from 'react-feather';

import { Label } from '@components/atoms';
import type { LabelContainerProps } from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { UseTypographyClassNameParams, ValidationTrigger } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface CheckboxProps {
  value?: boolean | null;
  onChange?: (checked: boolean) => void;
  name?: string;
  disabled?: boolean;
  id?: string;
  essential?: boolean;
  label?: string;
  description?: React.ReactNode;
  className?: string;
  labelStyle?: UseTypographyClassNameParams &
    Pick<LabelContainerProps, 'direction'>;
  inputStyle?: {
    size?: 'small' | 'medium' | 'large';
    isRound?: boolean;
    width?: CSSStyleDeclaration['width'];
    containerSize?: 'none' | 'small' | 'medium' | 'large';
  };
  validationTrigger?: ValidationTrigger;
}

const validateEssential = (checked: boolean) =>
  checked ? undefined : 'invalid';

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
  validationTrigger,
}: CheckboxProps) => {
  const [checked, setChecked] = useSubscribedState(value);

  const isHalfChecked = checked === null;

  const size = inputStyle?.size ?? 'medium';

  const checkIconSize = {
    small: {
      size: '10px',
      strokeWidth: '4px',
    },
    medium: {
      size: '17px',
      strokeWidth: '3px',
    },
    large: {
      size: '22px',
      strokeWidth: '3px',
    },
  }[size];

  const { validationMessage, validateOnChange, validateOnBlur } =
    useValidationMessage({
      key: label,
      value: !!checked,
      validateHandler: essential ? validateEssential : undefined,
      validationTrigger,
    });

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
        <div
          className="checkbox-description-gap"
          style={{
            width: inputStyle?.width,
          }}
        />
        <div
          className={cleanClassName(
            `${styles['checkbox-content']} ${styles[`size-${size}`]} ${
              isValid || styles.invalid
            } ${isHalfChecked && styles['half-checked']} ${
              inputStyle?.isRound && styles['is-round']
            }`,
          )}
        >
          {isHalfChecked ? (
            <Minus {...checkIconSize} color="white" />
          ) : (
            <Check
              {...checkIconSize}
              className={`${checked ? styles.checked : styles.unchecked}`}
            />
          )}

          <input
            id={id}
            type="checkbox"
            className={styles.checkbox}
            name={label}
            checked={!!checked}
            disabled={disabled}
            onChange={({ target: { checked } }) => {
              setChecked?.(checked);
              validateOnChange?.(checked);
              onChange?.(checked);
            }}
            onBlur={validateOnBlur}
          />
        </div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
      {/* </div> */}
    </Label.Container>
  );
};
