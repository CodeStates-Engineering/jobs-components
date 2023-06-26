import type { LinkProps as NextLinkProps } from 'next/link';
import type NextLink from 'next/link';
import type { useRouter as useNextRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import type { Link as ReactLink, LinkProps as ReactLinkProps, useLocation as useReactLocation } from 'react-router-dom';
export type CompatibleLinkProps = (NextLinkProps | ReactLinkProps) & {
    to: ReactLinkProps['to'];
    children: ReactLinkProps['children'];
    className?: ReactLinkProps['className'];
};
type NextLinkComponent = typeof NextLink;
type ReactLinkComponent = typeof ReactLink;
type UseNextRouter = typeof useNextRouter;
type UseReactLocation = typeof useReactLocation;
type Libraries = 'next' | 'react';
interface Dependencies<_Type extends Libraries> {
    location: _Type extends 'next' ? UseNextRouter : UseReactLocation;
    link: _Type extends 'next' ? NextLinkComponent : ReactLinkComponent;
}
type CompatibleLocationReturnType = (ReturnType<UseNextRouter> | ReturnType<UseReactLocation>) & {
    search: string;
};
export declare class Compatibility {
    static Link: (props: CompatibleLinkProps) => JSX.Element;
    static useLocation: () => CompatibleLocationReturnType;
    static useLayoutEffect: typeof useLayoutEffect;
    static injectDependencies: <_Type extends Libraries>(type: _Type, { location, link }: Dependencies<_Type>) => void;
}
export {};
