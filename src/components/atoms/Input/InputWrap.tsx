import { cleanClassName } from '@utils';

import { useValidationMessageDynamicHeight } from './(hooks)/useValidationMessageDynamicHeight';
import styles from './InputWrap.module.scss';

export interface InputWrapProps
  extends Pick<HTMLTagProps<'div'>, 'children' | 'className'> {
  onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
  size?: 'none' | 'small' | 'medium' | 'large';
  borderRadius?: '4' | '8';
  width?: React.CSSProperties['width'];
  validationMessage?: string | null;
}

export const InputWrap = ({
  children,
  onClick,
  size = 'large',
  className,
  borderRadius = '8',
  width,
  validationMessage,
}: InputWrapProps) => {
  const { messageRef, wrapHeightStyle } = useValidationMessageDynamicHeight(
    !!validationMessage,
  );

  return (
    <div className={cleanClassName(`${styles['input-wrap']} ${className}`)}>
      <div
        className={cleanClassName(
          `${styles['input-interaction']} ${
            styles[`border-radius-${borderRadius}`]
          } ${validationMessage && styles.error} ${
            size !== 'none' && styles[`size-${size}`]
          }`,
        )}
        style={{
          width,
        }}
        onClick={onClick}
      >
        {children}
      </div>
      <div
        className={styles['validation-message-wrap']}
        style={wrapHeightStyle}
      >
        <p ref={messageRef} className={styles['validation-message']}>
          {validationMessage}
        </p>
      </div>
    </div>
  );
};
