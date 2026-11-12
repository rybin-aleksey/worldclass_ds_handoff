import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { HeaderModal } from './HeaderModal';

/**
 * Заголовок шторки 375×56: ручка `pull-down-bar` (bg/grabber), «Назад», заголовок, крестик.
 *
 * Figma: Header / Modal `1070:3790`.
 */
const meta = {
  title: 'Components/Navigation/Header Modal',
  component: HeaderModal,
  tags: ['autodocs'],
  args: { title: 'Выберите время и дату', showBack: true, onBack: fn(), onClose: fn() },
  argTypes: {
    title: { control: 'text', description: 'Title' },
    showBack: { control: 'boolean' },
    onBack: { action: 'back' },
    onClose: { action: 'close' },
  },
  parameters: { layout: 'fullscreen' },
  globals: { backgrounds: { value: 'gray' } },
  decorators: [(Story) => <div style={{ width: 375, paddingTop: 'var(--spacing-6)' }}><Story /></div>],
} satisfies Meta<typeof HeaderModal>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Шторка выбора времени. */
export const Default: Story = {};
/** Без «Назад» — первый шаг шторки. */
export const NoBack: Story = { args: { title: 'Способ оплаты', showBack: false } };

/** С «Назад» и без. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      <HeaderModal {...args} />
      <HeaderModal {...args} title="Способ оплаты" showBack={false} />
    </div>
  ),
};
