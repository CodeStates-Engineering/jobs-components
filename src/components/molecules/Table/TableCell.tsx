import { useEffect, useRef, useState } from 'react';
import { Copy } from 'react-feather';
import nodeToString from 'react-node-to-string';

import { Button } from '@components/atoms';
import { INITIAL } from '@constants';
import { useTableData } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableCell.module.scss';

export interface TableCellProps {
  className?: string;
  children?: React.ReactNode;
  onCopy?: (value: string) => void;
  hoverStyle?: Pick<React.CSSProperties, 'maxHeight' | 'maxWidth'>;
}

export const TableCell = ({
  children,
  onCopy,
  className,
  hoverStyle,
}: TableCellProps) => {
  const {
    colunmDataListState: [colunmDataList, setColunmDataList],
    hoveredColunmIndexState: [hoveredColunmIndex],
    draggingColunmIndexState: [draggingColunmIndex],
    dropTargetColunmIndexState: [dropTargetColunmIndex],
    isHorizontalScrolledState: [isHorizontalScrolled],
    fixedColunmCount,
    isLoading,
  } = useTableData();

  const ref = useRef<HTMLTableCellElement>(null);
  const currentIndex = ref.current?.cellIndex ?? INITIAL.INDEX;

  const { maxWidth } = colunmDataList[currentIndex ?? 0] ?? {};

  let left = 0;
  for (let i = 0; i < currentIndex; i += 1) {
    left += colunmDataList[i]?.width ?? 0;
  }

  const [isHovered, setIsHovered] = useState(false);

  const isFixed = currentIndex < fixedColunmCount;
  const isDropTarget = !isFixed && dropTargetColunmIndex === currentIndex;
  const isDragging = !isFixed && draggingColunmIndex === currentIndex;
  const isLastFixed = currentIndex === fixedColunmCount - 1;
  const isTitleHovered = hoveredColunmIndex === currentIndex;
  const [isOverflow, setOverflow] = useState(true);

  useEffect(() => {
    setColunmDataList((colunmDataList) => [...colunmDataList]);
  }, [children, setColunmDataList]);

  return (
    <td
      ref={ref}
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.cell} ${isFixed && styles.fixed} ${
          isLastFixed && isHorizontalScrolled && styles.shadow
        } ${isTitleHovered && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingColunmIndex ?? 0) > dropTargetColunmIndex
              ? styles['drop-left']
              : styles['drop-right']))
        } ${
          isDragging && (isDropTarget ? styles.restoring : styles.dragging)
        } ${className}`,
      )}
    >
      <div
        style={{
          maxWidth,
        }}
        className={`${styles['cell-content-container']} ${
          isOverflow ? styles.overflow : styles['not-overflow']
        }`}
        onMouseEnter={({ currentTarget }) => {
          if (!isLoading) {
            const isOverflow =
              currentTarget.scrollWidth > currentTarget.clientWidth;

            if (isOverflow || onCopy) {
              setIsHovered(true);
            }

            if (!isOverflow) {
              setOverflow(false);
            }
          }
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <div className={styles.hidden}>{children}</div> : children}
        {isHovered ? (
          <div
            className={cleanClassName(
              `${styles['hovered-cell-content-wrap']} ${
                hoverStyle && styles['has-style']
              }`,
            )}
            style={hoverStyle}
          >
            <div className={styles['hovered-cell-content']}>{children}</div>
            {onCopy ? (
              <div className={styles['copy-button-wrap']}>
                <Button
                  size="small3x"
                  shape="round"
                  theme="bluish-gray700/0"
                  icon={<Copy size={14} />}
                  onClick={() => {
                    const childrenString = nodeToString(children);
                    navigator.clipboard.writeText(childrenString);
                    onCopy?.(childrenString);
                  }}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </td>
  );
};
