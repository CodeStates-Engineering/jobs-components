import { Check } from 'react-feather';

import { Button } from '@components/atoms';
import { useSubscribedState } from '@hooks';

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
  const isForClose = false;

  return (
    <Button
      className={styles.padding}
      size="small2x"
      theme={
        checked
          ? 'purple550/purple50/purple100'
          : 'bluish-gray700/0/bluish-gray200'
      }
      icon={checked ? <Check size={9} strokeWidth={4} /> : undefined}
      iconDirection="right"
      fontSize="small3x"
      fontWeight={500}
      padding={false}
      shape="4"
      onClick={
        isForClose
          ? undefined
          : () => {
              const newValue = !checked;
              setChecked(newValue);
              onChange?.(newValue);
            }
      }
    >
      {children}
    </Button>
  );
};
