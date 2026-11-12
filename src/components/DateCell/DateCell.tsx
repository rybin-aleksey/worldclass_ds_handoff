import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './DateCell.module.css';

export interface DateCellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** isActive: false | true — выбранный день */
  isActive?: boolean;
  /** isDotted: точка-индикатор под числом (в Figma только у неактивной ячейки) */
  isDotted?: boolean;
  /** Day — день недели */
  day: string;
  /** Number — число */
  number: string;
}

/** Date Cell — Figma 1595:2255. Ячейка дня в ленте дат. */
export function DateCell({ isActive = false, isDotted = false, day, number, className, ...rest }: DateCellProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      className={cx(styles.root, isActive && styles.active, isDotted && !isActive && styles.dotted, className)}
      {...rest}
    >
      <span className={styles.text}>
        <span className="ds-cart-chips">{day}</span>
        <span className="ds-heading-text-20">{number}</span>
      </span>
      {isDotted && !isActive && <span className={styles.dot} aria-hidden="true" />}
    </button>
  );
}
