import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import styles from './ClubCard.module.css';

export type ClubBrand = 'red' | 'green' | 'black';

export interface ClubCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Название клуба (в Figma меняется оверрайдом) */
  name: string;
  /** Станция метро */
  metro: string;
  /** Цвет линии метро — данные, а не токен ДС (в Figma #8D489C) */
  metroColor?: string;
  address: string;
  /** Сеть клуба → токен clubs/* для логотипа */
  brand?: ClubBrand;
  onAddress?: () => void;
  onPhone?: () => void;
}

/** Club Card — Figma 651:4915. Карточка клуба в списке выбора клуба, 343×100. */
export function ClubCard({
  name,
  metro,
  metroColor,
  address,
  brand = 'red',
  onAddress,
  onPhone,
  className,
  ...rest
}: ClubCardProps) {
  return (
    <article className={cx(styles.root, className)} {...rest}>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <span className={cx(styles.logo, styles[brand])} aria-hidden="true" />
          <span className={cx(styles.primary, 'ds-cart-chips')}>{name}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.metroRow}>
            <span className={styles.metroLine} style={metroColor ? { background: metroColor } : undefined} aria-hidden="true" />
            <span className={cx(styles.secondary, 'ds-caption-cart_text-14')}>{metro}</span>
          </div>
          <span className={cx(styles.secondary, styles.address, 'ds-caption-cart_text-18')}>{address}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.action} aria-label="Адрес на карте" onClick={onAddress}>
          <Icon name="20px / address" size={18} />
        </button>
        <button type="button" className={styles.action} aria-label="Позвонить" onClick={onPhone}>
          <Icon name="20px / phone" size={18} />
        </button>
      </div>
    </article>
  );
}
