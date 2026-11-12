import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainerPhotoVertical } from './TrainerPhotoVertical';

/**
 * Фото тренера 168×168, border radius/6, фон bg/pictureBg. Используется в Trainer Card / Vertical.
 * Без `src` показывается плейсхолдер формата (фон без фото). Меняется только содержимое, размер и скругление фиксированы.
 *
 * Figma: Trainer Photo Vertical `40000421:726` · trainer: 1 | 2 | 3.
 */
const meta = {
  title: 'Components/Cards/Media/Trainer Photo Vertical',
  component: TrainerPhotoVertical,
  tags: ['autodocs'],
  args: { trainer: 1, alt: '' },
  argTypes: {
    trainer: { control: 'inline-radio', options: [1, 2, 3], description: 'trainer' },
    src: { control: 'text', description: 'URL фото' },
    alt: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TrainerPhotoVertical>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Плейсхолдер формата. */
export const Default: Story = {};

/** Все значения trainer. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      {([1, 2, 3] as const).map((v) => (
        <TrainerPhotoVertical key={v} {...args} trainer={v} />
      ))}
    </div>
  ),
};
