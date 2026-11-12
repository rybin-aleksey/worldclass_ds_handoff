import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ICON_NAMES } from '../Icon';
import { ActionRow } from './ActionRow';

/**
 * Строка действия: иконка в плитке 56×56 и подпись. Используется в шторках после записи и оплаты.
 *
 * Figma: Action Row `40000223:714` · свойства Label (TEXT), Icon (INSTANCE_SWAP, 24px).
 */
const meta = {
  title: 'Components/Actions/Action Row',
  component: ActionRow,
  tags: ['autodocs'],
  args: { label: 'Отправить квитанцию', icon: '24px / receipt', onClick: fn() },
  argTypes: {
    label: { control: 'text', description: 'Label' },
    icon: { control: 'select', options: ICON_NAMES.filter((n) => n.startsWith('24px')), description: 'Icon (24px)' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof ActionRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Отправить квитанцию. */
export const Receipt: Story = {};
/** Создать шаблон записи. */
export const Template: Story = { args: { label: 'Создать шаблон', icon: '24px / template' } };
/** Редактировать запись. */
export const Edit: Story = { args: { label: 'Редактировать запись', icon: '24px / edit' } };

/** Паттерн «Действия после записи»: три строки подряд. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      <ActionRow {...args} label="Отправить квитанцию" icon="24px / receipt" />
      <ActionRow {...args} label="Создать шаблон" icon="24px / template" />
      <ActionRow {...args} label="Редактировать запись" icon="24px / edit" />
    </div>
  ),
};
