import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon, type IconName } from '../Icon';
import styles from './SelectRow.module.css';

export interface SelectRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lines: 1 — только заголовок, 2 — заголовок и подпись */
  lines?: 1 | 2;
  /** Title */
  title: string;
  /** Subtitle (только при Lines=2) */
  subtitle?: string;
  /** Icon (INSTANCE_SWAP, 24px; предпочтительные calendar, rouble) */
  icon?: IconName;
  /** Show Chevron */
  showChevron?: boolean;
}

/** Select / Row — Figma 40000434:731. Строка выбора с иконкой в плитке 56×56 и шевроном. */
export function SelectRow({
  lines = 1,
  title,
  subtitle = 'В клубе',
  icon = '24px / calendar',
  showChevron = true,
  className,
  ...rest
}: SelectRowProps) {
  return (
    <button type="button" className={cx(styles.root, className)} {...rest}>
      <span className={styles.tile}>
        <Icon name={icon} />
      </span>
      <span className={styles.info}>
        <span className={cx(styles.title, 'ds-heading-text-20')}>{title}</span>
        {lines === 2 && <span className={cx(styles.subtitle, 'ds-caption-cart_text-14')}>{subtitle}</span>}
      </span>
      {showChevron && <Icon name="20px / chevron-right" className={styles.chevron} />}
    </button>
  );
}
