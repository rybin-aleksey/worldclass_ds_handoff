import { useId, useState, type HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import styles from './AccordionCorporateProgram.module.css';

export interface AccordionCorporateProgramProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onToggle'> {
  /** dropdown_isOpen: no | yes. Если не задан — аккордеон управляет собой сам. */
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  uploadTitle?: string;
  uploadHint?: string;
  onUpload?: () => void;
}

/** Accordion / Corporate Program — Figma 701:4604. Аккордеон с блоком загрузки файлов. */
export function AccordionCorporateProgram({
  isOpen,
  defaultOpen = false,
  onToggle,
  title = 'Корпоративная программа',
  description = 'Скидку 20% на клубные карты как для взрослых, так и для детей получают сотрудники компаний-партнёров. Загрузите документ, подтверждающий место работы.',
  uploadTitle = 'Загрузите файлы',
  uploadHint = 'Выписку с работы или копию трудового договора',
  onUpload,
  className,
  ...rest
}: AccordionCorporateProgramProps) {
  const [inner, setInner] = useState(defaultOpen);
  const open = isOpen ?? inner;
  const contentId = useId();
  const toggle = () => {
    setInner(!open);
    onToggle?.(!open);
  };
  return (
    <div className={cx(styles.root, open && styles.open, className)} {...rest}>
      <button type="button" className={styles.header} aria-expanded={open} aria-controls={contentId} onClick={toggle}>
        <span className={cx(styles.title, 'ds-heading-text-24')}>{title}</span>
        <span className={styles.iconBox}>
          <Icon name="20px / chevron-right" className={styles.chevron} />
        </span>
      </button>
      {open && (
        <div id={contentId} className={styles.content}>
          <p className={cx(styles.description, 'ds-cart-text-20')}>{description}</p>
          <button type="button" className={styles.upload} onClick={onUpload}>
            <span className={styles.uploadInfo}>
              <span className={cx(styles.title, 'ds-heading-text-20')}>{uploadTitle}</span>
              <span className={cx(styles.hint, 'ds-caption-cart_text-18')}>{uploadHint}</span>
            </span>
            <Icon name="20px / chevron-right" className={styles.chevron} />
          </button>
        </div>
      )}
    </div>
  );
}
