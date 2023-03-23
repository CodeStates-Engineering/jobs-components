import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms';

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
  itemsPerPage = 1,
  totalItems = 1,
  currentPage = 1,
  displayedCount = 1,
  className,
}: PaginationProps) => {
  const isReady = !!(itemsPerPage && totalItems && currentPage);
  const paginationList = useMemo(() => {
    if (isReady) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const displayedPaginationCount =
        displayedCount > totalPages ? totalPages : displayedCount;

      const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      const paginationList = Array.from(
        { length: Math.ceil(totalPages / displayedPaginationCount) },
        (_, index) => index,
      ).map((index) =>
        pages.slice(
          index * displayedPaginationCount,
          (index + 1) * displayedPaginationCount,
        ),
      );

      const lastPaginationPartIndex = paginationList.length - 1;
      const lastPaginationPart = paginationList[lastPaginationPartIndex];
      if (lastPaginationPart.length < displayedPaginationCount) {
        const lastPage = lastPaginationPart[lastPaginationPart.length - 1];
        const lastPaginationPartStart = lastPage - displayedPaginationCount + 1;
        paginationList[lastPaginationPartIndex] = Array.from(
          { length: displayedPaginationCount },
          (_, index) => lastPaginationPartStart + index,
        );
      }

      return paginationList;
    }
    return [];
  }, [displayedCount, itemsPerPage, totalItems, isReady]);

  const [paginationIndex, setPaginationIndex] = useState(0);
  useEffect(() => {
    if (!paginationIndex && isReady) {
      setPaginationIndex(
        paginationList.findIndex((part) => part.includes(currentPage)),
      );
    }
  }, [currentPage, isReady, paginationList, paginationIndex]);

  const commonButtonProps: ButtonProps = {
    size: 'small',
    shape: 'round',
    themeType: 'ghost',
    theme: 'bluish-gray-800',
    fontSize: 'small',
    fontWeight: 500,
  };

  return (
    <ul className={cleanClassName(`${styles.pagination} ${className}`)}>
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft />}
          onClick={() => {
            if (isReady) {
              const prevPaginationIndex = paginationIndex - 1;
              setPaginationIndex(prevPaginationIndex);
              const [prevPage] = paginationList[prevPaginationIndex].filter(
                (page) => currentPage > page,
              );
              onChange?.(prevPage);
            }
          }}
          disabled={paginationIndex === 0}
        />
      </li>
      {paginationList[paginationIndex].map((page) => {
        const isCurrentPage = page === currentPage;
        const buttonProps: ButtonProps = isCurrentPage
          ? {
              ...commonButtonProps,
              theme: 'purple-600',
              themeType: 'contained',
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
      })}
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronRight />}
          onClick={() => {
            if (isReady) {
              const nextPaginationIndex = paginationIndex + 1;
              setPaginationIndex(nextPaginationIndex);
              const [nextPage] = paginationList[nextPaginationIndex].filter(
                (page) => currentPage < page,
              );
              onChange?.(nextPage);
            }
          }}
          disabled={paginationIndex === paginationList.length - 1}
        />
      </li>
    </ul>
  );
};
