import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface InfoCardProps {
  icon?: React.ReactNode;
  title?: string;
  date?: string;
  table?: {
    [name: string]: string;
  };
  children?: React.ReactNode;
  className?: string;
}

export const InfoCard = ({
  icon,
  title,
  date,
  table,
  children,
  className,
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
    <section className={styles.body}>{children}</section>
  </article>
);
