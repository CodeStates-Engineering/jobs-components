import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import styles from './index.module.scss';

export type LabelProps = Partial<
  Pick<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    'children' | 'htmlFor'
  >
>;

export const Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className={styles.label}>
    {children}
  </label>
);
