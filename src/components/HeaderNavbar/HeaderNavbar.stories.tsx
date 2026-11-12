import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ICON_NAMES } from '../Icon';
import { HeaderNavbar } from './HeaderNavbar';

/**
 * Шапка экрана 375×92: зона статус-бара 48 px, «Назад» слева, заголовок по центру, действие справа.
 * В Figma текст и иконка меняются оверрайдами — в коде это пропсы.
 *
 * Figma: Header / Navbar `1025:7758`.
 */
const meta = {
  title: 'Components/Navigation/Header Navbar',
  component: HeaderNavbar,
  tags: ['autodocs'],
  args: { title: 'Расписание', showBack: true, actionIcon: '24px / filter', actionLabel: 'Фильтр', onBack: fn(), onAction: fn() },
  argTypes: {
    title: { control: 'text', description: 'Title' },
    showBack: { control: 'boolean' },
    actionIcon: { control: 'select', options: [null, ...ICON_NAMES.filter((n) => n.startsWith('24px'))], description: 'Иконка справа; null — без действия' },
    actionLabel: { control: 'text' },
    onBack: { action: 'back' },
    onAction: { action: 'action' },
  },
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ width: 375 }}><Story /></div>],
} satisfies Meta<typeof HeaderNavbar>;
export default meta;
type Story = StoryObj<typeof meta>;

/** С фильтром справа. */
export const Default: Story = {};
/** Без действия справа. */
export const NoAction: Story = { args: { title: 'Мой счёт', actionIcon: null } };
/** Корневой экран без «Назад». */
export const Root: Story = { args: { title: 'Каталог', showBack: false, actionIcon: '24px / notification', actionLabel: 'Уведомления' } };
/** Длинный заголовок обрезается многоточием. */
export const LongTitle: Story = { args: { title: 'Выберите другого тренера на это время' } };

/** Все варианты композиции. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', background: 'var(--bg-baseGray)' }}>
      <HeaderNavbar {...args} />
      <HeaderNavbar {...args} title="Мой счёт" actionIcon={null} />
      <HeaderNavbar {...args} title="Каталог" showBack={false} actionIcon="24px / notification" />
    </div>
  ),
};
