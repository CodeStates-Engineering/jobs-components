import { useMemo } from 'react';

import styles from './index.module.scss';
import { Compatibility } from '../../../plugins';
import { Button, Hr } from '../../atoms';

import type { ButtonProps, HrProps } from '../../atoms';

interface Item {
  label: string;
  to: string;
}

interface TabMenuItem extends Item {
  onClick?: (item: Item) => void;
}

export interface TabMenuProps {
  items?: TabMenuItem[];
  color?: ButtonProps['theme'];
  itemSize?: ButtonProps['size'];
  themeType?: ButtonProps['themeType'];
  itemShape?: ButtonProps['shape'];
  bottomLineWeight?: HrProps['weight'] | 'none';
  fontWeight?: ButtonProps['fontWeight'];
  fontSize?: ButtonProps['fontSize'];
  selectedColor?: ButtonProps['theme'];
  selectedLineWeight?: HrProps['weight'] | 'none';
  selectedLineColor?: HrProps['color'];
  className?: string;
  disabledTabLink?: boolean;
}

export const TabMenu = ({
  items,
  color = 'bluish-gray-300',
  itemSize = 'large',
  itemShape,
  themeType = 'ghost',
  selectedColor = 'bluish-gray-800',
  bottomLineWeight = 'medium',
  selectedLineWeight = 'medium',
  selectedLineColor = 'purple-550',
  fontWeight = 700,
  fontSize = 'large',
  className,
  disabledTabLink = false,
}: TabMenuProps) => {
  selectedColor = selectedColor ?? color;
  const { pathname, search } = Compatibility.useLocation();
  const queryStrings = useMemo(
    () => (search ? search.replace('?', '')?.split('&') : []),
    [search],
  );

  const baseItemButtonProps: ButtonProps = {
    fontSize,
    fontWeight,
    size: itemSize,
    focusOutline: false,
    shape: itemShape,
    className: styles['tab-menu-link'],
  };

  return (
    <nav className={className}>
      <ul className={styles['tab-menu']}>
        {items?.map(({ onClick, ...item }, index) => {
          const { label, to } = item;
          const [itemPathname, itemSearch] = to.split('?');
          const itemQueryStrings = itemSearch ? itemSearch.split('&') : [];
          const isMatched =
            pathname === itemPathname &&
            itemQueryStrings.every((itemQueryString) =>
              queryStrings.includes(itemQueryString),
            );

          const itemButtonProps: ButtonProps = {
            ...baseItemButtonProps,
            ...(isMatched
              ? { themeType, theme: selectedColor }
              : { themeType: 'ghost', theme: color }),
            children: label,
            onClick: () => onClick?.(item),
          };

          return (
            <li key={index}>
              <div className={styles['tab-menu-link-wrap']}>
                {disabledTabLink ? (
                  <Button {...itemButtonProps} />
                ) : (
                  <Compatibility.Link to={to}>
                    <Button {...itemButtonProps} />
                  </Compatibility.Link>
                )}
              </div>
              {isMatched && (
                <div className={styles['selected-line-wrap']}>
                  {selectedLineWeight === 'none' ? null : (
                    <Hr weight={selectedLineWeight} color={selectedLineColor} />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {bottomLineWeight === 'none' ? null : <Hr weight={bottomLineWeight} />}
    </nav>
  );
};
