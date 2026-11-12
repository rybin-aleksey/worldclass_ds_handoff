import type { SVGAttributes } from 'react';
import { cx } from '../_shared/cx';
import activitySrc from '../../assets/icons/activity.png';
import { ICON_SVG } from './icons';
import styles from './Icon.module.css';

/**
 * 26 иконок ДС (Foundations → Icons, 40000166:6047). Имена — как в Figma.
 * SVG перенесены из Figma; цвет — currentColor, задаётся родителем токеном icons/*.
 */
export type IconName = keyof typeof ICON_SVG;
export const ICON_NAMES = Object.keys(ICON_SVG) as IconName[];

/** Размеры иконок из Figma: [ширина, высота] */
export const ICON_SIZES = Object.fromEntries(
  ICON_NAMES.map((n) => [n, [ICON_SVG[n].w, ICON_SVG[n].h]]),
) as unknown as Record<IconName, readonly [number, number]>;

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
  /** Имя иконки из Figma, например «24px / calendar». */
  name: IconName;
  /** Переопределить размер (px) — для иконок, уменьшенных в составе компонента. */
  size?: number;
  /** Доступное имя; без него иконка декоративная (aria-hidden). */
  title?: string;
}

export function Icon({ name, size, title, className, style, ...rest }: IconProps) {
  const def = ICON_SVG[name];
  const width = size ?? def.w;
  const height = size ? Math.round((size / def.w) * def.h) : def.h;
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true as const };

  if (!('body' in def)) {
    // activity — растровое изображение в Figma
    return (
      <img
        src={activitySrc}
        alt={title ?? ''}
        width={width}
        height={height}
        data-icon={name}
        className={cx(styles.root, styles.raster, className)}
        style={style}
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${def.w} ${def.h}`}
      width={width}
      height={height}
      fill="none"
      data-icon={name}
      focusable="false"
      className={cx(styles.root, className)}
      style={style}
      {...a11y}
      {...rest}
      dangerouslySetInnerHTML={{ __html: def.body }}
    />
  );
}
