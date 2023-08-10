import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import { useMountedEffect } from '@hooks';
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
  const [floatState, setFloatState] = useState<'open' | 'closing' | 'closed'>(
    'closed',
  );

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

  useMountedEffect(() => {
    if (opened) {
      setFloatState('open');
    } else {
      setFloatState('closing');
      const delayClose = setTimeout(() => setFloatState('closed'), 500);
      return () => clearTimeout(delayClose);
    }
  }, [opened]);

  return (
    <>
      {floatState === 'closed' ? null : <FloatingModalBody {...commonProps} />}
    </>
  );
};

export const FloatingModal = Object.assign(FloatingModalMain, {
  Body: FloatingModalBody,
  Tail: FloatingModalTail,
});
