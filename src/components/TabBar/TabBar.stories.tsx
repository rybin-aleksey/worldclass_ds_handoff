import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { TabBar, type TabBarTab } from './TabBar';

/**
 * Нижний таббар на 5 вкладок: Главная, Расписание, Активность, Каталог, Профиль. 375×83 с зоной Home Bar.
 * Кликните по вкладке — активная сменится плавно.
 *
 * Figma: Tab Bar `407:2310` · activeTab: 1 | 2 | 3 | 4 | 5.
 */
const meta = {
  title: 'Components/Navigation/Tab Bar',
  component: TabBar,
  tags: ['autodocs'],
  args: { activeTab: 1, onChange: fn() },
  argTypes: {
    activeTab: { control: 'inline-radio', options: [1, 2, 3, 4, 5], description: 'activeTab' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ width: 375 }}><Story /></div>],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <TabBar {...args} onChange={(t) => { args.onChange?.(t); updateArgs({ activeTab: t }); }} />;
  },
} satisfies Meta<typeof TabBar>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Главная. */
export const Home: Story = {};
/** Расписание. */
export const Schedule: Story = { args: { activeTab: 2 } };
/** Профиль. */
export const Profile: Story = { args: { activeTab: 5 } };

/** activeTab 1–5. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', background: 'var(--bg-baseGray)' }}>
      {([1, 2, 3, 4, 5] as TabBarTab[]).map((n) => (
        <TabBar key={n} {...args} activeTab={n} />
      ))}
    </div>
  ),
};
