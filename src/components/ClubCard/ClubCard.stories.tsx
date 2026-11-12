import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ClubCard, type ClubBrand } from './ClubCard';

/**
 * Карточка клуба в списке выбора клуба, 343×100: логотип сети, название, метро, адрес, кнопки «адрес» и «телефон».
 * Цвет линии метро — данные (`metroColor`), а не токен ДС; цвет логотипа — токены clubs/*.
 *
 * Figma: Club Card `651:4915` (текст меняется оверрайдом).
 */
const meta = {
  title: 'Components/Cards/Club Card',
  component: ClubCard,
  tags: ['autodocs'],
  args: {
    name: 'Щелковская',
    metro: 'м. Щелковская',
    metroColor: '#8D489C',
    address: 'Щёлковское ш., д. 75, ТРЦ «Щёлковский» (отдельный вход на лифте)',
    brand: 'red',
    onAddress: fn(),
    onPhone: fn(),
  },
  argTypes: {
    name: { control: 'text' },
    metro: { control: 'text' },
    metroColor: { control: 'color', description: 'Цвет линии метро (данные)' },
    address: { control: 'text' },
    brand: { control: 'inline-radio', options: ['red', 'green', 'black'], description: 'Сеть → clubs/*' },
    onAddress: { action: 'address' },
    onPhone: { action: 'phone' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof ClubCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Клуб сети World Class (red). */
export const Default: Story = {};
/** Короткий адрес. */
export const ShortAddress: Story = { args: { name: 'RedSide', metro: 'м. Павелецкая', metroColor: '#2DBE2C', address: 'ул. Сергея Макеева, 9 с.5' } };

/** Три сети клубов. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      {(['red', 'green', 'black'] as ClubBrand[]).map((b) => (
        <ClubCard key={b} {...args} brand={b} />
      ))}
    </div>
  ),
};
