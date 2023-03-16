import styles from './index.module.scss';
import { Compatibility } from '../../../plugins';
import { cleanClassName } from '../../../utils';

export interface FocusLayerProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  focused?: boolean;
  blur?: boolean;
  className?: string;
}

export const FocusLayer = ({
  children,
  onClick,
  focused,
  blur,
  className,
}: FocusLayerProps) => {
  Compatibility.useLayoutEffect(() => {
    const { classList } = document.body;
    if (focused) {
      classList.add(styles['fixed-body']);
    }
    return () => classList.remove(styles['fixed-body']);
  }, [focused]);

  return (
    <div className={cleanClassName(className)}>
      <div className={styles['over-layer']}>{children}</div>
      {focused ? (
        <div
          onClick={onClick}
          className={cleanClassName(
            `${styles['focus-layer']} ${blur && styles.blur}`,
          )}
        />
      ) : null}
    </div>
  );
};
