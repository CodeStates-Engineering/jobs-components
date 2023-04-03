import { ChevronLeft, ChevronRight } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button, Skeleton } from '../../atoms';

import type { ButtonProps } from '../../atoms';

export interface PaginationProps {
  onChange?: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  currentPage?: number;
  displayedCount?: number;
  className?: string;
}

export const Pagination = ({
  onChange,
  itemsPerPage = 0,
  totalItems = 0,
  currentPage = 0,
  displayedCount = 10,
  className,
}: PaginationProps) => {
  const commonButtonProps: ButtonProps = {
    size: 'small',
    shape: 'round',
    themeType: 'ghost',
    theme: 'bluish-gray-800',
    fontSize: 'small',
    fontWeight: 500,
    focusOutline: false,
  };

  const isReady = !!(
    itemsPerPage &&
    totalItems &&
    currentPage &&
    displayedCount
  );

  const lastPage = isReady ? Math.ceil(totalItems / itemsPerPage) : 0;

  const displayedPages: number[] = isReady
    ? [currentPage]
    : Array.from({ length: displayedCount });

  if (isReady) {
    for (let i = 1; i <= displayedCount; i += 1) {
      const rightSidePage = currentPage + i;
      if (rightSidePage <= lastPage) {
        displayedPages.push(rightSidePage);
      }
      if (displayedPages.length >= displayedCount) {
        break;
      }

      const leftSidePage = currentPage - i;
      if (leftSidePage > 0) {
        displayedPages.unshift(leftSidePage);
      }
      if (displayedPages.length >= displayedCount) {
        break;
      }
    }
  }

  return (
    <ul className={cleanClassName(`${styles.pagination} ${className}`)}>
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft />}
          onClick={() => onChange?.(currentPage - 1)}
          disabled={!isReady || currentPage <= 1}
        />
      </li>
      {isReady
        ? displayedPages.map((page, index) => {
            const isCurrentPage = page === currentPage;
            const buttonProps: ButtonProps = isCurrentPage
              ? {
                  ...commonButtonProps,
                  theme: 'purple-600',
                  themeType: 'contained',
                }
              : commonButtonProps;
            return (
              <li key={index}>
                <Button
                  {...buttonProps}
                  onClick={() => onChange?.(page)}
                  icon={page}
                />
              </li>
            );
          })
        : displayedPages.map((_, index) => (
            <Skeleton key={index} className={styles.skeleton} />
          ))}
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronRight />}
          onClick={() => onChange?.(currentPage + 1)}
          disabled={!isReady || currentPage >= lastPage}
        />
      </li>
    </ul>
  );
};
