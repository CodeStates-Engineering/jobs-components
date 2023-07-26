import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'react-feather';

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
  type?: 'default' | 'simple';
}

export const Pagination = ({
  onChange,
  itemsPerPage = 0,
  totalItems = 0,
  currentPage = 0,
  displayedCount = 10,
  className,
  loading,
  type = 'default',
}: PaginationProps) => {
  let commonButtonProps: ButtonProps = {
    size: 'small',
    shape: 'pill',
    theme: 'bluish-gray500/0',
    fontSize: 'small',
    fontWeight: 500,
    focusOutline: false,
  };

  if (type === 'simple') {
    commonButtonProps = {
      ...commonButtonProps,
      shape: '8',
      theme: 'bluish-gray700/0/bluish-gray200',
    };
  }

  const isPaginationExisted = !!(
    itemsPerPage &&
    totalItems &&
    currentPage &&
    displayedCount
  );

  const lastPage = isPaginationExisted
    ? Math.ceil(totalItems / itemsPerPage)
    : 0;

  const isFirstPage = !isPaginationExisted || currentPage <= 1;
  const isLastPage = !isPaginationExisted || currentPage >= lastPage;

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
  const isSimpleType = type === 'simple';

  return (
    <ul
      className={cleanClassName(
        `${styles.pagination} ${className} ${
          !isPaginationExisted && !loading && styles.hidden
        }`,
      )}
    >
      {isSimpleType ? (
        <li>
          <Button
            {...commonButtonProps}
            icon={<ChevronsLeft />}
            onClick={() => onChange?.(1)}
            disabled={isFirstPage}
          />
        </li>
      ) : null}
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft />}
          onClick={() => onChange?.(currentPage - 1)}
          disabled={isFirstPage}
        />
      </li>
      {
        {
          default: isPaginationExisted
            ? displayedPages.map((page) => {
                const isCurrentPage = page === currentPage;
                const buttonProps: ButtonProps = isCurrentPage
                  ? {
                      ...commonButtonProps,
                      theme: 'white/purple600',
                    }
                  : commonButtonProps;
                return (
                  <li key={page}>
                    <Button
                      {...buttonProps}
                      onClick={() => onChange?.(page)}
                      icon={page}
                    />
                  </li>
                );
              })
            : displayedPages.map((_, index) => (
                <Skeleton
                  key={index}
                  className={`${styles.skeleton} ${styles['border-radius']}`}
                />
              )),
          simple: isPaginationExisted ? (
            <li className={styles['page-indicator']}>
              Page {currentPage} of {lastPage}
            </li>
          ) : (
            <Skeleton className={styles['page-indicator-skeleton']} />
          ),
        }[type]
      }
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronRight />}
          onClick={() => onChange?.(currentPage + 1)}
          disabled={isLastPage}
        />
      </li>
      {isSimpleType ? (
        <li>
          <Button
            {...commonButtonProps}
            icon={<ChevronsRight />}
            onClick={() => onChange?.(lastPage)}
            disabled={isLastPage}
          />
        </li>
      ) : null}
    </ul>
  );
};
