import type { InputHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Radio } from '../Radio';
import styles from './RadioRow.module.css';

export interface RadioRowProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  /** isActive: Yes | No */
  isActive?: boolean;
  /** Label */
  label: string;
}

/** Radio Row — Figma 40000391:2983. Строка выбора одного варианта: срок и сумма рассрочки. */
export function RadioRow({ isActive = false, label, className, ...rest }: RadioRowProps) {
  return (
    <label className={cx(styles.root, className)}>
      <Radio isActive={isActive} {...rest} />
      <span className={cx(styles.label, 'ds-cart-chips')}>{label}</span>
    </label>
  );
}
