import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { IconButtonClose, type IconButtonCloseStyle } from './IconButtonClose';

/**
 * Круглая кнопка закрытия 28×28 с крестиком в шапке шторки или экрана.
 * Свойство Style из Figma в коде называется `variant` (`style` в React занят).
 *
 * Figma: Icon Button / Close `40000490:677` · Light `40000490:651`, Overlay `40000490:655`, Dark `40000490:659`.
 */
const meta = {
  title: 'Components/Actions/Icon Button Close',
  component: IconButtonClose,
  tags: ['autodocs'],
  args: { variant: 'light', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: ['light', 'overlay', 'dark'], description: 'Style: Light | Overlay | Dark' },
    disabled: { control: 'boolean' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof IconButtonClose>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Шторки авторизации, описание клуба. */
export const Light: Story = { args: { variant: 'light' } };
/** Экраны «Оплата картой»: фон с прозрачностью 60 %. */
export const Overlay: Story = { args: { variant: 'overlay' } };
/** Поверх фото (галерея на «Мой счёт»). */
export const Dark: Story = { args: { variant: 'dark' }, globals: { backgrounds: { value: 'photo' } } };

/** Все три стиля на своих подложках. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
      {(['light', 'overlay', 'dark'] as IconButtonCloseStyle[]).map((v) => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <div style={{ padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-3)', background: v === 'dark' ? 'var(--bg-pictureBg)' : 'var(--bg-mainWhite)' }}>
            <IconButtonClose {...args} variant={v} />
          </div>
          <span className="ds-caption-small-16">{v}</span>
        </div>
      ))}
    </div>
  ),
};
