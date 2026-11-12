import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import { Button } from '../Button';
import styles from './FormPassportData.module.css';

export type FormPassportDataState = 'empty' | 'filled';

export interface FormPassportDataProps extends HTMLAttributes<HTMLDivElement> {
  /** State: Empty — строка-приглашение; Filled — список файлов и кнопка */
  state?: FormPassportDataState;
  /** Title */
  title?: string;
  /** Label (Empty) */
  label?: string;
  /** Hint (Empty) */
  hint?: string;
  /** Files Title (Filled) */
  filesTitle?: string;
  /** Список вложенных файлов (Filled) */
  files?: string[];
  /** Label вложенной кнопки Button Size=Small */
  buttonLabel?: string;
  onUpload?: () => void;
  onRemoveFile?: (index: number) => void;
}

/** Form / Passport Data — Figma 40000478:651. Загрузка фото или скана документа. */
export function FormPassportData({
  state = 'empty',
  title = 'Паспортные данные',
  label = 'Фотография паспорта',
  hint = 'Загрузите фотографию/скан паспорта',
  filesTitle = 'Вложенные файлы',
  files = ['IMG__.png'],
  buttonLabel = 'Добавить вложения',
  onUpload,
  onRemoveFile,
  className,
  ...rest
}: FormPassportDataProps) {
  return (
    <div className={cx(styles.root, className)} {...rest}>
      <div className={cx(styles.title, 'ds-heading-small-20')}>{title}</div>
      {state === 'empty' ? (
        <button type="button" className={styles.uploadRow} onClick={onUpload}>
          <span className={styles.info}>
            <span className={cx(styles.label, 'ds-heading-text-20')}>{label}</span>
            <span className={cx(styles.hint, 'ds-caption-cart_text-14')}>{hint}</span>
          </span>
          <Icon name="20px / chevron-right" className={styles.chevron} />
        </button>
      ) : (
        <div className={styles.container}>
          <div className={styles.fileContainer}>
            <div className={styles.fileHeader}>
              <span className={cx(styles.label, 'ds-cart-chips')}>{filesTitle}</span>
              <span className={cx(styles.count, 'ds-caption-small-12')}>{files.length}</span>
            </div>
            <ul className={styles.files}>
              {files.map((file, i) => (
                <li key={`${file}-${i}`} className={styles.fileItem}>
                  <span className={cx(styles.label, 'ds-caption-small-12')}>{file}</span>
                  <button
                    type="button"
                    className={styles.remove}
                    aria-label={`Удалить ${file}`}
                    onClick={() => onRemoveFile?.(i)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button type="primary" size="small" label={buttonLabel} onClick={onUpload} />
        </div>
      )}
    </div>
  );
}
