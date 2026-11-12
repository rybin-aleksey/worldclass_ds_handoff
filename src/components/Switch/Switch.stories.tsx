import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Switch } from './Switch';

/**
 * Переключатель 51×32 (`role="switch"`). Кликните — бегунок плавно перейдёт, трек окрасится в tech/success.
 *
 * Figma: Switch `761:4124` · isActive: false | true.
 */
const meta = {
  title: 'Components/Selection/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: { isActive: false, label: 'Фитнес-тестирование', disabled: false, onChange: fn() },
  argTypes: {
    isActive: { control: 'boolean', description: 'isActive: false | true' },
    label: { control: 'text', description: 'Доступное имя' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'centered' },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <Switch {...args} onChange={(e) => { args.onChange?.(e); updateArgs({ isActive: e.target.checked }); }} />;
  },
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Выключен. */
export const Off: Story = {};
/** Включён. */
export const On: Story = { args: { isActive: true } };

/** false и true рядом. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
      <Switch {...args} isActive={false} />
      <Switch {...args} isActive />
    </div>
  ),
};
