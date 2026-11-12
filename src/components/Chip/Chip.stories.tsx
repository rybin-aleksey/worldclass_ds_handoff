import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { Chip, type ChipState, type ChipType } from './Chip';

/**
 * Чипсы выбора (time, filter, tab) и метки (tag, tag small). Выбранный — chips/selected/bg + chips/selected/text.
 * Метки tag и tag small не кликабельны и рендерятся как `<span>`.
 *
 * Figma: Chip `1214:7039` · 9 вариантов.
 */
const meta = {
  title: 'Components/Selection/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { type: 'time', state: 'not selected', label: '15:00', onClick: fn() },
  argTypes: {
    type: { control: 'select', options: ['time', 'filter', 'tab', 'tag', 'tag small'], description: 'type' },
    state: { control: 'select', options: ['not selected', 'selected', 'disabled', 'default'], description: 'state (допустимые сочетания — см. описание)' },
    label: { control: 'text', description: 'Label' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Слот времени. */
export const Time: Story = {};
/** Выбранный слот времени. */
export const TimeSelected: Story = { args: { state: 'selected' } };
/** Фильтр. */
export const Filter: Story = { args: { type: 'filter', label: 'Йога' } };
/** Фильтр недоступен. */
export const FilterDisabled: Story = { args: { type: 'filter', state: 'disabled', label: 'Бокс' } };
/** Таб в строке «Все / Моя цель / …». */
export const Tab: Story = { args: { type: 'tab', state: 'selected', label: 'Все' } };
/** Тег тренировки. */
export const Tag: Story = { args: { type: 'tag', state: 'default', label: 'Хатха-йога' } };
/** Тег каталога. */
export const TagSmall: Story = { args: { type: 'tag small', state: 'default', label: 'Растяжка' } };

const VARIANTS: Array<[ChipType, ChipState, string]> = [
  ['time', 'not selected', '15:00'], ['time', 'selected', '15:00'],
  ['filter', 'not selected', 'Йога'], ['filter', 'selected', 'Йога'], ['filter', 'disabled', 'Йога'],
  ['tab', 'not selected', 'Моя цель'], ['tab', 'selected', 'Все'],
  ['tag', 'default', 'Хатха-йога'], ['tag small', 'default', 'Растяжка'],
];

/** Все 9 вариантов Figma + живой выбор слота времени. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: function All(args) {
    const [time, setTime] = useState('15:00');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          {VARIANTS.map(([type, state, label]) => (
            <Line key={`${type}${state}`} label={`${type} · ${state}`}>
              <Chip {...args} type={type} state={state} label={label} />
            </Line>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          {['09:00', '12:00', '15:00', '18:30'].map((t) => (
            <Chip key={t} type="time" label={t} state={time === t ? 'selected' : 'not selected'} onClick={() => setTime(t)} />
          ))}
        </div>
      </div>
    );
  },
};

function Line({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <span className="ds-caption-small-16">{label}</span>
      <div>{children}</div>
    </>
  );
}
