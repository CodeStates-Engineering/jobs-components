import { Button } from '@components/atoms';

import styles from './index.module.scss';
import NotFoundImage from '../../../assets/svgs/404.svg';

export interface NotFoundProps {
  description: string;
  buttonTitle?: string;
  onConfirm?: () => void;
}

export const NotFound = ({
  description,
  buttonTitle,
  onConfirm,
}: NotFoundProps) => (
  <div className={styles['not-found-container']}>
    <img
      src={NotFoundImage}
      className={styles['not-found-icon']}
      alt="page not found"
    />
    <p className={styles.description}>{description}</p>
    {onConfirm && (
      <Button
        width={'166px'}
        onClick={() => {
          onConfirm?.();
        }}
      >
        {buttonTitle}
      </Button>
    )}
  </div>
);
