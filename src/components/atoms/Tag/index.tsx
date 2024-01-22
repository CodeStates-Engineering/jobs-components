import type { Variant } from '@type/variant';
import { cleanClassName } from '@utils';

import scss from './index.module.scss';

export interface TagProps {
  children?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  variant: Variant;
  color?: 'purple-500';
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}
export const Tag = ({
  variant = 'filled',
  color = 'purple-500',
  size = 'medium',
  className,
  ...tagProps
}: TagProps) => {
  const classNames = cleanClassName(`
  ${scss.tag}
  ${scss[`${variant}`]}
  ${scss[`${color}`]}
  ${className}
  ${scss[`${size}`]}
  `);
  return <div {...tagProps} className={classNames} />;
};
