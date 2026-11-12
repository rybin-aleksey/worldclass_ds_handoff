import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import { ClubImageAvatar } from '../ClubImageAvatar';
import styles from '../_shared/Row.module.css';

export interface ClubRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  address: string;
  /** Show Chevron (по умолчанию false) */
  showChevron?: boolean;
  /** Вложенный Club Image / Avatar → Club */
  club?: 1;
  imageSrc?: string;
}

/** Club Row — Figma 40000432:707. Строка клуба 343×56: фото, название, адрес; шеврон по умолчанию скрыт. */
export function ClubRow({ name, address, showChevron = false, club = 1, imageSrc, className, ...rest }: ClubRowProps) {
  return (
    <button type="button" className={cx(styles.root, className)} {...rest}>
      <ClubImageAvatar club={club} src={imageSrc} />
      <span className={styles.info}>
        <span className={cx(styles.title, 'ds-heading-text-20')}>{name}</span>
        <span className={cx(styles.subtitle, 'ds-caption-cart_text-14')}>{address}</span>
      </span>
      {showChevron && <Icon name="20px / chevron-right" className={styles.chevron} />}
    </button>
  );
}
