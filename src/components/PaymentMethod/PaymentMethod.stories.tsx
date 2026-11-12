import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { PaymentMethod } from './PaymentMethod';

/**
 * Строка способа оплаты: СБП, «Наличными в клубе», «Карта». Выбранная — с галочкой.
 * Используется в паттерне «Другие способы оплаты» (ds/patterns.md).
 *
 * Figma: Payment Method `1233:4768` · isActive: false | true · Label.
 */
const meta = {
  title: 'Components/Selection/Payment Method',
  component: PaymentMethod,
  tags: ['autodocs'],
  args: { isActive: false, label: 'СБП', onClick: fn() },
  argTypes: {
    isActive: { control: 'boolean', description: 'isActive: false | true' },
    label: { control: 'text', description: 'Label' },
    disabled: { control: 'boolean' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 327 }}><Story /></div>],
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return <PaymentMethod {...args} onClick={(e) => { args.onClick?.(e); updateArgs({ isActive: !args.isActive }); }} />;
  },
} satisfies Meta<typeof PaymentMethod>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Не выбран. */
export const Inactive: Story = {};
/** Выбран — с галочкой. */
export const Active: Story = { args: { isActive: true, label: 'Наличными в клубе' } };

/** Группа способов оплаты: выбирается один. */
export const AllVariants: Story = {
  render: function Group(args) {
    const [value, setValue] = useState('СБП');
    return (
      <div role="radiogroup" aria-label="Способ оплаты" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {['СБП', 'Наличными в клубе', 'Карта'].map((l) => (
          <PaymentMethod key={l} {...args} label={l} isActive={value === l} onClick={() => setValue(l)} />
        ))}
      </div>
    );
  },
};
