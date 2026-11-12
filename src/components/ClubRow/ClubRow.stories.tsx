import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ClubRow } from './ClubRow';

/**
 * Строка клуба 343×56: фото, название, адрес. Шеврон по умолчанию скрыт.
 *
 * Figma: Club Row `40000432:707` · Show Chevron (по умолчанию false) · вложенный Club Image / Avatar.
 */
const meta = {
  title: 'Components/Cards/Club Row',
  component: ClubRow,
  tags: ['autodocs'],
  args: { name: 'RedSide', address: 'ул. Сергея Макеева, 9 с.5', showChevron: false, club: 1, onClick: fn() },
  argTypes: {
    name: { control: 'text' },
    address: { control: 'text' },
    showChevron: { control: 'boolean', description: 'Show Chevron' },
    club: { control: 'inline-radio', options: [1], description: 'Club Image / Avatar → Club' },
    imageSrc: { control: 'text' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof ClubRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Без шеврона (по умолчанию). */
export const Default: Story = {};
/** С шевроном — строка ведёт в описание клуба. */
export const WithChevron: Story = { args: { showChevron: true } };

/** С шевроном и без. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <ClubRow {...args} />
      <ClubRow {...args} showChevron />
    </div>
  ),
};
