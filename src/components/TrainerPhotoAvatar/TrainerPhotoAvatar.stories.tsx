import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainerPhotoAvatar } from './TrainerPhotoAvatar';

/**
 * Аватар тренера 56×56, border radius/3, фон bg/pictureBg. Используется в Trainer Row.
 * Без `src` показывается плейсхолдер формата (фон без фото). Меняется только содержимое, размер и скругление фиксированы.
 *
 * Figma: Trainer Photo Avatar `40000421:733` · trainer: 1 | 2 | 3.
 */
const meta = {
  title: 'Components/Cards/Media/Trainer Photo Avatar',
  component: TrainerPhotoAvatar,
  tags: ['autodocs'],
  args: { trainer: 1, alt: '' },
  argTypes: {
    trainer: { control: 'inline-radio', options: [1, 2, 3], description: 'trainer' },
    src: { control: 'text', description: 'URL фото' },
    alt: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TrainerPhotoAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Плейсхолдер формата. */
export const Default: Story = {};

/** Все значения trainer. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      {([1, 2, 3] as const).map((v) => (
        <TrainerPhotoAvatar key={v} {...args} trainer={v} />
      ))}
    </div>
  ),
};
