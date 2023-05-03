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
  loading?: boolean;
}

export const Pagination = ({
  onChange,
  itemsPerPage = 0,
  totalItems = 0,
  currentPage = 0,
  displayedCount = 10,
  className,
  loading,
}: PaginationProps) => {
  const commonButtonProps: ButtonProps = {
    size: 'small',
    shape: 'round',
    theme: 'white/bluish-gray800',
    fontSize: 'small',
    fontWeight: 500,
    focusOutline: false,
  };

  const isPaginationExisted = !!(
    itemsPerPage &&
    totalItems &&
    currentPage &&
    displayedCount
  );

  const lastPage = isPaginationExisted
    ? Math.ceil(totalItems / itemsPerPage)
    : 0;

  const displayedPages: number[] = isPaginationExisted
    ? [currentPage]
    : Array.from({ length: displayedCount });

  if (isPaginationExisted) {
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
    <ul
      className={cleanClassName(
        `${styles.pagination} ${className} ${
          !isPaginationExisted && !loading && styles.hidden
        }`,
      )}
    >
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft />}
          onClick={() => onChange?.(currentPage - 1)}
          disabled={!isPaginationExisted || currentPage <= 1}
        />
      </li>
      {isPaginationExisted
        ? displayedPages.map((page, index) => {
            const isCurrentPage = page === currentPage;
            const buttonProps: ButtonProps = isCurrentPage
              ? {
                  ...commonButtonProps,
                  theme: 'white/purple600',
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
          disabled={!isPaginationExisted || currentPage >= lastPage}
        />
      </li>
    </ul>
  );
};
