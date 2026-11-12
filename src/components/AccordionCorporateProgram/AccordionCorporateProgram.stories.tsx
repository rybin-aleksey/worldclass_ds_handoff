import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AccordionCorporateProgram } from './AccordionCorporateProgram';

/**
 * Аккордеон «Корпоративная программа» с блоком загрузки файлов.
 * Без `isOpen` управляет собой сам — кликните по заголовку, шеврон повернётся плавно.
 *
 * Figma: Accordion / Corporate Program `701:4604` · dropdown_isOpen: no | yes.
 */
const meta = {
  title: 'Components/Inputs/Accordion Corporate Program',
  component: AccordionCorporateProgram,
  tags: ['autodocs'],
  args: {
    defaultOpen: false,
    title: 'Корпоративная программа',
    description:
      'Скидку 20% на клубные карты как для взрослых, так и для детей получают сотрудники компаний-партнёров. Загрузите документ, подтверждающий место работы.',
    uploadTitle: 'Загрузите файлы',
    uploadHint: 'Выписку с работы или копию трудового договора',
    onToggle: fn(),
    onUpload: fn(),
  },
  argTypes: {
    isOpen: { control: 'boolean', description: 'dropdown_isOpen (управляемый режим)' },
    defaultOpen: { control: 'boolean', description: 'Открыт при первом рендере (неуправляемый режим)' },
    title: { control: 'text' },
    description: { control: 'text' },
    uploadTitle: { control: 'text' },
    uploadHint: { control: 'text' },
    onToggle: { action: 'toggle' },
    onUpload: { action: 'upload' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 327 }}><Story /></div>],
} satisfies Meta<typeof AccordionCorporateProgram>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Свёрнут (dropdown_isOpen=no). Кликните — раскроется. */
export const Closed: Story = {};
/** Раскрыт (dropdown_isOpen=yes). */
export const Open: Story = { args: { defaultOpen: true } };

/** no и yes рядом. */
export const AllVariants: Story = {
  decorators: [(Story) => <Story />],
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 327px)', gap: 'var(--spacing-8)', alignItems: 'start' }}>
      <AccordionCorporateProgram {...args} isOpen={false} />
      <AccordionCorporateProgram {...args} isOpen />
    </div>
  ),
};
