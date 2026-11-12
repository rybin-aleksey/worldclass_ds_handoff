import type { InputHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  /** isActive: Yes | No */
  isActive?: boolean;
  /** Доступное имя, если радио без видимой подписи */
  label?: string;
}

/** Radio — Figma 1691:4450. Радиокнопка 16×16; вложена в Radio Row. */
export function Radio({ isActive = false, label, className, ...rest }: RadioProps) {
  return (
    <span className={cx(styles.root, className)}>
      <input type="radio" className={styles.input} checked={isActive} aria-label={label} readOnly={!rest.onChange} {...rest} />
      <span className={styles.circle} aria-hidden="true" />
    </span>
  );
}
