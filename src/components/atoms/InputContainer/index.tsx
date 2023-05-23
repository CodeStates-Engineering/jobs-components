import { createContext, useContext } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

export interface InputContainerProps extends CommonProps {
  validationMessage?: string | null;
  validationSpace?: boolean;
}

const InputContainerContext =
  createContext<InputContainerProps['validationMessage']>(undefined);

// TODO: 추후 라벨 컴포넌트를 해당 컴포넌트에서 관리하도록 변경해야할듯.
const InputContainerMain = ({
  children,
  className,
  validationMessage,
  validationSpace,
}: InputContainerProps) => (
  <div className={cleanClassName(`${styles['input-container']} ${className}`)}>
    <InputContainerContext.Provider value={validationMessage}>
      <div className={styles['input-interaction-wrap']}>{children}</div>
    </InputContainerContext.Provider>
    {validationMessage ? (
      <p className={styles['validation-message']}>{validationMessage}</p>
    ) : (
      validationSpace && <div className={styles['validation-space']} />
    )}
  </div>
);

export interface InputContainerInteractionProps extends CommonProps {
  onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
  size?: 'none' | 'small' | 'medium' | 'large';
  borderRadius?: '4' | '8';
}

const InputContainerInteraction = ({
  children,
  onClick,
  size = 'large',
  className,
  borderRadius = '8',
}: InputContainerInteractionProps) => {
  const validationMessage = useContext(InputContainerContext);
  return (
    <div
      className={cleanClassName(
        `${styles['input-wrap']} ${styles[`border-radius-${borderRadius}`]} ${
          validationMessage && styles.error
        } ${size !== 'none' && styles[`size-${size}`]} ${className}`,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const InputContainer = Object.assign(InputContainerMain, {
  Interaction: InputContainerInteraction,
});
