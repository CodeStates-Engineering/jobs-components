import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export type LabelProps = Partial<
  Pick<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    'children' | 'htmlFor' | 'className'
  >
>;

export const Label = ({ children, htmlFor, className }: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className={cleanClassName(`${styles.label} ${className}`)}
  >
    {children}
  </label>
);
