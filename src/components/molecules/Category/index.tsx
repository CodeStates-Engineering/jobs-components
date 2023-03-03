import { Button, Hr } from 'components/atoms';
import { Compatibility } from 'plugins';

import type { CSSProperties } from 'react';

import styles from './index.module.scss';

import type { ButtonProps, HrProps } from 'components/atoms';

interface CategoryItem {
  label: string;
  to: string;
}

export interface CategoryProps {
  items?: CategoryItem[];
  color?: ButtonProps['theme'];
  bottomLineWeight?: HrProps['weight'];
  selectedColor?: ButtonProps['theme'];
  selectedLineWeight?: HrProps['weight'];
  selectedLineColor?: HrProps['color'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export const Category = ({
  items,
  color,
  selectedColor,
  bottomLineWeight,
  selectedLineWeight = 'medium',
  selectedLineColor = 'purple-550',
  width = '100%',
  height = '100%',
}: CategoryProps) => {
  selectedColor = selectedColor ?? color;
  const { pathname } = Compatibility.useLocation();
  return (
    <nav style={{ width, height }}>
      <ul className={styles.category}>
        {items?.map(({ label, to }, index) => {
          const isSelected = to === pathname;
          return (
            <li key={index}>
              <div className={styles['cateogry-link-wrap']}>
                <Compatibility.Link to={to}>
                  <Button
                    themeType="ghost"
                    theme={isSelected ? color : selectedColor}
                    focusOutline={false}
                  >
                    {label}
                  </Button>
                </Compatibility.Link>
              </div>
              {isSelected && (
                <div className={styles['selected-line-wrap']}>
                  <Hr weight={selectedLineWeight} color={selectedLineColor} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {bottomLineWeight ? <Hr weight={bottomLineWeight} /> : null}
    </nav>
  );
};
