import { Button } from 'components/atoms';
import { Compatibility } from 'plugins';

import styles from './index.module.scss';

import type { ButtonProps } from 'components/atoms';

interface CategoryItem {
  label: string;
  to: string;
}

export interface CategoryProps {
  items?: CategoryItem[];
  color?: ButtonProps['theme'];
  selectedColor?: ButtonProps['theme'];
}

export const Category = ({ items, color, selectedColor }: CategoryProps) => {
  const { pathname } = Compatibility.useLocation();
  return (
    <ul className={styles.category}>
      {items?.map(({ label, to }, index) => (
        <li key={index}>
          <Compatibility.Link to={to}>
            <Button
              themeType="ghost"
              theme={to === pathname ? color : selectedColor}
            >
              {label}
            </Button>
          </Compatibility.Link>
        </li>
      ))}
    </ul>
  );
};
