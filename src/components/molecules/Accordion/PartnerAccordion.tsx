import { Accordion } from '.';
import styles from './PartnerAccordion.module.scss';
import EmptyCompanyProfile from '../../../assets/svgs/empty-company-profile.svg';

export interface PartnerAccordionProps {
  title?: string;
  children?: React.ReactNode;
}

export const PartnerAccordion = ({
  title,
  children,
}: PartnerAccordionProps) => (
  <Accordion className={styles['partner-accordion']}>
    <Accordion.Title className={styles['title-container']}>
      <div className={styles['title-contents']}>
        <img
          src={EmptyCompanyProfile}
          className={styles['partner-profile-icon']}
          alt="partner-profile"
        />
        <span className={styles['title-text']}>{title}</span>
      </div>
    </Accordion.Title>
    <Accordion.Contents className={styles.contents}>
      {children}
    </Accordion.Contents>
  </Accordion>
);
