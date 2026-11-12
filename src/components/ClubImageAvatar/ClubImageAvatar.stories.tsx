import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClubImageAvatar } from './ClubImageAvatar';

/**
 * Аватар клуба 56×56, border radius/3, фон bg/baseGray. Используется в Club Row.
 * Без `src` показывается плейсхолдер формата (фон без фото). Меняется только содержимое, размер и скругление фиксированы.
 *
 * Figma: Club Image Avatar `40000432:683` · club: 1.
 */
const meta = {
  title: 'Components/Cards/Media/Club Image Avatar',
  component: ClubImageAvatar,
  tags: ['autodocs'],
  args: { club: 1, alt: '' },
  argTypes: {
    club: { control: 'inline-radio', options: [1], description: 'club' },
    src: { control: 'text', description: 'URL фото' },
    alt: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ClubImageAvatar>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Плейсхолдер формата. */
export const Default: Story = {};

/** Все значения club. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      {([1] as const).map((v) => (
        <ClubImageAvatar key={v} {...args} club={v} />
      ))}
    </div>
  ),
};
