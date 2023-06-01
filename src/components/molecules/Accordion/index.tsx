import { createContext, useContext, useRef } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { ChevronDown } from 'react-feather';

import styles from './index.module.scss';
import { useSubscribedState } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Hr } from '../../atoms';

interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

const AccordionContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>> | undefined]
>([false, undefined]);

export interface AccordionProps extends CommonProps {
  opened?: boolean;
}
const AccordionMain = ({
  children,
  className,
  opened = false,
}: AccordionProps) => {
  const openState = useSubscribedState(opened);
  return (
    <dl
      className={cleanClassName(
        `${styles['accordian-container']} ${className}`,
      )}
    >
      <AccordionContext.Provider value={openState}>
        {children}
      </AccordionContext.Provider>
    </dl>
  );
};

export type AccordionTitleProps = CommonProps;
const AccordionTitle = ({ children, className }: AccordionTitleProps) => {
  const [opened, setOpened] = useContext(AccordionContext);
  return (
    <dt className={styles['accordian-title-wrap']}>
      <button
        type="button"
        className={cleanClassName(`${styles['accordian-title']} ${className}`)}
        onClick={() => setOpened?.(() => !opened)}
      >
        <div className={styles['title-contents']}>{children}</div>
        <ChevronDown
          className={cleanClassName(
            `${styles['chevron-down-icon']} ${opened && styles.opened}`,
          )}
        />
      </button>
    </dt>
  );
};

export type AccordionContentsProps = CommonProps;
const AccordionContents = ({ children, className }: AccordionContentsProps) => {
  const [opened] = useContext(AccordionContext);
  const ref = useRef<HTMLElement>(null);
  return (
    <dd
      className={cleanClassName(`${styles['accordian-contents-wrap']}`)}
      style={{
        height: opened ? ref.current?.scrollHeight ?? 0 : 0,
      }}
    >
      <Hr />
      <article
        ref={ref}
        className={cleanClassName(
          `${styles['accordian-contents']} ${
            opened && styles.opened
          } ${className}`,
        )}
      >
        {children}
      </article>
    </dd>
  );
};

export const Accordion = Object.assign(AccordionMain, {
  Title: AccordionTitle,
  Contents: AccordionContents,
});
