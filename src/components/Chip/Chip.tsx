import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './Chip.module.css';

export type ChipType = 'time' | 'filter' | 'tab' | 'tag' | 'tag small';
export type ChipState = 'not selected' | 'selected' | 'disabled' | 'default';

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** type: time | filter | tab | tag | tag small */
  type?: ChipType;
  /**
   * state. Допустимые сочетания (9 вариантов Figma):
   * time — not selected | selected; filter — not selected | selected | disabled;
   * tab — not selected | selected; tag и tag small — default.
   */
  state?: ChipState;
  /** Label */
  label: string;
}

const KEY: Record<ChipType, string> = { time: 'time', filter: 'filter', tab: 'tab', tag: 'tag', 'tag small': 'tagSmall' };
const STATE: Record<ChipState, string> = {
  'not selected': 'notSelected',
  selected: 'selected',
  disabled: 'disabled',
  default: 'stateDefault',
};

/** Chip — Figma 1214:7039. Чипсы выбора (time, filter, tab) и метки (tag, tag small). */
export function Chip({ type = 'time', state, label, className, disabled, ...rest }: ChipProps) {
  const isTag = type === 'tag' || type === 'tag small';
  const resolved: ChipState = state ?? (isTag ? 'default' : 'not selected');
  const cls = cx(styles.root, styles[KEY[type]], styles[STATE[resolved]], className);
  if (isTag) {
    return <span className={cls}>{label}</span>;
  }
  return (
    <button
      type="button"
      aria-pressed={resolved === 'selected'}
      disabled={disabled || resolved === 'disabled'}
      className={cls}
      {...rest}
    >
      {label}
    </button>
  );
}
