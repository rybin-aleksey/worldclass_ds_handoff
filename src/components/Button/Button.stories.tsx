import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, type ButtonSize, type ButtonState, type ButtonType } from './Button';

/**
 * Кнопка — основное действие. Primary — главное действие экрана (записаться, оплатить, готово),
 * Secondary — второстепенное (отменить, перезвоните мне). Ширина — Fill: кнопка тянется на всю ширину контейнера.
 *
 * Figma: Button `40000176:697` · 12 вариантов (Type × State × Size) · токены `buttons/*`.
 */
const meta = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  args: { type: 'primary', state: 'default', size: 'large', label: 'Записаться', onClick: fn() },
  argTypes: {
    type: { control: 'inline-radio', options: ['primary', 'secondary'], description: 'Type' },
    state: { control: 'inline-radio', options: ['default', 'pressed', 'disabled'], description: 'State; Pressed также работает нативно (:active)' },
    size: { control: 'inline-radio', options: ['large', 'small'], description: 'Size: Large — 58 px, Small — 48 px' },
    label: { control: 'text', description: 'Label' },
    htmlType: { control: 'inline-radio', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Главное действие экрана. Нажмите и удерживайте — увидите Pressed. */
export const Primary: Story = { args: { type: 'primary', label: 'Оплатить' } };
/** Второстепенное действие. */
export const Secondary: Story = { args: { type: 'secondary', label: 'Перезвоните мне' } };
/** Зафиксированное Pressed — для сверки с Figma. */
export const Pressed: Story = { args: { state: 'pressed', label: 'Готово' } };
/** Недоступна: например, пока не выбрано время. */
export const Disabled: Story = { args: { state: 'disabled', label: 'Записаться' } };
/** Small — для кнопок внутри карточек и форм. */
export const Small: Story = { args: { size: 'small', label: 'Записаться' } };
/** Small Secondary — скругление border radius/3. */
export const SmallSecondary: Story = { args: { size: 'small', type: 'secondary', label: 'Добавить вложения' } };

/** Матрица Type × State × Size — все 12 вариантов рядом. */
export const AllVariants: Story = {
  decorators: [(Story) => <Story />],
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(3, 240px)', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <span />
      {(['default', 'pressed', 'disabled'] as ButtonState[]).map((s) => (
        <span key={s} className="ds-caption-small-16">{s}</span>
      ))}
      {(['large', 'small'] as ButtonSize[]).flatMap((size) =>
        (['primary', 'secondary'] as ButtonType[]).map((type) => (
          <Row key={`${type}-${size}`} label={`${type} · ${size}`}>
            {(['default', 'pressed', 'disabled'] as ButtonState[]).map((state) => (
              <Button key={state} {...args} type={type} state={state} size={size} />
            ))}
          </Row>
        )),
      )}
    </div>
  ),
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <span className="ds-caption-small-16">{label}</span>
      {children}
    </>
  );
}
