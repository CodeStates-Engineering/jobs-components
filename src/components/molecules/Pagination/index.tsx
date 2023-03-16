/* eslint-disable */
import { useEffect, useMemo, useState } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button, Link } from '../../atoms';
import type { ButtonProps } from '../../atoms';
import { ChevronLeft, ChevronRight } from 'react-feather';

export interface PaginationProps {
  onChange?: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
  currentPage?: number;
  displayedCount?: number;
}

export const Pagination = ({
  onChange,
  itemsPerPage,
  totalItems,
  currentPage,
  displayedCount = 10,
}: PaginationProps) => {
  const isReady = !!(itemsPerPage && totalItems && currentPage);
  const paginationList = useMemo(() => {
    if (isReady) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      const paginationList = Array.from(
        { length: Math.ceil(totalPages / displayedCount) },
        (_, index) => index,
      ).map((index) =>
        pages.slice(index * displayedCount, (index + 1) * displayedCount),
      );

      const lastPaginationPartIndex = paginationList.length - 1;
      const lastPaginationPart = paginationList[lastPaginationPartIndex];
      if (lastPaginationPart.length < displayedCount) {
        const lastPage = lastPaginationPart[lastPaginationPart.length - 1];
        const lastPaginationPartStart = lastPage - displayedCount + 1;
        paginationList[lastPaginationPartIndex] = Array.from(
          { length: displayedCount },
          (_, index) => lastPaginationPartStart + index,
        );
      }

      return paginationList;
    }
    return [];
  }, [displayedCount, itemsPerPage, totalItems, isReady]);

  const [currentPaginationIndex, setCurrentPaginationIndex] = useState(0);
  useEffect(() => {
    if (!currentPaginationIndex && isReady) {
      setCurrentPaginationIndex(
        paginationList.findIndex((part) => part.includes(currentPage)),
      );
    }
  }, [currentPage, isReady, paginationList]);

  const commonButtonProps: ButtonProps = {
    size: 'small',
    shape: 'round',
    themeType: 'ghost',
    theme: 'bluish-gray-800',
    fontSize: 'small',
    fontWeight: 500,
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft />}
          onClick={() => {
            if (isReady) {
              const prevPaginationIndex = currentPaginationIndex - 1;
              setCurrentPaginationIndex(prevPaginationIndex);
              const [prevPage] = paginationList[prevPaginationIndex].filter(
                (page) => currentPage > page,
              );
              onChange?.(prevPage);
            }
          }}
          disabled={currentPaginationIndex === 0}
        />
      </li>
      {paginationList[currentPaginationIndex].map((page) => {
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
              const nextPaginationIndex = currentPaginationIndex + 1;
              setCurrentPaginationIndex(nextPaginationIndex);
              const [nextPage] = paginationList[nextPaginationIndex].filter(
                (page) => currentPage < page,
              );
              onChange?.(nextPage);
            }
          }}
          disabled={currentPaginationIndex === paginationList.length - 1}
        />
      </li>
    </ul>
  );
};
