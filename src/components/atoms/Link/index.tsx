import { useTypography } from '@hooks';
import type { Typography } from '@hooks';
import { Compatibility } from '@plugins';
import type { CompatibleLinkProps } from '@plugins';

import styles from './index.module.scss';

export type LinkProps = Omit<CompatibleLinkProps, 'className'> & {
  color?: 'puple-550' | 'puple-600' | 'bluish-gray-800';
  hoverType?: 'underline' | 'color-change';
} & Typography;

export const Link = ({
  color = 'puple-550',
  hoverType = 'underline',
  fontSize = 'normal',
  fontWeight = 400,
  ...restProps
}: LinkProps) => {
  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );
  return (
    <Compatibility.Link
      {...restProps}
      className={`${styles.link} ${styles[`color-${color}`]} ${
        styles[`hover-type-${hoverType}`]
      } ${styles[fontSizeClassName]} ${styles[fontWeightClassName]}`}
    />
  );
};
