import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TrainerRow } from './TrainerRow';

/**
 * Строка тренера 343×56: аватар, имя, категория, шеврон. Имя и категория обрезаются в одну строку.
 *
 * Figma: Trainer Row `40000427:729` · Show Chevron (по умолчанию true) · вложенный Trainer Photo / Avatar.
 */
const meta = {
  title: 'Components/Cards/Trainer Row',
  component: TrainerRow,
  tags: ['autodocs'],
  args: { name: 'Анастасия Андреенкова', category: 'Элит-тренер', showChevron: true, trainer: 1, onClick: fn() },
  argTypes: {
    name: { control: 'text' },
    category: { control: 'text' },
    showChevron: { control: 'boolean', description: 'Show Chevron' },
    trainer: { control: 'inline-radio', options: [1, 2, 3], description: 'Trainer Photo / Avatar → Trainer' },
    photoSrc: { control: 'text' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof TrainerRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** С шевроном. */
export const Default: Story = {};
/** Без шеврона. */
export const NoChevron: Story = { args: { showChevron: false } };
/** Длинные тексты обрезаются. */
export const LongText: Story = { args: { name: 'Анастасия Александровна Андреенкова-Соколова', category: 'Элит-тренер, функциональный тренинг и растяжка' } };

/** Show Chevron true/false и обрезка. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <TrainerRow {...args} />
      <TrainerRow {...args} showChevron={false} trainer={2} />
      <TrainerRow {...args} trainer={3} name="Анастасия Александровна Андреенкова-Соколова" />
    </div>
  ),
};
