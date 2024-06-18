import { useMemo } from 'react';

import styles from './index.module.scss';
import { Compatibility } from '../../../plugins';
import { Button, Hr } from '../../atoms';

import type { ButtonProps, HrProps } from '../../atoms';

interface Item {
  label: string;
  path?: string;
  to?: string;
}

interface TabMenuItem extends Item {
  onClick?: (item: Item) => void;
  disabled?: boolean;
}

export interface TabMenuProps {
  items?: TabMenuItem[];
  itemSize?: ButtonProps['size'];
  itemShape?: ButtonProps['shape'];
  bottomLineWeight?: HrProps['weight'] | 'none';
  fontWeight?: ButtonProps['fontWeight'];
  fontSize?: ButtonProps['fontSize'];
  variant?: {
    default: ButtonProps['variant'];
    selected: ButtonProps['variant'];
  };
  color?: {
    default: ButtonProps['color'];
    selected: ButtonProps['color'];
  };
  selectedLineWeight?: HrProps['weight'] | 'none';
  selectedLineColor?: HrProps['color'];
  className?: string;
}

export const TabMenu = ({
  items,
  itemSize = 'large',
  itemShape = '8',
  bottomLineWeight = 'medium',
  selectedLineWeight = 'medium',
  variant = {
    default: 'ghost',
    selected: 'ghost',
  },
  color = {
    default: 'bluishGray300',
    selected: 'bluishGray700',
  },
  selectedLineColor = 'purple-550',
  fontWeight = 700,
  fontSize = 'large',
  className,
}: TabMenuProps) => {
  const { pathname, search } = Compatibility.useLocation();
  const queryStrings = useMemo(
    () => (search ? search.replace('?', '')?.split('&') : []),
    [search],
  );

  const baseItemButtonProps: ButtonProps = {
    fontSize,
    fontWeight,
    size: itemSize,
    shape: itemShape,
    className: styles['tab-menu-link'],
  };

  return (
    <nav className={className}>
      <ul className={styles['tab-menu']}>
        {items?.map(({ onClick, disabled, ...item }, index) => {
          const { label, to } = item;

          const path = to ?? item.path;

          const isMatched = (() => {
            if (!path) {
              return true;
            }

            const [tabPathname, tabSearch = undefined] = path.split('?');

            return (
              (pathname === tabPathname &&
                tabSearch
                  ?.split('&')
                  .every((itemQueryString) =>
                    queryStrings.includes(itemQueryString),
                  )) ??
              true
            );
          })();

          const itemButtonProps: ButtonProps = {
            ...baseItemButtonProps,
            ...(isMatched
              ? { theme: color.selected, variant: variant.selected }
              : { theme: color.default, variant: variant.default }),
            children: label,
            onClick: () => onClick?.(item),
            disabled,
          };

          return (
            <li key={index}>
              <div className={styles['tab-menu-link-wrap']}>
                {to && !disabled ? (
                  <Compatibility.Link to={to}>
                    <Button {...itemButtonProps} />
                  </Compatibility.Link>
                ) : (
                  <Button {...itemButtonProps} />
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
