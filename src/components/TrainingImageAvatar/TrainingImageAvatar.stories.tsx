import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainingImageAvatar } from './TrainingImageAvatar';

/**
 * Аватар тренировки 56×56, border radius/3, фон bg/baseGray. Используется в Training Row.
 * Без `src` показывается плейсхолдер формата (фон без фото). Меняется только содержимое, размер и скругление фиксированы.
 *
 * Figma: Training Image Avatar `40000432:680` · image: 1.
 */
const meta = {
  title: 'Components/Cards/Media/Training Image Avatar',
  component: TrainingImageAvatar,
  tags: ['autodocs'],
  args: { image: 1, alt: '' },
  argTypes: {
    image: { control: 'inline-radio', options: [1], description: 'image' },
    src: { control: 'text', description: 'URL фото' },
    alt: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TrainingImageAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Плейсхолдер формата. */
export const Default: Story = {};

/** Все значения image. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      {([1] as const).map((v) => (
        <TrainingImageAvatar key={v} {...args} image={v} />
      ))}
    </div>
  ),
};
