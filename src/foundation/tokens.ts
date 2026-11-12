/**
 * Чтение токенов прямо из src/tokens/*.css (?raw-импорт Vite).
 * Раздел Foundation в Storybook ничего не хардкодит: что в CSS, то и в каталоге.
 */
import primitivesCss from '../tokens/primitives.css?raw';
import semanticsCss from '../tokens/semantics.css?raw';
import typographyCss from '../tokens/typography.css?raw';
import motionCss from '../tokens/motion.css?raw';

export interface Token {
  /** Имя без «--» */
  name: string;
  /** Значение как записано в CSS */
  value: string;
  /** Ссылка на другой токен, если значение — var(--x) */
  ref?: string;
  /** Комментарий в строке токена */
  note?: string;
  /** Группа — из заголовка «/* ===== … ===== *\/» */
  group: string;
}

const SECTION = /\/\*\s*=+\s*(.+?)\s*=+/;
const DECL = /--([\w-]+)\s*:\s*([^;]+);(?:\s*\/\*\s*(.*?)\s*\*\/)?/;

export function parseTokens(css: string): Token[] {
  const out: Token[] = [];
  let group = '';
  let inMedia = false;
  for (const line of css.split('\n')) {
    if (/@media/.test(line)) inMedia = true;
    if (inMedia) continue; // значения для prefers-reduced-motion не дублируем
    const s = line.match(SECTION);
    if (s) {
      group = s[1];
      continue;
    }
    const d = line.match(DECL);
    if (!d) continue;
    const value = d[2].trim();
    const ref = value.match(/^var\(--([\w-]+)\)$/)?.[1];
    out.push({ name: d[1], value, ref, note: d[3], group });
  }
  return out;
}

export function groupBy<T>(items: T[], key: (t: T) => string): Array<[string, T[]]> {
  const map = new Map<string, T[]>();
  for (const it of items) {
    const k = key(it);
    map.set(k, [...(map.get(k) ?? []), it]);
  }
  return [...map.entries()];
}

export const primitives = parseTokens(primitivesCss);
export const semantics = parseTokens(semanticsCss);
export const motion = parseTokens(motionCss);

/** Классы текстовых стилей и подписи к ним из typography.css */
export interface TextStyleClass {
  className: string;
  /** Заголовок-комментарий над правилом, например «heading/small — Regular 20/20 и 20/24» */
  title: string;
}

export function parseTextStyles(css: string): TextStyleClass[] {
  const out: TextStyleClass[] = [];
  const seen = new Set<string>();
  let title = '';
  for (const line of css.split('\n')) {
    // однострочный комментарий над правилом: «/* heading/small — Regular 20/20 и 20/24 */»
    const c = line.match(/^\/\*\s*(.+?)\s*\*\/$/);
    if (c) {
      title = c[1];
      continue;
    }
    for (const m of line.matchAll(/^\s*\.(ds-[\w-]+)\s*[,{]/g)) {
      if (!seen.has(m[1])) {
        seen.add(m[1]);
        out.push({ className: m[1], title });
      }
    }
  }
  return out;
}

export const textStyles = parseTextStyles(typographyCss);

/** Цветовые примитивы: группы «Colors / primitives» и raw-значения */
export const isColor = (v: string) => /^#|^rgb/.test(v);
