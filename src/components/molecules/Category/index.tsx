import { Button } from 'components/atoms';
import { Compatibility } from 'plugins';

import styles from './index.module.scss';

interface CategoryItem {
  label: string;
  to: string;
}

export interface CategoryProps {
  items?: CategoryItem[];
}

export const Category = ({ items }: CategoryProps) => {
  const { pathname } = Compatibility.useLocation();
  return (
    <ul className={styles.category}>
      {items?.map(({ label, to }, index) => (
        <li key={index}>
          <Compatibility.Link to={to}>
            <Button
              shape="round"
              theme={to === pathname ? 'blue-600' : 'bluish-gray-800'}
            >
              {label}
            </Button>
          </Compatibility.Link>
        </li>
      ))}
    </ul>
  );
};
