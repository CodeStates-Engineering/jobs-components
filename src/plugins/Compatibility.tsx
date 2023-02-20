import type { LinkProps as NextLinkProps } from 'next/link';
import type { NextRouter } from 'next/router';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import type {
  LinkProps as ReactLinkProps,
  Location as ReactLocation,
} from 'react-router-dom';

type LinkProps = (NextLinkProps | ReactLinkProps) & {
  to: string;
};

type Location = ReactLocation | NextRouter;

type NextLinkComponent = (props: NextLinkProps) => JSX.Element;

export class Compatibility {
  public static Link = ({ to, ...restProps }: LinkProps) => (
    <ReactLink {...restProps} to={to} />
  );

  private static injectLink = (NextLink: NextLinkComponent) => {
    this.Link = function Link({ to, ...restProps }) {
      return <NextLink {...restProps} href={to} />;
    };
  };

  public static useLocation: () => Location = useLocation;

  private static injectUseLocation = (useRouter: () => NextRouter) => {
    this.useLocation = useRouter;
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
