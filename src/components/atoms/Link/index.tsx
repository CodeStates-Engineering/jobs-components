import type { MouseEventHandler, TouchEventHandler } from 'react';

import styles from './index.module.scss';
import { useTypography } from '../../../hooks';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

import type { Typography } from '../../../hooks';
import type { CompatibleLinkProps } from '../../../plugins';

type LinkTypeElement = HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement;

export type LinkProps = Omit<CompatibleLinkProps, 'className'> & {
  color?: 'puple-550' | 'puple-600' | 'bluish-gray-700' | 'bluish-gray-800';
  hoverType?: 'underline' | 'color-change';
  type?: 'button' | 'link' | 'span';
  onMouseEnter?: MouseEventHandler<LinkTypeElement>;
  onClick?: MouseEventHandler<LinkTypeElement>;
  onTouchStart?: TouchEventHandler<LinkTypeElement>;
  className?: string;
} & Typography;

export const Link = ({
  color = 'puple-550',
  hoverType = 'underline',
  fontSize,
  fontWeight,
  to = '#',
  replace,
  type = 'link',
  className,
  ...restProps
}: LinkProps) => {
  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );

  const commonProps = {
    ...restProps,
    className: cleanClassName(
      `${styles.link} ${styles[`color-${color}`]} ${
        styles[`hover-type-${hoverType}`]
      } ${styles[fontSizeClassName]} ${
        styles[fontWeightClassName]
      } ${className}`,
    ),
  };

  return {
    button: <button {...commonProps} />,
    link: <Compatibility.Link {...commonProps} to={to} replace={replace} />,
    span: <span {...commonProps} />,
  }[type];
};
