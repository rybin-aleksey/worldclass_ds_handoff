import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './IconButtonClose.module.css';

export type IconButtonCloseStyle = 'light' | 'overlay' | 'dark';

export interface IconButtonCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Style из Figma (проп назван variant: `style` в React занят инлайн-стилями).
   * Light — шторки и описание клуба; Overlay — экраны «Оплата картой»; Dark — поверх фото.
   */
  variant?: IconButtonCloseStyle;
}

/** Icon Button / Close — Figma 40000490:677. Круглая кнопка закрытия 28×28. */
export function IconButtonClose({ variant = 'light', className, ...rest }: IconButtonCloseProps) {
  return (
    <button type="button" aria-label="Закрыть" className={cx(styles.root, styles[variant], className)} {...rest}>
      <span className={styles.cross} aria-hidden="true" />
    </button>
  );
}
