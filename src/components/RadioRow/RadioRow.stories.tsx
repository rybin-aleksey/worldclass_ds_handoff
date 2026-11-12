import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { RadioRow } from './RadioRow';

/**
 * Строка выбора одного варианта: радио слева и подпись, фон bg/baseGray, высота 40.
 * Срок и сумма рассрочки. Кликабельна вся строка (`<label>`).
 *
 * Figma: Radio Row `40000391:2983` · isActive: Yes | No · Label.
 */
const meta = {
  title: 'Components/Selection/Radio Row',
  component: RadioRow,
  tags: ['autodocs'],
  args: { isActive: false, label: '6 месяцев', name: 'installment', onChange: fn() },
  argTypes: {
    isActive: { control: 'boolean', description: 'isActive: Yes | No' },
    label: { control: 'text', description: 'Label' },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <RadioRow {...args} onChange={(e) => { args.onChange?.(e); updateArgs({ isActive: e.target.checked }); }} />;
  },
} satisfies Meta<typeof RadioRow>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Выбранная строка. */
export const Active: Story = { args: { isActive: true } };
/** Невыбранная строка. */
export const Inactive: Story = {};

/** Группа: срок рассрочки — выбирается один вариант. */
export const AllVariants: Story = {
  render: function Group(args) {
    const [value, setValue] = useState('6 месяцев');
    return (
      <div role="radiogroup" aria-label="Срок рассрочки" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {['3 месяца', '6 месяцев', '12 месяцев'].map((l) => (
          <RadioRow key={l} {...args} label={l} isActive={value === l} onChange={() => setValue(l)} />
        ))}
      </div>
    );
  },
};
