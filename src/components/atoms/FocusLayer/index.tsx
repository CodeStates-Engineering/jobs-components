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
}

export const FocusLayer = ({
  children,
  onClick,
  focused,
  blur,
  className,
  bodyScroll = false,
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

  return (
    <>
      <div className={cleanClassName(`${styles['focus-layer']} ${className}`)}>
        {children}
      </div>
      {focusStatus ? (
        <div
          onClick={onClick}
          className={cleanClassName(
            `${styles['background-layer']} ${isClosing && styles.closing} ${
              blur && styles.blur
            }`,
          )}
        />
      ) : null}
    </>
  );
};
