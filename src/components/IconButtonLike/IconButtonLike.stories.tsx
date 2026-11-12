import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { IconButtonLike } from './IconButtonLike';

/**
 * Кнопка «в избранное» 28×28. Вложена в Trainer Card / Vertical и Training Card / Compact.
 * Фон в Figma — примитив `gray/200` (смыслового токена нет). Иконка — `16px / like`: обводка icons/onDark, у isLiked=Yes заливка typography/danger.
 *
 * Figma: Icon Button / Like `1665:3266` · isLiked: Yes | No.
 */
const meta = {
  title: 'Components/Cards/Icon Button Like',
  component: IconButtonLike,
  tags: ['autodocs'],
  args: { isLiked: false, onClick: fn() },
  argTypes: {
    isLiked: { control: 'boolean', description: 'isLiked: Yes | No' },
    disabled: { control: 'boolean' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'centered' },
  globals: { backgrounds: { value: 'photo' } },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <IconButtonLike {...args} onClick={(e) => { args.onClick?.(e); updateArgs({ isLiked: !args.isLiked }); }} />;
  },
} satisfies Meta<typeof IconButtonLike>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Не в избранном. Кликните. */
export const NotLiked: Story = {};
/** В избранном. */
export const Liked: Story = { args: { isLiked: true } };

/** Yes и No рядом. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      <IconButtonLike {...args} isLiked />
      <IconButtonLike {...args} isLiked={false} />
    </div>
  ),
};
