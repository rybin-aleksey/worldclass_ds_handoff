import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import styles from './HeaderModal.module.css';

export interface HeaderModalProps extends HTMLAttributes<HTMLElement> {
  /** Title (в Figma меняется оверрайдом) */
  title: string;
  /** Показать кнопку «Назад» слева */
  showBack?: boolean;
  onBack?: () => void;
  onClose?: () => void;
}

/** Header / Modal — Figma 1070:3790. Заголовок шторки с ручкой (pull-down-bar), 375×56. */
export function HeaderModal({ title, showBack = true, onBack, onClose, className, ...rest }: HeaderModalProps) {
  return (
    <header className={cx(styles.root, className)} {...rest}>
      <span className={styles.grabber} aria-hidden="true" />
      <div className={styles.navbar}>
        {showBack && (
          <button type="button" className={cx(styles.button, styles.back)} aria-label="Назад" onClick={onBack}>
            <Icon name="Back" />
          </button>
        )}
        <h2 className={cx(styles.title, 'ds-heading-text-20')}>{title}</h2>
        <button type="button" className={cx(styles.button, styles.close)} aria-label="Закрыть" onClick={onClose}>
          <Icon name="24px / xmark" />
        </button>
      </div>
    </header>
  );
}
