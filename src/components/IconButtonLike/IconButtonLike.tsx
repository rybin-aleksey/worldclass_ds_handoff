import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import styles from './IconButtonLike.module.css';

export interface IconButtonLikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** isLiked: Yes | No */
  isLiked?: boolean;
}

/** Icon Button / Like — Figma 1665:3266. Кнопка «в избранное», вложена в карточки тренера и тренировки. */
export function IconButtonLike({ isLiked = false, className, ...rest }: IconButtonLikeProps) {
  return (
    <button
      type="button"
      aria-pressed={isLiked}
      aria-label={isLiked ? 'Убрать из избранного' : 'В избранное'}
      className={cx(styles.root, isLiked && styles.liked, className)}
      {...rest}
    >
      <Icon name="16px / like" />
    </button>
  );
}
