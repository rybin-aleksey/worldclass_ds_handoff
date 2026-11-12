import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TrainingDescription } from './TrainingDescription';

const TEXT =
  'Йога для начинающих нацелена на изучение основных классических асан, правильного дыхания и концентрации. Занятие подходит тем, кто только начинает практику: инструктор объясняет технику и помогает выстроить положение тела. Регулярные тренировки улучшают гибкость, осанку и самочувствие.';

/**
 * Описание занятия: свёрнутое до трёх строк с «Подробнее» или полное со «Свернуть».
 * Без `isTruncate` управляет собой сам — нажмите «Подробнее».
 *
 * Figma: Training Description `1398:3380` · isTruncate: Yes | No.
 */
const meta = {
  title: 'Components/Information/Training Description',
  component: TrainingDescription,
  tags: ['autodocs'],
  args: { title: 'Yoga (уровень 1)', description: TEXT, defaultTruncate: true, onToggle: fn() },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    isTruncate: { control: 'boolean', description: 'isTruncate (управляемый режим)' },
    defaultTruncate: { control: 'boolean', description: 'Свёрнуто при первом рендере' },
    onToggle: { action: 'toggle' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof TrainingDescription>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Свёрнуто (isTruncate=Yes). */
export const Truncated: Story = {};
/** Полностью (isTruncate=No). */
export const Expanded: Story = { args: { defaultTruncate: false } };

/** Yes и No рядом. */
export const AllVariants: Story = {
  decorators: [(Story) => <Story />],
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 343px)', gap: 'var(--spacing-8)', alignItems: 'start' }}>
      <TrainingDescription {...args} isTruncate />
      <TrainingDescription {...args} isTruncate={false} />
    </div>
  ),
};
