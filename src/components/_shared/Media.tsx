import type { HTMLAttributes } from 'react';
import { cx } from './cx';
import styles from './Media.module.css';

export type MediaFormat =
  | 'trainerSmall'
  | 'trainerVertical'
  | 'trainerAvatar'
  | 'trainingCompact'
  | 'trainingAvatar'
  | 'clubAvatar';

export interface MediaBaseProps extends HTMLAttributes<HTMLDivElement> {
  /** Ссылка на фото. Без неё показывается фон-плейсхолдер формата. */
  src?: string;
  alt?: string;
}

/**
 * Общая основа медиа-компонентов (раздел Cards → Медиа).
 * У каждого формата свой размер, скругление и фон; меняется только содержимое.
 */
export function Media({ format, src, alt = '', className, ...rest }: MediaBaseProps & { format: MediaFormat }) {
  return (
    <div className={cx(styles.root, styles[format], className)} {...rest}>
      {src && <img className={styles.img} src={src} alt={alt} />}
    </div>
  );
}
