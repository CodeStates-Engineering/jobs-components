import { isNumber } from 'lodash-es';

import { useRef, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

import { TableContext } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableTitle.module.scss';

export interface TableTitleProps {
  width?: React.CSSProperties['width'];
  draggable?: boolean;
  className?: string;
  children?: ReactNode;
}

export const TableTitle = ({
  children,
  width,
  className,
  draggable = true,
}: TableTitleProps) => {
  const {
    tableState,
    setTableState,
    fixedTitleCount,
    isLeftScrolled,
    isLoading,
  } = useContext(TableContext);

  const { titles } = tableState;

  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const { current: element } = ref;
    if (element) {
      const { offsetWidth, cellIndex } = element;
      if (width || !isLoading) {
        setTableState((prevState) => {
          prevState.titles[cellIndex].width = offsetWidth;
          return { ...prevState };
        });
      }
    }
  }, [ref, setTableState, width, isLoading]);

  const currentOrder = ref.current?.cellIndex ?? -1;

  const { draggingOrder, hoveredOrder, dropOrder } = tableState;

  const setHoveredOrder = (hoveredOrder?: number) => {
    if (draggingOrder === undefined) {
      setTableState((prevState) => ({
        ...prevState,
        hoveredOrder,
      }));
    }
  };

  const handleDrop = () => {
    if (isNumber(draggingOrder) && currentOrder >= 0) {
      let sortedTitles = [...titles];

      const [draggingTitle] = sortedTitles.splice(draggingOrder ?? -1, 1);

      sortedTitles = sortedTitles.sort(
        (a, b) => a.order.current - b.order.current,
      );

      const { order } = titles[currentOrder];

      sortedTitles = [
        ...sortedTitles.slice(0, order.current),
        draggingTitle,
        ...sortedTitles.slice(order.current),
      ];

      sortedTitles.forEach((title, newOrder) => {
        title.order.current = newOrder;
      });

      const newTableState = {
        ...tableState,
        titles: sortedTitles,
        dropOrder: undefined,
        draggingOrder: undefined,
        hoveredOrder: undefined,
      };

      setTableState(newTableState);

      setTimeout(() =>
        setTableState({
          ...newTableState,
          hoveredOrder: currentOrder,
        }),
      );
    }
  };

  let left = 0;
  for (let i = 0; i < currentOrder; i += 1) {
    left += titles[i]?.width ?? 0;
  }

  const isDropTarget = dropOrder === currentOrder;
  const isDragging = draggingOrder === currentOrder;
  const isFixed = currentOrder < fixedTitleCount;
  const isLastFixed = currentOrder === fixedTitleCount - 1;
  const isHovered = hoveredOrder === currentOrder;
  return (
    <th
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.title} ${isFixed && styles.fixed} ${
          isLastFixed && isLeftScrolled && styles.shadow
        } ${isHovered && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingOrder ?? 0) > dropOrder
              ? styles['drop-left']
              : styles['drop-right']))
        } ${isDragging && (isDropTarget ? styles.restoring : styles.dragging)} 
  
          } ${
            isDragging && (isDropTarget ? styles.restoring : styles.dragging)
          } ${className}`,
      )}
      ref={ref}
      draggable={draggable}
      onMouseEnter={() => setHoveredOrder(currentOrder)}
      onMouseLeave={() => setHoveredOrder()}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() =>
        setTableState((prevState) => ({
          ...prevState,
          draggingOrder: currentOrder,
        }))
      }
      onDragEnter={() =>
        setTableState((prevState) => ({
          ...prevState,
          dropOrder: currentOrder,
        }))
      }
      onDrop={handleDrop}
    >
      <div
        style={{
          width,
        }}
        className={styles['title-content']}
      >
        {children}
      </div>
    </th>
  );
};
