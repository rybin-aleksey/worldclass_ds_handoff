import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import worldclassArt from '../../assets/membership/worldclass.svg';
import kidsArt from '../../assets/membership/kids.svg';
import familyArt from '../../assets/membership/family.svg';
import styles from './MembershipCard.module.css';

export type MembershipCardType = 'worldclass' | 'kids' | 'family';
export type MembershipCardSize = 'compact' | 'full';

const ART: Record<MembershipCardType, string> = { worldclass: worldclassArt, kids: kidsArt, family: familyArt };
const DEFAULTS: Record<MembershipCardType, { title: string; price: string; freeze: string }> = {
  worldclass: { title: 'Карта «#ЯWorldClass»', price: '134 200 ₽', freeze: 'Возможность заморозки 30 дней' },
  kids: { title: 'Карта «Детская»', price: '79 900 ₽', freeze: 'Возможность заморозки 14 дней' },
  family: { title: 'Карта «Семейная»', price: '195 500 ₽', freeze: 'Возможность заморозки 14 дней' },
};

export interface MembershipCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Type: WorldClass (#ЯWorldClass) | Kids | Family */
  type?: MembershipCardType;
  /** Size: Compact — 282×168, без цены; Full — 343×193, с ценой */
  size?: MembershipCardSize;
  club?: string;
  title?: string;
  price?: string;
  validity?: string;
  freeze?: string;
}

/** Membership Card — Figma 40000318:1090 (6 вариантов: Type × Size). Клубная карта. */
export function MembershipCard({
  type = 'worldclass',
  size = 'full',
  club = 'RedSide',
  title,
  price,
  validity = 'Срок действия карты 365 дней',
  freeze,
  className,
  style,
  ...rest
}: MembershipCardProps) {
  const d = DEFAULTS[type];
  return (
    <div
      className={cx(styles.root, styles[size], className)}
      // Кавычки обязательны: Vite инлайнит SVG < 4 КБ как data:-URI с ' и ( ), без кавычек url() невалиден
      style={{ backgroundImage: `url("${ART[type]}")`, ...style }}
      {...rest}
    >
      <div className={styles.header}>
        <span className={cx(styles.muted, 'ds-caption-cart_text-14')}>{club}</span>
        {size === 'full' ? (
          <div className={styles.titleRow}>
            <span className={cx(styles.strong, 'ds-heading-medium')}>{title ?? d.title}</span>
            <span className={cx(styles.strong, 'ds-heading-medium')}>{price ?? d.price}</span>
          </div>
        ) : (
          <span className={cx(styles.title, 'ds-heading-small-20')}>{title ?? d.title}</span>
        )}
      </div>
      <div className={styles.details}>
        <span className={cx(styles.muted, 'ds-caption-cart_text-14')}>{validity}</span>
        <span className={cx(styles.muted, 'ds-caption-cart_text-14')}>{freeze ?? d.freeze}</span>
      </div>
    </div>
  );
}
