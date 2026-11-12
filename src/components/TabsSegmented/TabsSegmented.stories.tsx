import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { TabsSegmented } from './TabsSegmented';

/**
 * Сегментный переключатель на 2 сегмента: «Групповые / Персональные».
 * В Figma один вариант (Segments: 2); активный сегмент привязан к удалённой background/black → chips/selected/*.
 *
 * Figma: Tabs / Segmented `754:3617`.
 */
const meta = {
  title: 'Components/Navigation/Tabs Segmented',
  component: TabsSegmented,
  tags: ['autodocs'],
  args: { segments: ['Групповые', 'Персональные'], activeIndex: 0, onChange: fn() },
  argTypes: {
    segments: { control: 'object', description: 'Segments: 2 — подписи' },
    activeIndex: { control: 'inline-radio', options: [0, 1], description: 'Активный сегмент' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 327 }}><Story /></div>],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <TabsSegmented {...args} onChange={(i) => { args.onChange?.(i); updateArgs({ activeIndex: i }); }} />;
  },
} satisfies Meta<typeof TabsSegmented>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Групповые. */
export const Group: Story = {};
/** Персональные. */
export const Personal: Story = { args: { activeIndex: 1 } };

/** Оба положения. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <TabsSegmented {...args} activeIndex={0} />
      <TabsSegmented {...args} activeIndex={1} />
    </div>
  ),
};
