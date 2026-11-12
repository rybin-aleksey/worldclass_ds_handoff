import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import { TrainerPhotoAvatar } from '../TrainerPhotoAvatar';
import styles from '../_shared/Row.module.css';

export interface TrainerRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  category: string;
  /** Show Chevron (по умолчанию true) */
  showChevron?: boolean;
  /** Вложенный Trainer Photo / Avatar → Trainer */
  trainer?: 1 | 2 | 3;
  photoSrc?: string;
}

/** Trainer Row — Figma 40000427:729. Строка тренера 343×56: аватар, имя, категория, шеврон. */
export function TrainerRow({ name, category, showChevron = true, trainer = 1, photoSrc, className, ...rest }: TrainerRowProps) {
  return (
    <button type="button" className={cx(styles.root, className)} {...rest}>
      <TrainerPhotoAvatar trainer={trainer} src={photoSrc} />
      <span className={styles.info}>
        <span className={cx(styles.title, 'ds-cart-text-20')}>{name}</span>
        <span className={cx(styles.subtitle, 'ds-caption-cart_text-14')}>{category}</span>
      </span>
      {showChevron && <Icon name="20px / chevron-right" className={styles.chevron} />}
    </button>
  );
}
