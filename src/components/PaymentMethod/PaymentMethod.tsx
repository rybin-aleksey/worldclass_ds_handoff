import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './PaymentMethod.module.css';

export interface PaymentMethodProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** isActive: false | true — выбранная строка с галочкой */
  isActive?: boolean;
  /** Label */
  label: string;
}

/** Payment Method — Figma 1233:4768. Строка способа оплаты (СБП, «Наличными в клубе», «Карта»). */
export function PaymentMethod({ isActive = false, label, className, ...rest }: PaymentMethodProps) {
  return (
    <button type="button" role="radio" aria-checked={isActive} className={cx(styles.root, className)} {...rest}>
      <span className={cx(styles.text, 'ds-heading-text-24')}>{label}</span>
      {isActive && <span className={styles.check} aria-hidden="true" />}
    </button>
  );
}
