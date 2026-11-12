import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './TabsSegmented.module.css';

export interface TabsSegmentedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Segments: 2 (в Figma одно значение) — подписи сегментов */
  segments?: [string, string];
  /** Индекс активного сегмента */
  activeIndex?: 0 | 1;
  onChange?: (index: 0 | 1) => void;
}

/** Tabs / Segmented — Figma 754:3617. Сегментный переключатель на 2 сегмента. */
export function TabsSegmented({
  segments = ['Групповые', 'Персональные'],
  activeIndex = 0,
  onChange,
  className,
  ...rest
}: TabsSegmentedProps) {
  return (
    <div role="tablist" className={cx(styles.root, className)} {...rest}>
      {segments.map((label, i) => (
        <button
          key={label}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          className={cx(styles.segment, 'ds-cart-text-20', i === activeIndex && styles.active)}
          onClick={() => onChange?.(i as 0 | 1)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
