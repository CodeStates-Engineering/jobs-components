import { useRef, useContext, useState, useEffect } from 'react';
import { Copy } from 'react-feather';
import nodeToString from 'react-node-to-string';

import { Button } from '@components/atoms';
import { TableContext } from '@contexts/TableContext';
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
    tableState: { titles, hoveredOrder, draggingOrder, dropOrder },
    fixedTitleCount,
    isLeftScrolled,
    setTableState,
    isLoading,
  } = useContext(TableContext);

  const ref = useRef<HTMLTableCellElement>(null);
  const currentOrder = ref.current?.cellIndex ?? -1;

  const { width } = titles[currentOrder ?? 0] ?? {};
  let left = 0;
  for (let i = 0; i < currentOrder; i += 1) {
    left += titles[i]?.width ?? 0;
  }

  const [isHovered, setIsHovered] = useState(false);

  const isDropTarget = dropOrder === currentOrder;
  const isDragging = draggingOrder === currentOrder;
  const isFixed = currentOrder < fixedTitleCount;
  const isLastFixed = currentOrder === fixedTitleCount - 1;
  const isTitleHovered = hoveredOrder === currentOrder;

  useEffect(
    () => setTableState((tableState) => ({ ...tableState })),
    [children, setTableState],
  );

  const [isOverflow, setOverflow] = useState(true);

  return (
    <td
      ref={ref}
      style={{
        left,
      }}
      className={cleanClassName(
        `${styles.cell} ${isFixed && styles.fixed} ${
          isLastFixed && isLeftScrolled && styles.shadow
        } ${isTitleHovered && styles.hovered} ${
          isDropTarget &&
          (isDragging ||
            ((draggingOrder ?? 0) > dropOrder
              ? styles['drop-left']
              : styles['drop-right']))
        } ${
          isDragging && (isDropTarget ? styles.restoring : styles.dragging)
        } ${className}`,
      )}
    >
      {isLoading ? null : (
        <div
          style={{
            width,
          }}
          className={`${styles['cell-content-container']} ${
            isOverflow ? styles.overflow : styles['not-overflow']
          }`}
          onMouseEnter={({ currentTarget }) => {
            const isOverflow =
              currentTarget.scrollWidth > currentTarget.clientWidth;

            if (isOverflow || onCopy) {
              setIsHovered(true);
            }

            if (!isOverflow) {
              setOverflow(false);
            }
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <div className={styles.hidden}>{children}</div>
          ) : (
            children
          )}
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
      )}
    </td>
  );
};
