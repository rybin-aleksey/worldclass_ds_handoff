import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import { TrainingImageAvatar } from '../TrainingImageAvatar';
import styles from '../_shared/Row.module.css';

export interface TrainingRowProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Title */
  title: string;
  /** Type — тип тренировки (проп из Figma, не HTML-тип кнопки) */
  type: string;
  /** Show Chevron (по умолчанию true) */
  showChevron?: boolean;
  /** Вложенный Training Image / Avatar → Image */
  image?: 1;
  imageSrc?: string;
}

/** Training Row — Figma 40000432:699. Строка тренировки 343×56: фото, название, тип, шеврон. */
export function TrainingRow({ title, type, showChevron = true, image = 1, imageSrc, className, ...rest }: TrainingRowProps) {
  return (
    <button type="button" className={cx(styles.root, className)} {...rest}>
      <TrainingImageAvatar image={image} src={imageSrc} />
      <span className={styles.info}>
        <span className={cx(styles.title, 'ds-heading-text-20')}>{title}</span>
        <span className={cx(styles.subtitle, 'ds-caption-cart_text-14')}>{type}</span>
      </span>
      {showChevron && <Icon name="20px / chevron-right" className={styles.chevron} />}
    </button>
  );
}
