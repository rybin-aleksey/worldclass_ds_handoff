import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainingImageCompact } from './TrainingImageCompact';

/**
 * Фото тренировки 164×132, border radius/4, фон bg/baseGray. Используется в Training Card / Compact.
 * Без `src` показывается плейсхолдер формата (фон без фото). Меняется только содержимое, размер и скругление фиксированы.
 *
 * Figma: Training Image Compact `40000429:3342` · image: 1.
 */
const meta = {
  title: 'Components/Cards/Media/Training Image Compact',
  component: TrainingImageCompact,
  tags: ['autodocs'],
  args: { image: 1, alt: '' },
  argTypes: {
    image: { control: 'inline-radio', options: [1], description: 'image' },
    src: { control: 'text', description: 'URL фото' },
    alt: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TrainingImageCompact>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Плейсхолдер формата. */
export const Default: Story = {};

/** Все значения image. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      {([1] as const).map((v) => (
        <TrainingImageCompact key={v} {...args} image={v} />
      ))}
    </div>
  ),
};
