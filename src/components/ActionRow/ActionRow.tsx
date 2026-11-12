import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon, type IconName } from '../Icon';
import styles from './ActionRow.module.css';

export interface ActionRowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Label */
  label: string;
  /** Icon (INSTANCE_SWAP, 24px) */
  icon?: IconName;
}

/** Action Row — Figma 40000223:714. Строка действия: иконка в плитке и подпись. */
export function ActionRow({ label, icon = '24px / receipt', className, ...rest }: ActionRowProps) {
  return (
    <button type="button" className={cx(styles.root, className)} {...rest}>
      <span className={styles.tile}>
        <Icon name={icon} />
      </span>
      <span className={cx(styles.label, 'ds-heading-text-20')}>{label}</span>
    </button>
  );
}
