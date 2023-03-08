import type { LinkProps as NextLinkProps } from 'next/link';
import type NextLink from 'next/link';
import type { useRouter as useNextRouter } from 'next/router';
import { useLayoutEffect, useEffect } from 'react';
import type {
  Link as ReactLink,
  LinkProps as ReactLinkProps,
  useLocation as useReactLocation,
} from 'react-router-dom';

import { generateQueryStringToObject } from '../utils';

import type { QueryStringObject } from '../utils';

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

type CompatibleLocationReturnType = (
  | ReturnType<UseNextRouter>
  | ReturnType<UseReactLocation>
) & {
  query: QueryStringObject;
};

export class Compatibility {
  public static Link: (props: CompatibleLinkProps) => JSX.Element;

  public static useLocation: () => CompatibleLocationReturnType;

  public static useLayoutEffect = useLayoutEffect;

  public static injectDependencies = <_Type extends Libraries>(
    type: _Type,
    { location, link }: Dependencies<_Type>,
  ) => {
    switch (type) {
      case 'next': {
        const NextLink = link as NextLinkComponent;
        const getRouter = location as UseNextRouter;
        this.Link = function Link({ to, ...restProps }: CompatibleLinkProps) {
          return <NextLink {...restProps} href={to} />;
        };
        this.useLocation = () => {
          const router = getRouter();
          return {
            ...router,
            pathname: router.asPath,
          };
        };
        this.useLayoutEffect = useEffect;
        break;
      }
      case 'react': {
        const ReactLink = link as ReactLinkComponent;
        const getLocation = location as UseReactLocation;
        this.Link = function Link(props: CompatibleLinkProps) {
          return <ReactLink {...props} />;
        };
        this.useLocation = () => {
          const location = getLocation();
          return {
            ...location,
            query: generateQueryStringToObject(location.search),
          };
        };
        break;
      }

      default:
        break;
    }
  };
}
