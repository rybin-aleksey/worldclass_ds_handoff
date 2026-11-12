import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Token } from './tokens';
import styles from './FoundationKit.module.css';

/** Вычисленное значение CSS-переменной в текущем документе. */
export function useCssVar(name: string) {
  const [v, setV] = useState('');
  useEffect(() => {
    setV(getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim());
  }, [name]);
  return v;
}

export function Page({ title, lead, children }: { title: string; lead?: ReactNode; children: ReactNode }) {
  return (
    <div className={styles.page}>
      <h1 className="ds-heading-medium_bold">{title}</h1>
      {lead && <p className={`${styles.muted} ds-cart-text-20`}>{lead}</p>}
      {children}
    </div>
  );
}

export function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.group}>
      <h2 className="ds-heading-text-18">{title}</h2>
      {children}
    </section>
  );
}

/** Свотч цвета: имя, значение в CSS, ссылка на примитив и вычисленное значение. */
export function Swatch({ token }: { token: Token }) {
  const resolved = useCssVar(token.name);
  return (
    <div className={styles.swatch}>
      <span className={styles.color} style={{ background: `var(--${token.name})` }} />
      <code className="ds-caption-small-16">--{token.name}</code>
      {token.ref ? (
        <span className={`${styles.ref} ds-caption-small-12`}>→ --{token.ref}</span>
      ) : null}
      <span className={`${styles.muted} ds-caption-small-12`}>{resolved || token.value}</span>
      {token.note && <span className={`${styles.note} ds-caption-small-12`}>{token.note}</span>}
    </div>
  );
}

export function Swatches({ tokens }: { tokens: Token[] }) {
  return (
    <div className={styles.swatches}>
      {tokens.map((t) => (
        <Swatch key={t.name} token={t} />
      ))}
    </div>
  );
}

/** Строка токена с наглядным образцом (ширина, радиус, текст). */
export function TokenRow({ token, sample }: { token: Token; sample: ReactNode }) {
  const resolved = useCssVar(token.name);
  return (
    <div className={styles.row}>
      <code className="ds-caption-small-16">--{token.name}</code>
      <span className={`${styles.muted} ds-caption-small-16`}>{resolved || token.value}</span>
      <div className={styles.sample}>{sample}</div>
    </div>
  );
}

/** Метрики текстового стиля, прочитанные из отрендеренного узла. */
export function TextStyleRow({ className, title }: { className: string; title: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [m, setM] = useState('');
  useEffect(() => {
    if (!ref.current) return;
    const cs = getComputedStyle(ref.current);
    setM(`${cs.fontSize} / ${cs.lineHeight} · ${cs.fontWeight} · ${cs.letterSpacing}`);
  }, [className]);
  return (
    <div className={styles.textRow}>
      <div className={styles.textMeta}>
        <code className="ds-caption-small-16">.{className}</code>
        <span className={`${styles.muted} ds-caption-small-12`}>{title}</span>
        <span className={`${styles.muted} ds-caption-small-12`}>{m}</span>
      </div>
      <span ref={ref} className={className}>
        Персональная тренировка в клубе RedSide
      </span>
    </div>
  );
}

export { styles as kitStyles };
