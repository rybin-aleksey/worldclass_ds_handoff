import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainerPhotoSmall } from './TrainerPhotoSmall';

/**
 * Фото тренера 140×172, border radius/3, фон bg/pictureBg. Используется в Trainer Card / Small.
 * Без `src` показывается плейсхолдер формата (фон без фото). Меняется только содержимое, размер и скругление фиксированы.
 *
 * Figma: Trainer Photo Small `40000421:719` · trainer: 1 | 2 | 3.
 */
const meta = {
  title: 'Components/Cards/Media/Trainer Photo Small',
  component: TrainerPhotoSmall,
  tags: ['autodocs'],
  args: { trainer: 1, alt: '' },
  argTypes: {
    trainer: { control: 'inline-radio', options: [1, 2, 3], description: 'trainer' },
    src: { control: 'text', description: 'URL фото' },
    alt: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TrainerPhotoSmall>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Плейсхолдер формата. */
export const Default: Story = {};

/** Все значения trainer. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      {([1, 2, 3] as const).map((v) => (
        <TrainerPhotoSmall key={v} {...args} trainer={v} />
      ))}
    </div>
  ),
};
