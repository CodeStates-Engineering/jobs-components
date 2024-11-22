import classNames from 'classnames';

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'react-feather';

import styles from './index.module.scss';
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
  size: 'small' | 'medium';
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
  size = 'medium',
}: PaginationProps) => {
  let commonButtonProps: ButtonProps = {
    size: size === 'medium' ? 'small' : 'small2x',
    shape: 'pill',
    variant: 'ghost',
    color: 'bluishGray500',
    fontSize: size === 'medium' ? 'small' : 'small2x',
    fontWeight: 500,
  };

  if (type === 'simple') {
    commonButtonProps = {
      ...commonButtonProps,
      shape: '8',
      variant: 'outlined',
      color: 'bluishGray700',
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
      className={classNames(styles.pagination, className, {
        [styles.hidden]: !isPaginationExisted && !loading,
        [styles[size]]: size,
      })}
    >
      {isSimpleType ? (
        <li>
          <Button
            {...commonButtonProps}
            icon={<ChevronsLeft width={16} height={16} />}
            onClick={() => onChange?.(1)}
            disabled={isFirstPage}
          />
        </li>
      ) : null}
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft width={16} height={16} />}
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
                      variant: 'contained',
                      color: 'purple600',
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
            <li
              className={classNames(styles['page-indicator'], {
                [styles[size]]: size,
              })}
            >
              {size === 'medium'
                ? `Page ${currentPage} of ${lastPage}`
                : `Page ${currentPage} / ${lastPage}`}
            </li>
          ) : (
            <Skeleton className={styles['page-indicator-skeleton']} />
          ),
        }[type]
      }
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronRight width={16} height={16} />}
          onClick={() => onChange?.(currentPage + 1)}
          disabled={isLastPage}
        />
      </li>
      {isSimpleType ? (
        <li>
          <Button
            {...commonButtonProps}
            icon={<ChevronsRight width={16} height={16} />}
            onClick={() => onChange?.(lastPage)}
            disabled={isLastPage}
          />
        </li>
      ) : null}
    </ul>
  );
};
