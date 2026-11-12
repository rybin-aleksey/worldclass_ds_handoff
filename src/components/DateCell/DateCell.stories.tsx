import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DateCell } from './DateCell';

/**
 * Ячейка дня в ленте дат: день недели, число, точка-индикатор (есть занятия).
 * В Figma 3 варианта: точка бывает только у неактивной ячейки.
 *
 * Figma: Date Cell `1595:2255` · isActive: false | true · isDotted: true | false · Day, Number.
 */
const meta = {
  title: 'Components/Selection/Date Cell',
  component: DateCell,
  tags: ['autodocs'],
  args: { isActive: false, isDotted: false, day: 'пн', number: '1', onClick: fn() },
  argTypes: {
    isActive: { control: 'boolean', description: 'isActive' },
    isDotted: { control: 'boolean', description: 'isDotted (только при isActive=false)' },
    day: { control: 'text', description: 'Day' },
    number: { control: 'text', description: 'Number' },
    onClick: { action: 'click' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DateCell>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Обычный день. */
export const Default: Story = {};
/** День с занятиями. */
export const Dotted: Story = { args: { isDotted: true } };
/** Выбранный день. */
export const Active: Story = { args: { isActive: true } };

const WEEK = [['пн', '10'], ['вт', '11'], ['ср', '12'], ['чт', '13'], ['пт', '14'], ['сб', '15'], ['вс', '16']];

/** Три варианта Figma + живая лента недели. */
export const AllVariants: Story = {
  render: function All(args) {
    const [day, setDay] = useState('12');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <DateCell {...args} isActive={false} isDotted />
          <DateCell {...args} isActive={false} isDotted={false} />
          <DateCell {...args} isActive />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          {WEEK.map(([d, n]) => (
            <DateCell key={n} day={d} number={n} isDotted={['11', '14'].includes(n)} isActive={day === n} onClick={() => setDay(n)} />
          ))}
        </div>
      </div>
    );
  },
};
