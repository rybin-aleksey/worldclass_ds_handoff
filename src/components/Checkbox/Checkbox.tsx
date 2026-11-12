import type { InputHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  /** isActive: Yes | No */
  isActive?: boolean;
  /** Доступное имя, если флажок без видимой подписи */
  label?: string;
}

/** Checkbox — Figma 1665:2354. Флажок 20×20. */
export function Checkbox({ isActive = false, label, className, ...rest }: CheckboxProps) {
  return (
    <span className={cx(styles.root, className)}>
      <input type="checkbox" className={styles.input} checked={isActive} aria-label={label} readOnly={!rest.onChange} {...rest} />
      <span className={styles.box} aria-hidden="true" />
    </span>
  );
}
