import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Page, Swatches, TextStyleRow, TokenRow, kitStyles } from './FoundationKit';
import { groupBy, isColor, motion, primitives, semantics, textStyles } from './tokens';

/**
 * Foundation — глобальные (Primitive) и смысловые (Semantic) переменные ДС World Class.
 * Значения читаются из src/tokens/*.css, источник — ds/foundation.md и Figma Variables.
 */
const meta = {
  title: 'Foundation',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const colorPrimitives = primitives.filter((t) => isColor(t.value) && !t.name.startsWith('raw-'));
const rawPrimitives = primitives.filter((t) => t.name.startsWith('raw-'));
const byPrefix = (p: string) => primitives.filter((t) => t.name.startsWith(p));

/** Primitive — палитра: шкалы gray, brand, error, success, warning по 15 шагов. */
export const Primitive: Story = {
  name: 'Primitive',
  render: () => (
    <Page title="Primitive — палитра" lead="Слой 1. В Figma — Colors / primitives/*. Литералы живут только здесь.">
      {groupBy(colorPrimitives, (t) => t.name.split('-')[0]).map(([scale, tokens]) => (
        <Group key={scale} title={`primitives/${scale}/*`}>
          <Swatches tokens={tokens} />
        </Group>
      ))}
      <Group title="Сырые значения смысловых токенов (--raw-*)">
        <p className={`${kitStyles.muted} ds-caption-cart_text-18`}>
          В Figma эти смысловые токены заданы hex, а не ссылкой на примитив. Это не новые токены ДС: имя = имя смыслового токена.
        </p>
        <Swatches tokens={rawPrimitives} />
      </Group>
    </Page>
  ),
};

/** Semantic — смысловые и компонентные токены; каждый ссылается на примитив. */
export const Semantic: Story = {
  render: () => (
    <Page title="Semantic" lead="Слои 2 и 3: bg, typography, border, icons, tech, clubs, goals, rating, buttons, chips. Под именем — примитив, на который ссылается токен.">
      {groupBy(semantics, (t) => t.group).map(([group, tokens]) => (
        <Group key={group} title={group}>
          <Swatches tokens={tokens} />
        </Group>
      ))}
    </Page>
  ),
};

/** Typography — переменные font/* и 17 Text styles строками-примерами. */
export const Typography: Story = {
  render: () => (
    <Page title="Typography" lead="Text styles — классы .ds-* без цвета: цвет задаётся токенами typography/*.">
      <Group title="Text styles">
        {textStyles.map((s) => (
          <TextStyleRow key={s.className} className={s.className} title={s.title} />
        ))}
      </Group>
      <Group title="font/size/*">
        {byPrefix('font-size-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span style={{ fontSize: `var(--${t.name})`, lineHeight: 1 }}>Аа</span>} />
        ))}
      </Group>
      <Group title="font/line-height/*">
        {byPrefix('font-line-height-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span className={kitStyles.bar} style={{ width: 8, height: `var(--${t.name})` }} />} />
        ))}
      </Group>
      <Group title="font/weight/* · font/letter-spacing/* · font/family/*">
        {byPrefix('font-weight-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span className="ds-heading-text-20" style={{ fontWeight: `var(--${t.name})` }}>Тренировка</span>} />
        ))}
        {byPrefix('font-letter-spacing-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span className="ds-heading-text-20" style={{ letterSpacing: `var(--${t.name})` }}>Тренировка</span>} />
        ))}
        {byPrefix('font-family-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span className="ds-heading-text-20" style={{ fontFamily: `var(--${t.name})` }}>Тренировка</span>} />
        ))}
      </Group>
    </Page>
  ),
};

/** Spacing & Radius — Dimensions: spacing/* и border radius/*. */
export const SpacingRadius: Story = {
  name: 'Spacing & Radius',
  render: () => (
    <Page title="Spacing & Radius" lead="Dimensions: spacing/* (отступы и gap) и border radius/*. Теней в ДС нет (Effect styles — 0).">
      <Group title="spacing/*">
        {byPrefix('spacing-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span className={kitStyles.bar} style={{ width: `var(--${t.name})` }} />} />
        ))}
      </Group>
      <Group title="border radius/*">
        {byPrefix('border-radius-').map((t) => (
          <TokenRow key={t.name} token={t} sample={<span className={kitStyles.radius} style={{ borderRadius: `var(--${t.name})` }} />} />
        ))}
      </Group>
    </Page>
  ),
};

/** Motion — длительности и easing переходов (добавлено директивой storybook, в Figma нет). */
export const Motion: Story = {
  render: () => (
    <Page title="Motion" lead="В ДС токенов анимации нет — добавлены для живых переходов в каталоге. При prefers-reduced-motion длительности обнуляются. Наведите на квадрат.">
      <Group title="motion/*">
        {motion.map((t) => (
          <TokenRow
            key={t.name}
            token={t}
            sample={
              t.name.startsWith('motion-duration') ? (
                <span
                  className={kitStyles.motionBox}
                  style={{ transition: `background-color var(--${t.name}) var(--motion-easing-standard), transform var(--${t.name}) var(--motion-easing-standard)` }}
                />
              ) : null
            }
          />
        ))}
      </Group>
    </Page>
  ),
};
