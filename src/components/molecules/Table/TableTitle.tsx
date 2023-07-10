import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

import { INITIAL } from '@constants';
import { useTableData } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableTitle.module.scss';

type MaxWidth = React.CSSProperties['maxWidth'];
export interface TableTitleProps {
  className?: string;
  children?: ReactNode;
  maxWidth?: MaxWidth;
}

export const TableTitle = ({
  children,
  className,
  maxWidth,
}: TableTitleProps) => {
  const {
    columnDataListState: [columnDataList, setColumnDataList],
    hoveredColumnIndexState: [hoveredColumnIndex, setHoveredColumnIndex],
    draggingColumnIndexState: [draggingColumnIndex, setDraggingColumnIndex],
    dropTargetColumnIndexState: [
      dropTargetColumnIndex,
      setDropTargetColumnIndex,
    ],
    fixedColumnCount,
    isHorizontalScrolledState: [isHorizontalScrolled],
  } = useTableData();

  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const currentIndex = ref.current?.cellIndex ?? INITIAL.INDEX;
    if (currentIndex !== INITIAL.INDEX && ref.current) {
      const isTrackingRequired = currentIndex < fixedColumnCount - 1;
      const updateColumnWidth = (maxWidth: MaxWidth, width?: number) => {
        setColumnDataList((prevColumnDataList) => {
          const newColumnDataList = [...prevColumnDataList];
          const columnData = newColumnDataList[currentIndex];
          if (columnData) {
            columnData.width = width;
            columnData.maxWidth = maxWidth;
          }

          return newColumnDataList;
        });
      };

      if (isTrackingRequired) {
        const observer = new ResizeObserver(([entry]) => {
          updateColumnWidth(maxWidth, entry.contentRect.width);
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
      }

      updateColumnWidth(maxWidth);
    }
  }, [fixedColumnCount, maxWidth, setColumnDataList]);

  const currentIndex = ref.current?.cellIndex ?? INITIAL.INDEX;

  const isFixed = currentIndex < fixedColumnCount;

  const handleDrop = () => {
    if (
      draggingColumnIndex !== INITIAL.INDEX &&
      currentIndex !== INITIAL.INDEX
    ) {
      if (!isFixed) {
        const [draggingColumnData] = columnDataList.splice(
          draggingColumnIndex ?? INITIAL.INDEX,
          1,
        );

        const newColumnDataList = [
          ...columnDataList.slice(0, currentIndex),
          draggingColumnData,
          ...columnDataList.slice(currentIndex),
        ];
        setColumnDataList(newColumnDataList);
      }
      setDraggingColumnIndex(INITIAL.INDEX);
      setDropTargetColumnIndex(INITIAL.INDEX);
      setTimeout(() => setHoveredColumnIndex(dropTargetColumnIndex), 33);
    }
  };

  const left = columnDataList
    .slice(0, currentIndex)
    .reduce((acc, curr) => acc + (curr?.width ?? 0), 0);

  const isDropTarget = !isFixed && dropTargetColumnIndex === currentIndex;
  const isDragging = !isFixed && draggingColumnIndex === currentIndex;
  const isLastFixed = currentIndex === fixedColumnCount - 1;
  const isHovered = hoveredColumnIndex === currentIndex;

  return (
    <th
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.title} ${isFixed && styles.fixed} ${
          isLastFixed && isHorizontalScrolled && styles.shadow
        } ${isHovered && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingColumnIndex ?? 0) > dropTargetColumnIndex
              ? styles['drop-left']
              : styles['drop-right']))
        } ${isDragging && (isDropTarget ? styles.restoring : styles.dragging)} 
  
          } ${
            isDragging && (isDropTarget ? styles.restoring : styles.dragging)
          } ${className}`,
      )}
      ref={ref}
      draggable={!isFixed}
      onMouseEnter={() =>
        setHoveredColumnIndex(
          draggingColumnIndex === INITIAL.INDEX ? currentIndex : INITIAL.INDEX,
        )
      }
      onMouseLeave={() => setHoveredColumnIndex(INITIAL.INDEX)}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() => setDraggingColumnIndex(currentIndex)}
      onDragEnter={() => setDropTargetColumnIndex(currentIndex)}
      onDrop={handleDrop}
    >
      <div
        className={styles['title-content']}
        style={{
          maxWidth,
        }}
      >
        {children}
      </div>
    </th>
  );
};
