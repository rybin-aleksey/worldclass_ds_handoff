import { useState, type HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './TrainingDescription.module.css';

export interface TrainingDescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onToggle'> {
  /** isTruncate: Yes — свёрнуто с «Подробнее», No — полностью со «Свернуть». Если не задан — управляет собой сам. */
  isTruncate?: boolean;
  defaultTruncate?: boolean;
  onToggle?: (isTruncate: boolean) => void;
  title: string;
  description: string;
}

/** Training Description — Figma 1398:3380. Описание занятия, свёрнутое или полное. */
export function TrainingDescription({
  isTruncate,
  defaultTruncate = true,
  onToggle,
  title,
  description,
  className,
  ...rest
}: TrainingDescriptionProps) {
  const [inner, setInner] = useState(defaultTruncate);
  const truncated = isTruncate ?? inner;
  const toggle = () => {
    setInner(!truncated);
    onToggle?.(!truncated);
  };
  return (
    <section className={cx(styles.root, className)} {...rest}>
      <h3 className={cx(styles.title, 'ds-heading-medium')}>{title}</h3>
      <p className={cx(styles.description, truncated && styles.truncate, 'ds-regular-text')}>{description}</p>
      <button type="button" className={cx(styles.toggle, 'ds-cart-chips')} aria-expanded={!truncated} onClick={toggle}>
        {truncated ? 'Подробнее' : 'Свернуть'}
      </button>
    </section>
  );
}
