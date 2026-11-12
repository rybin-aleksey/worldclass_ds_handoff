import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon, type IconName } from '../Icon';
import styles from './HeaderNavbar.module.css';

export interface HeaderNavbarProps extends HTMLAttributes<HTMLElement> {
  /** Title (в Figma меняется оверрайдом) */
  title: string;
  /** Показать кнопку «Назад» (Back 23×36) */
  showBack?: boolean;
  onBack?: () => void;
  /** Иконка справа; null — без действия. По умолчанию — 24px / filter, как в Figma */
  actionIcon?: IconName | null;
  actionLabel?: string;
  onAction?: () => void;
}

/** Header / Navbar — Figma 1025:7758. Шапка экрана 375×92 (с зоной статус-бара 48 px). */
export function HeaderNavbar({
  title,
  showBack = true,
  onBack,
  actionIcon = '24px / filter',
  actionLabel = 'Фильтр',
  onAction,
  className,
  ...rest
}: HeaderNavbarProps) {
  return (
    <header className={cx(styles.root, className)} {...rest}>
      <div className={styles.container}>
        {showBack && (
          <button type="button" className={styles.back} aria-label="Назад" onClick={onBack}>
            <Icon name="Back" />
          </button>
        )}
        <h1 className={cx(styles.title, 'ds-heading-text-20')}>{title}</h1>
        {actionIcon && (
          <button type="button" className={styles.action} aria-label={actionLabel} onClick={onAction}>
            <Icon name={actionIcon} />
          </button>
        )}
      </div>
    </header>
  );
}
