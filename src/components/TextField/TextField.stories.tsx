import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TextField, type TextFieldRole } from './TextField';

/**
 * Поле ввода с опциональной иконкой поиска и подсказкой. Высота поля 44 px.
 * Pressed работает и нативно — кликните в поле. Своей «красной» ошибки у поля нет:
 * ошибка и успех показываются только через Helper Text (`isHelperText` + `helperState`).
 *
 * Figma: Text Field `2223:4571` · 8 вариантов (Role × isIcon × isHelperText). Пример состояний — `40000403:3026`.
 */
const meta = {
  title: 'Components/Inputs/Text Field',
  component: TextField,
  tags: ['autodocs'],
  args: {
    role: 'default',
    isIcon: false,
    isHelperText: false,
    placeholder: 'Введите название тренировки',
    helperText: 'Helper text',
    helperState: 'default',
    onChange: fn(),
  },
  argTypes: {
    role: { control: 'inline-radio', options: ['default', 'pressed', 'disabled'], description: 'Role' },
    isIcon: { control: 'boolean', description: 'isIcon — иконка поиска' },
    isHelperText: { control: 'boolean', description: 'isHelperText' },
    placeholder: { control: 'text', description: 'Placeholder' },
    helperText: { control: 'text' },
    helperState: { control: 'inline-radio', options: ['default', 'negative', 'success', 'disabled'], description: 'State вложенного Helper Text' },
    label: { control: 'text', description: 'Доступное имя поля' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Поле по умолчанию. */
export const Default: Story = {};
/** Поиск: с иконкой. */
export const Search: Story = { args: { isIcon: true, placeholder: 'Поиск тренера' } };
/** Pressed — зафиксированное состояние фокуса. */
export const Pressed: Story = { args: { role: 'pressed' } };
/** Недоступно. */
export const Disabled: Story = { args: { role: 'disabled' } };
/** Ошибка: код из СМС не подошёл. */
export const Negative: Story = { args: { isHelperText: true, helperState: 'negative', helperText: 'Неверный код', placeholder: 'Код из СМС' } };
/** Успех: код подтверждён. */
export const Success: Story = { args: { isHelperText: true, helperState: 'success', helperText: 'Код подтверждён', placeholder: 'Код из СМС' } };

/** Матрица Role × isIcon × isHelperText — все 8 вариантов Figma и состояния Helper Text. */
export const AllVariants: Story = {
  decorators: [(Story) => <Story />],
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 311px)', gap: 'var(--spacing-6)' }}>
      {(['default', 'pressed', 'disabled'] as TextFieldRole[]).flatMap((role) =>
        [false, true].map((isIcon) => (
          <Cell key={`${role}${isIcon}`} label={`role=${role} · isIcon=${isIcon}`}>
            <TextField {...args} role={role} isIcon={isIcon} isHelperText={false} />
          </Cell>
        )),
      )}
      {[false, true].map((isIcon) => (
        <Cell key={`h${isIcon}`} label={`isHelperText · isIcon=${isIcon}`}>
          <TextField {...args} isIcon={isIcon} isHelperText />
        </Cell>
      ))}
      <Cell label="helper · negative"><TextField {...args} isHelperText helperState="negative" helperText="Неверный код" /></Cell>
      <Cell label="helper · success"><TextField {...args} isHelperText helperState="success" helperText="Код подтверждён" /></Cell>
    </div>
  ),
};

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
      <span className="ds-caption-small-16">{label}</span>
      {children}
    </div>
  );
}
