import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import styles from './Button.module.css';

export type ButtonType = 'primary' | 'secondary';
export type ButtonState = 'default' | 'pressed' | 'disabled';
export type ButtonSize = 'large' | 'small';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Type: Primary — главное действие экрана, Secondary — второстепенное. */
  type?: ButtonType;
  /** State: зафиксированное состояние для сверки. Pressed работает и нативно (:active). */
  state?: ButtonState;
  /** Size: Large — 58 px, Small — 48 px (кнопки внутри карточек и форм). */
  size?: ButtonSize;
  /** Label */
  label: string;
  /** HTML-тип кнопки (проп type занят вариантом из Figma). */
  htmlType?: 'button' | 'submit' | 'reset';
}

/** Button — Figma 40000176:697 (12 вариантов: Type × State × Size). */
export function Button({
  type = 'primary',
  state = 'default',
  size = 'large',
  label,
  htmlType = 'button',
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || state === 'disabled';
  return (
    <button
      type={htmlType}
      className={cx(styles.root, styles[type], styles[size], state === 'pressed' && styles.pressed, className)}
      disabled={isDisabled}
      {...rest}
    >
      {label}
    </button>
  );
}
