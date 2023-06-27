import type {
  AnchorHTMLAttributes,
  MouseEventHandler,
  TouchEventHandler,
} from 'react';

import { useTypographyClassName } from '@hooks';
import type { UseTypographyClassNameParams } from '@hooks';
import { Compatibility } from '@plugins';
import type { CompatibleLinkProps } from '@plugins';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

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
} & UseTypographyClassNameParams;

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
  const { typographyClassName } = useTypographyClassName({
    fontSize,
    fontWeight,
  });

  const commonProps = {
    ...restProps,
    children,
    className: cleanClassName(
      `${styles.link} ${styles[`color-${color}`]} ${
        hoverType !== 'none' && styles[`hover-type-${hoverType}`]
      } ${typographyClassName} ${className}`,
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
