import type { InputHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  /** isActive: false | true */
  isActive?: boolean;
  /** Доступное имя, если переключатель без видимой подписи */
  label?: string;
}

/** Switch — Figma 761:4124. Переключатель 51×32. */
export function Switch({ isActive = false, label, className, ...rest }: SwitchProps) {
  return (
    <span className={cx(styles.root, className)}>
      <input
        type="checkbox"
        role="switch"
        className={styles.input}
        checked={isActive}
        aria-label={label}
        readOnly={!rest.onChange}
        {...rest}
      />
      <span className={styles.track} aria-hidden="true" />
    </span>
  );
}
