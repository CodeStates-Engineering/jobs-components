import { Button } from 'components/atoms';
import { Link, useLocation } from 'plugins';

import styles from './index.module.scss';

interface CategoryItem {
  label: string;
  to: string;
}

export interface CategoryProps {
  items?: CategoryItem[];
}

export const Category = ({ items }: CategoryProps) => {
  const { pathname } = useLocation();
  return (
    <ul className={styles.category}>
      {items?.map(({ label, to }, index) => (
        <li key={index}>
          <Link to={to}>
            <Button
              shape="round"
              theme={to === pathname ? 'blue-600' : 'bluish-gray-800'}
              width="fit-content"
            >
              {label}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
