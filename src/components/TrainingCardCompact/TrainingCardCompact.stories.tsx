import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { TrainingCardCompact } from './TrainingCardCompact';

/**
 * Карточка тренировки 164×256: фото, свободные места, лайк, время, название, тренер, кнопка записи.
 *
 * Figma: Training Card / Compact `1706:2503` · Show Availability · вложенные Training Image / Compact,
 * Icon Button / Like, Button Size=Small.
 */
const meta = {
  title: 'Components/Cards/Training Card Compact',
  component: TrainingCardCompact,
  tags: ['autodocs'],
  args: {
    availability: '12 мест',
    time: '12:00',
    title: 'Total Stretch',
    instructor: 'Анастасия Андреенкова',
    showAvailability: true,
    image: 1,
    isLiked: false,
    buttonLabel: 'Записаться',
    onLikeToggle: fn(),
    onBook: fn(),
  },
  argTypes: {
    availability: { control: 'text', description: 'Availability' },
    time: { control: 'text', description: 'Time' },
    title: { control: 'text', description: 'Title' },
    instructor: { control: 'text', description: 'Instructor' },
    showAvailability: { control: 'boolean', description: 'Show Availability' },
    image: { control: 'inline-radio', options: [1], description: 'Training Image / Compact → Image' },
    imageSrc: { control: 'text' },
    isLiked: { control: 'boolean', description: 'Icon Button / Like → isLiked' },
    buttonLabel: { control: 'text', description: 'Button → Label' },
    onLikeToggle: { action: 'likeToggle' },
    onBook: { action: 'book' },
  },
  parameters: { layout: 'centered' },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <TrainingCardCompact {...args} onLikeToggle={() => { args.onLikeToggle?.(); updateArgs({ isLiked: !args.isLiked }); }} />;
  },
} satisfies Meta<typeof TrainingCardCompact>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Есть свободные места. */
export const Default: Story = {};
/** В избранном. */
export const Liked: Story = { args: { isLiked: true } };
/** Без бейджа мест. */
export const NoAvailability: Story = { args: { showAvailability: false, time: '18:30', title: 'Хатха-йога', instructor: 'Виктор Кульпин' } };

/** Show Availability × isLiked. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
      <TrainingCardCompact {...args} />
      <TrainingCardCompact {...args} isLiked availability="2 места" />
      <TrainingCardCompact {...args} showAvailability={false} time="18:30" title="Хатха-йога" instructor="Виктор Кульпин" />
    </div>
  ),
};
