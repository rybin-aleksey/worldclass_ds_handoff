import type { Meta, StoryObj } from '@storybook/react-vite';
import { MembershipCard, type MembershipCardSize, type MembershipCardType } from './MembershipCard';

/**
 * Клубная карта. Type: WorldClass (#ЯWorldClass) | Kids | Family.
 * Full — 343×193, с ценой; Compact — 282×168, без цены.
 * Фон и узор — арт из Figma (`src/assets/membership/*.svg`): токенов для артов в ДС нет.
 *
 * Figma: Membership Card `40000318:1090` · 6 вариантов (Type × Size).
 */
const meta = {
  title: 'Components/Cards/Membership Card',
  component: MembershipCard,
  tags: ['autodocs'],
  args: { type: 'worldclass', size: 'full', club: 'RedSide', validity: 'Срок действия карты 365 дней' },
  argTypes: {
    type: { control: 'inline-radio', options: ['worldclass', 'kids', 'family'], description: 'Type' },
    size: { control: 'inline-radio', options: ['compact', 'full'], description: 'Size' },
    club: { control: 'text' },
    title: { control: 'text', description: 'По умолчанию — по Type' },
    price: { control: 'text', description: 'Только Size=Full; по умолчанию — по Type' },
    validity: { control: 'text' },
    freeze: { control: 'text', description: 'По умолчанию — по Type' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof MembershipCard>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Карта «#ЯWorldClass», Full. */
export const WorldClass: Story = {};
/** Детская, Full. */
export const Kids: Story = { args: { type: 'kids' } };
/** Семейная, Full. */
export const Family: Story = { args: { type: 'family' } };
/** Compact — в карусели выбора карты. */
export const Compact: Story = { args: { size: 'compact' } };

/** Матрица Type × Size. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {(['compact', 'full'] as MembershipCardSize[]).map((size) => (
        <div key={size} style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-4)', alignItems: 'flex-end' }}>
          {(['worldclass', 'kids', 'family'] as MembershipCardType[]).map((type) => (
            <MembershipCard key={type} {...args} type={type} size={size} />
          ))}
        </div>
      ))}
    </div>
  ),
};
