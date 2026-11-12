import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Radio } from './Radio';

/**
 * Радиокнопка 16×16. Настоящий `input type="radio"`; в интерфейсе обычно живёт внутри Radio Row.
 *
 * Figma: Radio `1691:4450` · isActive: Yes | No.
 */
const meta = {
  title: 'Components/Selection/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: { isActive: true, label: '6 месяцев', name: 'term', disabled: false, onChange: fn() },
  argTypes: {
    isActive: { control: 'boolean', description: 'isActive: Yes | No' },
    label: { control: 'text', description: 'Доступное имя' },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'centered' },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <Radio {...args} onChange={(e) => { args.onChange?.(e); updateArgs({ isActive: e.target.checked }); }} />;
  },
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;

/** isActive=Yes. */
export const Active: Story = {};
/** isActive=No. Кликните — выберется. */
export const Inactive: Story = { args: { isActive: false } };

/** Yes и No рядом. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
      <Radio {...args} name="a" isActive />
      <Radio {...args} name="b" isActive={false} />
    </div>
  ),
};
