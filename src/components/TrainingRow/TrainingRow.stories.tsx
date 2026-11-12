import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TrainingRow } from './TrainingRow';

/**
 * Строка тренировки 343×56: фото, название, тип, шеврон. Тексты в одну строку с обрезкой.
 * Проп `type` — тип тренировки из Figma (не HTML-тип кнопки).
 *
 * Figma: Training Row `40000432:699` · Show Chevron (по умолчанию true) · вложенный Training Image / Avatar.
 */
const meta = {
  title: 'Components/Cards/Training Row',
  component: TrainingRow,
  tags: ['autodocs'],
  args: { title: 'Total Stretch', type: 'Персональная', showChevron: true, image: 1, onClick: fn() },
  argTypes: {
    title: { control: 'text', description: 'Title' },
    type: { control: 'text', description: 'Type' },
    showChevron: { control: 'boolean', description: 'Show Chevron' },
    image: { control: 'inline-radio', options: [1], description: 'Training Image / Avatar → Image' },
    imageSrc: { control: 'text' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof TrainingRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Персональная тренировка. */
export const Default: Story = {};
/** Групповая без шеврона. */
export const Group: Story = { args: { title: 'Хатха-йога', type: 'Групповая', showChevron: false } };

/** С шевроном и без. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <TrainingRow {...args} />
      <TrainingRow {...args} title="Хатха-йога" type="Групповая" showChevron={false} />
    </div>
  ),
};
