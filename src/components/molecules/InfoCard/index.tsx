import nodeToString from 'react-node-to-string';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms';

export interface InfoCardProps {
  icon?: React.ReactNode;
  title?: string;
  date?: string;
  table?: {
    [name: string]: string;
  };
  children?: React.ReactNode;
  className?: string;
  onBodyCopy?: (value?: string) => void;
}

export const InfoCard = ({
  icon,
  title,
  date,
  table,
  children,
  className,
  onBodyCopy,
}: InfoCardProps) => (
  <article className={cleanClassName(`${styles['info-card']} ${className}`)}>
    <header className={styles.header}>
      {icon}
      {title ? <b className={styles.title}>{title}</b> : null}
      {date ? <small className={styles.date}>{date}</small> : null}
    </header>
    {table ? (
      <dl className={styles.table}>
        {Object.keys(table).map((key) => (
          <>
            <dt className={styles['table-title']}>{key}</dt>
            <dd className={styles['table-data']}>{table[key]}</dd>
          </>
        ))}
      </dl>
    ) : null}
    <section className={styles.body}>
      {children}
      {onBodyCopy ? (
        <Button
          className={styles['copy-button']}
          size="small"
          fontSize="small"
          onClick={() => {
            const childrenString = nodeToString(children);
            navigator.clipboard.writeText(childrenString);
            onBodyCopy(childrenString);
          }}
        >
          복사하기
        </Button>
      ) : null}
    </section>
  </article>
);
