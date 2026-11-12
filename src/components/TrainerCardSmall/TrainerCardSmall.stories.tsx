import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrainerCardSmall } from './TrainerCardSmall';

/**
 * Компактная карточка тренера 140 px: фото и имя в две строки.
 *
 * Figma: Trainer Card / Small `40000419:672` · вложенный Trainer Photo / Small.
 */
const meta = {
  title: 'Components/Cards/Trainer Card Small',
  component: TrainerCardSmall,
  tags: ['autodocs'],
  args: { name: 'Виктор\nКульпин', trainer: 3 },
  argTypes: {
    name: { control: 'text', description: 'Name (перенос строки — \\n)' },
    trainer: { control: 'inline-radio', options: [1, 2, 3], description: 'Trainer Photo / Small → Trainer' },
    photoSrc: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TrainerCardSmall>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Карточка в ленте тренеров. */
export const Default: Story = {};
/** Длинное имя. */
export const LongName: Story = { args: { name: 'Анастасия\nАндреенкова' } };

/** Лента из трёх тренеров. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
      <TrainerCardSmall {...args} name={'Виктор\nКульпин'} trainer={1} />
      <TrainerCardSmall {...args} name={'Анастасия\nАндреенкова'} trainer={2} />
      <TrainerCardSmall {...args} name={'Мария\nСоколова'} trainer={3} />
    </div>
  ),
};
