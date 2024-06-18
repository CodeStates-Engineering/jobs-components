import { Check } from 'react-feather';

import { Button } from '@components/atoms';
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
}: CheckTagProps) => (
  <Button
    className={styles.padding}
    size="small2x"
    variant={value ? 'contained' : 'outlined'}
    color={value ? 'purple550' : 'bluishGray700'}
    iconDirection="right"
    fontSize="small3x"
    fontWeight={500}
    padding={false}
    shape="4"
    onClick={() => onChange?.(!value)}
  >
    <div className={styles['children-container']}>
      {children}
      <Check
        className={cleanClassName(
          `${styles['check-icon']} ${value || styles.hidden}`,
        )}
      />
    </div>
  </Button>
);
