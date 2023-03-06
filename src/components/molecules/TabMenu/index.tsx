import type { CSSProperties } from 'react';

import styles from './index.module.scss';
import { Compatibility } from '../../../plugins';
import { Button, Hr } from '../../atoms';

import type { ButtonProps, HrProps } from '../../atoms';

interface TabMenuItem {
  label: string;
  to: string;
}

export interface TabMenuProps {
  items?: TabMenuItem[];
  color?: ButtonProps['theme'];
  bottomLineWeight?: HrProps['weight'];
  fontWeight?: ButtonProps['fontWeight'];
  fontSize?: ButtonProps['fontSize'];
  selectedColor?: ButtonProps['theme'];
  selectedLineWeight?: HrProps['weight'];
  selectedLineColor?: HrProps['color'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export const TabMenu = ({
  items,
  color = 'bluish-gray-300',
  selectedColor = 'bluish-gray-800',
  bottomLineWeight = 'medium',
  selectedLineWeight = 'medium',
  selectedLineColor = 'purple-550',
  width = '100%',
  height = '100%',
  fontWeight = 700,
  fontSize = 'large',
}: TabMenuProps) => {
  selectedColor = selectedColor ?? color;
  const { pathname } = Compatibility.useLocation();

  console.log(Compatibility.useLocation());
  return (
    <nav style={{ width, height }}>
      <ul className={styles['tab-menu']}>
        {items?.map(({ label, to }, index) => {
          const isSelected = to === pathname;
          return (
            <li key={index}>
              <div className={styles['tab-menu-link-wrap']}>
                <Compatibility.Link to={to}>
                  <Button
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    themeType="ghost"
                    theme={isSelected ? selectedColor : color}
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
