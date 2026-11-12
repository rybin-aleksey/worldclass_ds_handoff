import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { TrainerPhotoSmall } from '../TrainerPhotoSmall';
import styles from './TrainerCardSmall.module.css';

export interface TrainerCardSmallProps extends HTMLAttributes<HTMLDivElement> {
  /** Name (в две строки: имя и фамилия) */
  name: string;
  /** Вложенный Trainer Photo / Small → Trainer */
  trainer?: 1 | 2 | 3;
  photoSrc?: string;
}

/** Trainer Card / Small — Figma 40000419:672. Компактная карточка тренера 140 px: фото и имя. */
export function TrainerCardSmall({ name, trainer = 3, photoSrc, className, ...rest }: TrainerCardSmallProps) {
  return (
    <article className={cx(styles.root, className)} {...rest}>
      <TrainerPhotoSmall trainer={trainer} src={photoSrc} />
      <span className={cx(styles.name, 'ds-cart-text-20')}>{name}</span>
    </article>
  );
}
