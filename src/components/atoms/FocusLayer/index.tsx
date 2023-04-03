import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

export interface FocusLayerProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  focused?: boolean;
  blur?: boolean;
  className?: string;
  bodyScroll?: boolean;
  priority?: 1 | 2 | 3;
}

export const FocusLayer = ({
  children,
  onClick,
  focused,
  blur,
  className,
  bodyScroll = false,
  priority = 3,
}: FocusLayerProps) => {
  const [focusStatus] = useClosingState(focused);
  const isClosing = focusStatus === 'closing';

  Compatibility.useLayoutEffect(() => {
    if (!bodyScroll) {
      const { classList } = document.body;
      if (focused) {
        classList.add(styles['fixed-body']);
      }
      return () => classList.remove(styles['fixed-body']);
    }
  }, [focused, bodyScroll]);

  const priorityClassName = styles[`priority-${priority}`];

  return (
    <>
      <div
        className={cleanClassName(
          `${styles['focus-layer']} ${priorityClassName} ${className}`,
        )}
      >
        {children}
      </div>
      {focusStatus ? (
        <div
          onClick={onClick}
          className={cleanClassName(
            `${styles['background-layer']} ${
              isClosing && styles.closing
            } ${priorityClassName} ${blur && styles.blur}`,
          )}
        />
      ) : null}
    </>
  );
};
