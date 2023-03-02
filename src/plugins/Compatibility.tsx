import type { LinkProps as NextLinkProps } from 'next/link';
import type { NextRouter } from 'next/router';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import type {
  LinkProps as ReactLinkProps,
  Location as ReactLocation,
} from 'react-router-dom';

export type CompatibleLinkProps = (NextLinkProps | ReactLinkProps) & {
  to: ReactLinkProps['to'];
  children: ReactLinkProps['children'];
  className?: ReactLinkProps['className'];
};

export type CompatibleLocation = ReactLocation | NextRouter;

type NextLinkComponent = (props: NextLinkProps) => JSX.Element;

export class Compatibility {
  public static Link = ({ to, ...restProps }: CompatibleLinkProps) => (
    <ReactLink {...restProps} to={to} />
  );

  public static useLocation: () => CompatibleLocation = useLocation;

  private static injectUseLocation = (useRouter: () => NextRouter) => {
    this.useLocation = useRouter;
  };

  private static injectLink = (NextLink: NextLinkComponent) => {
    this.Link = function CompatibleLink({ to, ...restProps }) {
      return <NextLink {...restProps} href={to} />;
    };
  };

  public static injectDependencies = ({
    Link,
    useRouter,
  }: {
    Link: NextLinkComponent;
    useRouter: () => NextRouter;
  }) => {
    this.injectLink(Link);
    this.injectUseLocation(useRouter);
  };
}
