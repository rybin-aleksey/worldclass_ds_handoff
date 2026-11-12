import type { Meta, StoryObj } from '@storybook/react-vite';
import { HelperText, type HelperTextState } from './HelperText';

/**
 * Подсказка или сообщение под полем: значок alert-circle и текст. Вложен в Text Field.
 * Значок alert-circle окрашивается вместе с текстом; цвета состояний в Figma заданы сырым hex или удалённой переменной, в коде — ближайшие смысловые токены.
 *
 * Figma: Helper Text `2223:4612` · State: Default | Negative | Success | Disabled.
 */
const meta = {
  title: 'Components/Inputs/Helper Text',
  component: HelperText,
  tags: ['autodocs'],
  args: { state: 'default', helperText: 'Код придёт в течение минуты' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'negative', 'success', 'disabled'], description: 'State' },
    helperText: { control: 'text', description: 'Helper Text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof HelperText>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Нейтральная подсказка. */
export const Default: Story = {};
/** Ошибка (role="alert"). */
export const Negative: Story = { args: { state: 'negative', helperText: 'Неверный код' } };
/** Успех. */
export const Success: Story = { args: { state: 'success', helperText: 'Код подтверждён' } };
/** Недоступно. */
export const Disabled: Story = { args: { state: 'disabled', helperText: 'Повторная отправка через 0:45' } };

/** Все четыре состояния. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      {(['default', 'negative', 'success', 'disabled'] as HelperTextState[]).map((s) => (
        <HelperText key={s} {...args} state={s} helperText={`${s}: ${args.helperText}`} />
      ))}
    </div>
  ),
};
