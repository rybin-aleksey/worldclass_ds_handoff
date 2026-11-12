import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, ICON_NAMES } from './Icon';

/**
 * 26 иконок ДС, SVG перенесены из Figma. Имя — как в Figma, размер — из имени.
 * Цвет наследуется (`currentColor`) от родителя — задавайте его токенами `icons/*`.
 * `activity` в Figma — растровая картинка (PNG). У `20px / chevron-left` в Figma остриё смотрит вправо — перенесено как есть.
 *
 * Figma: Foundations → Icons `40000166:6047`.
 */
const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: '24px / calendar' },
  argTypes: {
    name: { control: 'select', options: ICON_NAMES, description: 'Имя иконки из Figma' },
    size: { control: { type: 'number', min: 8, max: 48 }, description: 'Переопределить размер (px)' },
    title: { control: 'text', description: 'Доступное имя; без него иконка декоративная' },
    color: { control: 'color', description: 'Цвет (в продукте — токены icons/*)' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Иконка 24 px. */
export const Default: Story = {};
/** Шеврон 20 px — в строках выбора. */
export const Chevron: Story = { args: { name: '20px / chevron-right' } };
/** Кнопка «Назад» 23×36. */
export const Back: Story = { args: { name: 'Back' } };

/** Все 26 иконок. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 'var(--spacing-4)', color: 'var(--icons-primaryLine)' }}>
      {ICON_NAMES.map((n) => (
        <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 'var(--border-radius-3)', background: 'var(--bg-baseGray)' }}>
            <Icon name={n} />
          </span>
          <span className="ds-caption-small-12">{n}</span>
        </div>
      ))}
    </div>
  ),
};
