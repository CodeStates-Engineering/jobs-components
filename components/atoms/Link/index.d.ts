import type { AnchorHTMLAttributes, MouseEventHandler, TouchEventHandler } from 'react';
import type { Typography } from '../../../hooks';
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
} & Typography;
export declare const Link: ({ color, hoverType, fontSize, fontWeight, to, replace, type, className, children, target, ...restProps }: LinkProps) => JSX.Element;
export {};
