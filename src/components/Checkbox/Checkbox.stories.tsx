import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Checkbox } from './Checkbox';

/**
 * Флажок 20×20. Настоящий `input type="checkbox"`: кликните — состояние переключится, галочка появится плавно.
 * Фон в Figma привязан к удалённой переменной `icons/dark grey` у обоих состояний; в коде — `icons/secondaryLine`.
 *
 * Figma: Checkbox `1665:2354` · isActive: Yes | No.
 */
const meta = {
  title: 'Components/Selection/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { isActive: true, label: 'Согласен с условиями оферты', disabled: false, onChange: fn() },
  argTypes: {
    isActive: { control: 'boolean', description: 'isActive: Yes | No' },
    label: { control: 'text', description: 'Доступное имя' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'centered' },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <Checkbox {...args} onChange={(e) => { args.onChange?.(e); updateArgs({ isActive: e.target.checked }); }} />;
  },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

/** isActive=Yes. */
export const Active: Story = {};
/** isActive=No. */
export const Inactive: Story = { args: { isActive: false } };
/** Недоступен. */
export const Disabled: Story = { args: { disabled: true } };

/** Yes и No рядом. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
      <Checkbox {...args} isActive />
      <Checkbox {...args} isActive={false} />
    </div>
  ),
};
