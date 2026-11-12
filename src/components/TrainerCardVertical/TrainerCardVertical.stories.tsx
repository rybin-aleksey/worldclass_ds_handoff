import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { TrainerCardVertical } from './TrainerCardVertical';

/**
 * Карточка тренера 168 px: фото, стаж, лайк, имя, категория, рейтинг, цена.
 * Лайк кликабелен (вложенный Icon Button / Like).
 *
 * Figma: Trainer Card / Vertical `1503:4407` · Show Experience, Show Rating · вложенные Trainer Photo / Vertical и Icon Button / Like.
 */
const meta = {
  title: 'Components/Cards/Trainer Card Vertical',
  component: TrainerCardVertical,
  tags: ['autodocs'],
  args: {
    name: 'Анастасия Андреенкова',
    category: 'Персональный тренер',
    experience: 'Стаж 2 года',
    price: 'от 3 790₽',
    rating: '4.7',
    reviews: '3 отзыва',
    showExperience: true,
    showRating: true,
    trainer: 1,
    isLiked: false,
    onLikeToggle: fn(),
  },
  argTypes: {
    name: { control: 'text' },
    category: { control: 'text' },
    experience: { control: 'text' },
    price: { control: 'text' },
    rating: { control: 'text' },
    reviews: { control: 'text' },
    showExperience: { control: 'boolean', description: 'Show Experience' },
    showRating: { control: 'boolean', description: 'Show Rating' },
    trainer: { control: 'inline-radio', options: [1, 2, 3], description: 'Trainer Photo / Vertical → Trainer' },
    photoSrc: { control: 'text', description: 'URL фото (без него — плейсхолдер)' },
    isLiked: { control: 'boolean', description: 'Icon Button / Like → isLiked' },
    onLikeToggle: { action: 'likeToggle' },
  },
  parameters: { layout: 'centered' },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <TrainerCardVertical {...args} onLikeToggle={() => { args.onLikeToggle?.(); updateArgs({ isLiked: !args.isLiked }); }} />;
  },
} satisfies Meta<typeof TrainerCardVertical>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Полная карточка. */
export const Default: Story = {};
/** В избранном. */
export const Liked: Story = { args: { isLiked: true } };
/** Без стажа и рейтинга — новый тренер. */
export const Minimal: Story = { args: { name: 'Виктор Кульпин', category: 'Элит-тренер', price: 'от 4 500₽', showExperience: false, showRating: false, trainer: 2 } };

/** Show Experience × Show Rating. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'flex-start' }}>
      <TrainerCardVertical {...args} />
      <TrainerCardVertical {...args} showExperience={false} isLiked />
      <TrainerCardVertical {...args} showRating={false} trainer={2} />
      <TrainerCardVertical {...args} showExperience={false} showRating={false} trainer={3} />
    </div>
  ),
};
