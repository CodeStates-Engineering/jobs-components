import styles from './index.module.scss';
import { useTypography } from '../../../hooks';
import { Compatibility } from '../../../plugins';

import type { Typography } from '../../../hooks';
import type { CompatibleLinkProps } from '../../../plugins';

export type LinkProps = Omit<CompatibleLinkProps, 'className'> & {
  color?: 'puple-550' | 'puple-600' | 'bluish-gray-800';
  hoverType?: 'underline' | 'color-change';
} & Typography;

export const Link = ({
  color = 'puple-550',
  hoverType = 'underline',
  fontSize,
  fontWeight,
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
