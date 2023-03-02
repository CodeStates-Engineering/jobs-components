import { Link as CompatibleLink } from 'plugins';

import styles from './index.module.scss';

import type { LinkProps as CompatibleLinkProps } from 'plugins';

export type LinkProps = Omit<CompatibleLinkProps, 'className'> & {
  color?: 'puple-550' | 'puple-600';
};

export const Link = ({ color = 'puple-550', ...restProps }: LinkProps) => (
  <CompatibleLink
    {...restProps}
    className={`${styles.link} ${styles[`color-${color}`]}`}
  />
);
