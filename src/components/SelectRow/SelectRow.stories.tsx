import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ICON_NAMES } from '../Icon';
import { SelectRow } from './SelectRow';

/**
 * Строка выбора с иконкой в плитке 56×56 и шевроном: время, тариф и т. п.
 * Lines=1 — только заголовок, Lines=2 — заголовок и подпись.
 *
 * Figma: Select / Row `40000434:731` (Lines=1 `40000434:710`, Lines=2 `40000434:722`).
 */
const meta = {
  title: 'Components/Inputs/Select Row',
  component: SelectRow,
  tags: ['autodocs'],
  args: { lines: 1, title: 'Выберите время', subtitle: 'В клубе', icon: '24px / calendar', showChevron: true, onClick: fn() },
  argTypes: {
    lines: { control: 'inline-radio', options: [1, 2], description: 'Lines' },
    title: { control: 'text', description: 'Title' },
    subtitle: { control: 'text', description: 'Subtitle (Lines=2)' },
    icon: { control: 'select', options: ICON_NAMES.filter((n) => n.startsWith('24px')), description: 'Icon (24px)' },
    showChevron: { control: 'boolean', description: 'Show Chevron' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof SelectRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Одна строка: только заголовок. */
export const OneLine: Story = { args: { lines: 1 } };
/** Две строки: заголовок и подпись. */
export const TwoLines: Story = { args: { lines: 2 } };
/** Выбор тарифа без шеврона. */
export const Tariff: Story = { args: { lines: 2, title: 'Разовое посещение', subtitle: '1 500 ₽', icon: '24px / rouble', showChevron: false } };

/** Lines × Show Chevron. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      {([1, 2] as const).flatMap((lines) =>
        [true, false].map((showChevron) => (
          <SelectRow key={`${lines}${showChevron}`} {...args} lines={lines} showChevron={showChevron} />
        )),
      )}
    </div>
  ),
};
