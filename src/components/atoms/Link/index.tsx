import type {
  AnchorHTMLAttributes,
  MouseEventHandler,
  TouchEventHandler,
} from 'react';

import styles from './index.module.scss';
import { useTypography } from '../../../hooks';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

import type { Typography } from '../../../hooks';
import type { CompatibleLinkProps } from '../../../plugins';

type LinkTypeElement = HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement;

export type LinkProps = Omit<
  CompatibleLinkProps,
  'className' | 'children' | 'to'
> & {
  color?:
    | 'puple-550'
    | 'puple-600'
    | 'bluish-gray-600'
    | 'bluish-gray-700'
    | 'bluish-gray-800';

  hoverType?: 'underline' | 'color-change' | 'none';
  type?: 'button' | 'link' | 'span';
  onMouseEnter?: MouseEventHandler<LinkTypeElement>;
  onClick?: MouseEventHandler<LinkTypeElement>;
  className?: string;
  onTouchStart?: TouchEventHandler<LinkTypeElement>;
  children?: React.ReactNode;
  to?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
} & Typography;

export const Link = ({
  color = 'puple-550',
  hoverType = 'underline',
  fontSize,
  fontWeight,
  to,
  replace,
  type = 'link',
  className,
  children = <></>,
  target,
  ...restProps
}: LinkProps) => {
  const { fontSizeClassName, fontWeightClassName } = useTypography(
    fontSize,
    fontWeight,
  );

  const commonProps = {
    ...restProps,
    children,
    className: cleanClassName(
      `${styles.link} ${styles[`color-${color}`]} ${
        hoverType !== 'none' && styles[`hover-type-${hoverType}`]
      } ${styles[fontSizeClassName]} ${
        styles[fontWeightClassName]
      } ${className}`,
    ),
  };

  switch (type) {
    case 'button':
      return <button {...commonProps} />;
    case 'span':
      return <span {...commonProps} />;
    default: {
      const linkProps = {
        ...commonProps,
        target,
      };
      return to ? (
        <Compatibility.Link {...linkProps} to={to} replace={replace} />
      ) : (
        <a {...linkProps} />
      );
    }
  }
};
