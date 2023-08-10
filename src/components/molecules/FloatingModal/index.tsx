import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

import { cleanClassName } from '@utils';

import styles from './index.module.scss';

interface CommonProps {
  children?: ReactNode;
  className?: string;
}

interface FloatingModalProps
  extends CommonProps,
    Pick<
      React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >,
      'onSubmit'
    > {
  opened?: boolean;
  onClose?: () => void;
}

const FloatingModalContext = createContext<(() => void) | undefined>(undefined);
const FloatingModalBody = ({ children, className }: CommonProps) => (
  <section
    className={cleanClassName(`${styles['floating-modal-items']} ${className}`)}
  >
    {children}
  </section>
);

interface FloatingModalTailProps {
  children: ReactNode;
  className?: string;
  border?: boolean;
}
const FloatingModalTail = ({
  children,
  className,
  border = true,
}: FloatingModalTailProps) => (
  <div
    className={`${styles['floating-modal-tail']} ${
      border && styles['with-border']
    } ${className}`}
  >
    {children}
  </div>
);

const FloatingModalMain = ({
  children,
  className,
  opened,
  onClose,
}: FloatingModalProps) => {
  const [floatState, setFloatState] = useState<
    'open' | 'closing' | 'closed' | 'firstRender'
  >('firstRender');

  const commonProps = {
    className: cleanClassName(
      `${styles[`floating-modal-container`]} ${
        styles[floatState]
      } ${className}`,
    ),
    children: (
      <FloatingModalContext.Provider value={onClose}>
        {children}
      </FloatingModalContext.Provider>
    ),
  };

  useEffect(() => {
    if (opened) {
      setFloatState('open');
    } else if (!opened && floatState !== 'firstRender') {
      setFloatState('closing');
      const delayClose = setTimeout(() => setFloatState('closed'), 500);
      return () => clearTimeout(delayClose);
    }
  }, [opened, floatState]);

  return (
    <>
      {floatState === 'closed' || floatState === 'firstRender' ? null : (
        <FloatingModalBody {...commonProps} />
      )}
    </>
  );
};

export const FloatingModal = Object.assign(FloatingModalMain, {
  Body: FloatingModalBody,
  Tail: FloatingModalTail,
});
