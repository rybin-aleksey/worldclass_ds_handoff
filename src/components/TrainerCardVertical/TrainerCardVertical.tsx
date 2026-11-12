import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { TrainerPhotoVertical } from '../TrainerPhotoVertical';
import { IconButtonLike } from '../IconButtonLike';
import styles from './TrainerCardVertical.module.css';

export interface TrainerCardVerticalProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  category: string;
  experience?: string;
  price: string;
  rating?: string;
  reviews?: string;
  /** Show Experience */
  showExperience?: boolean;
  /** Show Rating */
  showRating?: boolean;
  /** Вложенный Trainer Photo / Vertical → Trainer */
  trainer?: 1 | 2 | 3;
  photoSrc?: string;
  /** Вложенный Icon Button / Like → isLiked */
  isLiked?: boolean;
  onLikeToggle?: () => void;
}

/** Trainer Card / Vertical — Figma 1503:4407. Карточка тренера 168 px. */
export function TrainerCardVertical({
  name,
  category,
  experience = 'Стаж 2 года',
  price,
  rating = '4.7',
  reviews = '3 отзыва',
  showExperience = true,
  showRating = true,
  trainer = 1,
  photoSrc,
  isLiked = false,
  onLikeToggle,
  className,
  ...rest
}: TrainerCardVerticalProps) {
  return (
    <article className={cx(styles.root, className)} {...rest}>
      <div className={styles.media}>
        <TrainerPhotoVertical trainer={trainer} src={photoSrc} className={styles.photo} />
        {showExperience && <span className={cx(styles.badge, 'ds-caption-cart_text-14')}>{experience}</span>}
        <IconButtonLike isLiked={isLiked} onClick={onLikeToggle} className={styles.like} />
      </div>
      <div className={styles.info}>
        <span className={cx(styles.primary, 'ds-cart-text-20')}>{name}</span>
        <div className={styles.meta}>
          <span className={cx(styles.secondary, 'ds-caption-cart_text-14')}>{category}</span>
          {showRating && (
            <div className={cx(styles.rating, styles.secondary, 'ds-caption-cart_text-14')}>
              <span className={styles.star} aria-hidden="true" />
              <span>{rating}</span>
              <span className={styles.dot} aria-hidden="true" />
              <span>{reviews}</span>
            </div>
          )}
        </div>
        <div className={cx(styles.priceRow, styles.primary)}>
          <span className="ds-cart-chips">{price}</span>
          <span className="ds-caption-cart_text-14">&nbsp;/ занятие</span>
        </div>
      </div>
    </article>
  );
}
