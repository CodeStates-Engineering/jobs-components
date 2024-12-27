import type { AnchorHTMLAttributes, MouseEventHandler, TouchEventHandler } from '../../../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import type { UseTypographyClassNameParams } from '../../../hooks';
import type { CompatibleLinkProps } from '../../../plugins';
type LinkTypeElement = HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement;
export type LinkProps = Omit<CompatibleLinkProps, 'className' | 'children' | 'to'> & {
    color?: 'puple-550' | 'puple-600' | 'bluish-gray-600' | 'bluish-gray-700' | 'bluish-gray-800';
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
/**
 * @deprecated Next, React에 내장된 Anchor 확장 컴포넌트를 사용하세요.
 */
export declare const Link: ({ color, hoverType, fontSize, fontWeight, to, replace, type, className, children, target, ...restProps }: LinkProps) => import('../../../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime').JSX.Element;
export {};
