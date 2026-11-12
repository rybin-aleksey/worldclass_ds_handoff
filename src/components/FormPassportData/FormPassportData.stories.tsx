import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { FormPassportData } from './FormPassportData';

/**
 * Загрузка фото или скана документа. Empty — строка-приглашение с шевроном;
 * Filled — список вложенных файлов и кнопка «Добавить вложения» (вложенный Button Size=Small).
 *
 * Figma: Form / Passport Data `40000478:651` (Empty `40000478:650`, Filled `40000478:649`).
 */
const meta = {
  title: 'Components/Inputs/Form Passport Data',
  component: FormPassportData,
  tags: ['autodocs'],
  args: {
    state: 'empty',
    title: 'Паспортные данные',
    label: 'Фотография паспорта',
    hint: 'Загрузите фотографию/скан паспорта',
    filesTitle: 'Вложенные файлы',
    files: ['IMG__.png'],
    buttonLabel: 'Добавить вложения',
    onUpload: fn(),
    onRemoveFile: fn(),
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['empty', 'filled'], description: 'State' },
    title: { control: 'text', description: 'Title' },
    label: { control: 'text', description: 'Label (Empty)' },
    hint: { control: 'text', description: 'Hint (Empty)' },
    filesTitle: { control: 'text', description: 'Files Title (Filled)' },
    files: { control: 'object', description: 'Вложенные файлы (Filled)' },
    buttonLabel: { control: 'text', description: 'Label кнопки' },
    onUpload: { action: 'upload' },
    onRemoveFile: { action: 'removeFile' },
  },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 343 }}><Story /></div>],
} satisfies Meta<typeof FormPassportData>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Файлов ещё нет. */
export const Empty: Story = {};
/** Один файл загружен. */
export const Filled: Story = { args: { state: 'filled' } };
/** Несколько файлов. */
export const FilledMany: Story = { args: { state: 'filled', files: ['IMG__.png', 'scan_02.pdf', 'page_3.jpg'] } };

/** Empty и Filled рядом. */
export const AllVariants: Story = {
  decorators: [(Story) => <Story />],
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 343px)', gap: 'var(--spacing-8)', alignItems: 'start' }}>
      <FormPassportData {...args} state="empty" />
      <FormPassportData {...args} state="filled" files={['IMG__.png', 'scan_02.pdf']} />
    </div>
  ),
};
