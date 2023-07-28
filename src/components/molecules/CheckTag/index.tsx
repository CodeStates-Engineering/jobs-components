import { Check } from 'react-feather';

import { Button } from '@components/atoms';
import { useSubscribedState } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface CheckTagProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  children?: React.ReactNode;
}

export const CheckTag = ({
  value = false,
  onChange,
  children,
}: CheckTagProps) => {
  const [checked, setChecked] = useSubscribedState(value);

  return (
    <Button
      className={styles.padding}
      size="small2x"
      theme={
        checked
          ? 'purple550/purple50/purple100'
          : 'bluish-gray700/0/bluish-gray200'
      }
      iconDirection="right"
      fontSize="small3x"
      fontWeight={500}
      padding={false}
      shape="4"
      onClick={() => {
        const newValue = !checked;
        setChecked(newValue);
        onChange?.(newValue);
      }}
    >
      <div className={styles['children-container']}>
        {children}
        <Check
          className={cleanClassName(
            `${styles['check-icon']} ${checked || styles.hidden}`,
          )}
        />
      </div>
    </Button>
  );
};
