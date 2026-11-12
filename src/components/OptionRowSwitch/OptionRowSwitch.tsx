import type { InputHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Switch } from '../Switch';
import styles from './OptionRowSwitch.module.css';

export interface OptionRowSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  /** Title (в Figma меняется оверрайдом) */
  title: string;
  /** isActive вложенного Switch */
  isActive?: boolean;
}

/** Option Row / Switch — Figma 701:4405. Строка опции с подписью и переключателем. */
export function OptionRowSwitch({ title, isActive = false, className, ...rest }: OptionRowSwitchProps) {
  return (
    <label className={cx(styles.root, className)}>
      <span className={cx(styles.title, 'ds-heading-text-24')}>{title}</span>
      <Switch isActive={isActive} {...rest} />
    </label>
  );
}
