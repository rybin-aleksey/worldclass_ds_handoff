import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './HelperText.module.css';

export type HelperTextState = 'default' | 'negative' | 'success' | 'disabled';

export interface HelperTextProps extends HTMLAttributes<HTMLDivElement> {
  /** State: Default | Negative | Success | Disabled */
  state?: HelperTextState;
  /** Helper Text */
  helperText: string;
}

/** Helper Text — Figma 2223:4612. Подсказка или сообщение под полем; вложен в Text Field. */
export function HelperText({ state = 'default', helperText, className, ...rest }: HelperTextProps) {
  return (
    <div
      role={state === 'negative' ? 'alert' : undefined}
      className={cx(styles.root, styles[state], className)}
      {...rest}
    >
      {/* alert-circle 16×16 — локальный вектор компонента в Figma (не входит в набор Icons) */}
      <svg className={styles.icon} viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
        <circle cx="8" cy="8" r="6.67" stroke="currentColor" strokeWidth="1.33" />
        <path d="M8 5.33V8" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
        <path d="M8 10.67h.01" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
      </svg>
      <span className={styles.text}>{helperText}</span>
    </div>
  );
}
