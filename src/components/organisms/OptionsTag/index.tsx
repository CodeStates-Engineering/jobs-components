import { Button, Options } from '@components/atoms';
import type { ButtonProps, OptionsProps } from '@components/atoms';
import { useClosableOnClickOpeningState } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface OptionsTagProps
  extends Pick<ButtonProps, 'icon' | 'className'>,
    Pick<OptionsProps<string, false>, 'onChange' | 'value' | 'textEllipsis'> {
  options?: {
    label: string;
    value: string;
    default?: boolean;
  }[];
}

export const OptionsTag = ({
  icon,
  value,
  onChange,
  options,
  className,
  textEllipsis,
}: OptionsTagProps) => {
  const {
    openingState: [opened, setOpened],
    setClosableOnClick,
  } = useClosableOnClickOpeningState();

  const isDefault =
    options?.find(({ default: isDefault }) => isDefault)?.value === value;

  return (
    <div
      className={cleanClassName(
        `${styles['dropdown-tag-container']} ${className}`,
      )}
      onMouseEnter={() => {
        setClosableOnClick(false);
      }}
      onMouseLeave={() => {
        setClosableOnClick(true);
      }}
    >
      <Button
        className={cleanClassName(
          `${styles.padding} ${isDefault && styles['default-value']}`,
        )}
        size="small2x"
        theme={
          isDefault
            ? 'bluish-gray700/0/bluish-gray200'
            : 'purple550/purple50/purple100'
        }
        iconDirection="left"
        fontSize="small3x"
        fontWeight={500}
        padding={false}
        shape="4"
        icon={icon}
        onClick={() => setOpened((prev) => !prev)}
      >
        {value}
      </Button>
      <Options
        opened={opened}
        options={options?.map(({ label, value }) => ({ label, value }))}
        cancelable={false}
        onChange={(value) => {
          setOpened(false);
          onChange?.(value ?? '');
        }}
        className={styles.options}
        textEllipsis={textEllipsis}
      />
    </div>
  );
};
