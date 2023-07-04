import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

import { INITIAL } from '@constants';
import { useTableData } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableTitle.module.scss';

export interface TableTitleProps {
  className?: string;
  children?: ReactNode;
  maxWidth?: React.CSSProperties['maxWidth'];
}

export const TableTitle = ({
  children,
  className,
  maxWidth,
}: TableTitleProps) => {
  const {
    colunmDataListState: [colunmDataList, setColunmDataList],
    hoveredColunmIndexState: [hoveredColunmIndex, setHoveredColunmIndex],
    draggingColunmIndexState: [draggingColunmIndex, setDraggingColunmIndex],
    dropTargetColunmIndexState: [
      dropTargetColunmIndex,
      setDropTargetColunmIndex,
    ],
    fixedColunmCount,
    isHorizontalScrolledState: [isHorizontalScrolled],
  } = useTableData();

  const ref = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    const { current: element } = ref;
    if (element) {
      const { offsetWidth, cellIndex } = element;
      setColunmDataList((prevState) => {
        const newColunmDataList = [...prevState];
        const colunmData = newColunmDataList[cellIndex];
        if (colunmData) {
          colunmData.width = offsetWidth;
          colunmData.maxWidth = maxWidth;
        }

        return newColunmDataList;
      });
    }
  }, [setColunmDataList, maxWidth]);

  const currentIndex = ref.current?.cellIndex ?? INITIAL.INDEX;

  const isFixed = currentIndex < fixedColunmCount;

  const handleDrop = () => {
    if (
      draggingColunmIndex !== INITIAL.INDEX &&
      currentIndex !== INITIAL.INDEX
    ) {
      if (!isFixed) {
        const [draggingColunmData] = colunmDataList.splice(
          draggingColunmIndex ?? INITIAL.INDEX,
          1,
        );

        const newColunmDataList = [
          ...colunmDataList.slice(0, currentIndex),
          draggingColunmData,
          ...colunmDataList.slice(currentIndex),
        ];
        setColunmDataList(newColunmDataList);
      }
      setDraggingColunmIndex(INITIAL.INDEX);
      setDropTargetColunmIndex(INITIAL.INDEX);
      setTimeout(() => setHoveredColunmIndex(dropTargetColunmIndex), 33);
    }
  };

  let left = 0;
  for (let i = 0; i < currentIndex; i += 1) {
    left += colunmDataList[i]?.width ?? 0;
  }

  const isDropTarget = !isFixed && dropTargetColunmIndex === currentIndex;
  const isDragging = !isFixed && draggingColunmIndex === currentIndex;
  const isLastFixed = currentIndex === fixedColunmCount - 1;
  const isHovered = hoveredColunmIndex === currentIndex;
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
            ((draggingColunmIndex ?? 0) > dropTargetColunmIndex
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
        setHoveredColunmIndex(
          draggingColunmIndex === INITIAL.INDEX ? currentIndex : INITIAL.INDEX,
        )
      }
      onMouseLeave={() => setHoveredColunmIndex(INITIAL.INDEX)}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={() => setDraggingColunmIndex(currentIndex)}
      onDragEnter={() => setDropTargetColunmIndex(currentIndex)}
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
