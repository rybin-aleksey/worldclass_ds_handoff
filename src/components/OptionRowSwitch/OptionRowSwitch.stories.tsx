import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { OptionRowSwitch } from './OptionRowSwitch';

/**
 * Строка опции с подписью и переключателем. Кликабельна вся строка.
 * В Figma текст меняется оверрайдом — в коде это проп `title`.
 *
 * Figma: Option Row / Switch `701:4405` · вложенный Switch.
 */
const meta = {
  title: 'Components/Selection/Option Row Switch',
  component: OptionRowSwitch,
  tags: ['autodocs'],
  args: { title: 'Фитнес-тестирование', isActive: false, onChange: fn() },
  argTypes: {
    title: { control: 'text', description: 'Title' },
    isActive: { control: 'boolean', description: 'isActive вложенного Switch' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 327 }}><Story /></div>],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <OptionRowSwitch {...args} onChange={(e) => { args.onChange?.(e); updateArgs({ isActive: e.target.checked }); }} />;
  },
} satisfies Meta<typeof OptionRowSwitch>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Опция выключена. */
export const Off: Story = {};
/** Опция включена. */
export const On: Story = { args: { isActive: true, title: 'Персональная программа' } };

/** Список опций к записи. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <OptionRowSwitch {...args} title="Фитнес-тестирование" isActive />
      <OptionRowSwitch {...args} title="Персональная программа" isActive={false} />
      <OptionRowSwitch {...args} title="Напомнить за час до начала" isActive={false} />
    </div>
  ),
};
