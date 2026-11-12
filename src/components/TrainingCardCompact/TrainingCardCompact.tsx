import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { TrainingImageCompact } from '../TrainingImageCompact';
import { IconButtonLike } from '../IconButtonLike';
import { Button } from '../Button';
import styles from './TrainingCardCompact.module.css';

export interface TrainingCardCompactProps extends HTMLAttributes<HTMLDivElement> {
  availability?: string;
  time: string;
  title: string;
  instructor: string;
  /** Show Availability */
  showAvailability?: boolean;
  /** Вложенный Training Image / Compact → Image */
  image?: 1;
  imageSrc?: string;
  /** Вложенный Icon Button / Like → isLiked */
  isLiked?: boolean;
  onLikeToggle?: () => void;
  /** Вложенный Button Size=Small → Label */
  buttonLabel?: string;
  onBook?: () => void;
}

/** Training Card / Compact — Figma 1706:2503. Карточка тренировки 164×256. */
export function TrainingCardCompact({
  availability = '12 мест',
  time,
  title,
  instructor,
  showAvailability = true,
  image = 1,
  imageSrc,
  isLiked = false,
  onLikeToggle,
  buttonLabel = 'Записаться',
  onBook,
  className,
  ...rest
}: TrainingCardCompactProps) {
  return (
    <article className={cx(styles.root, className)} {...rest}>
      <div className={styles.media}>
        <TrainingImageCompact image={image} src={imageSrc} className={styles.image} />
        {showAvailability && <span className={cx(styles.badge, 'ds-caption-cart_text-18')}>{availability}</span>}
        <IconButtonLike isLiked={isLiked} onClick={onLikeToggle} className={styles.like} />
      </div>
      <div className={styles.info}>
        <div className={styles.heading}>
          <span className={cx(styles.secondary, 'ds-caption-cart_text-14')}>{time}</span>
          <span className={cx(styles.primary, 'ds-cart-chips')}>{title}</span>
        </div>
        <span className={cx(styles.secondary, styles.ellipsis, 'ds-caption-cart_text-14')}>{instructor}</span>
      </div>
      <Button type="primary" size="small" label={buttonLabel} onClick={onBook} />
    </article>
  );
}
