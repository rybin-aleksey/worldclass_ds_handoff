import { useId, type InputHTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon } from '../Icon';
import { HelperText, type HelperTextState } from '../HelperText';
import styles from './TextField.module.css';

export type TextFieldRole = 'default' | 'pressed' | 'disabled';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'role' | 'size'> {
  /** Role: Default | Pressed | Disabled. Pressed работает и нативно — при фокусе. */
  role?: TextFieldRole;
  /** isIcon: иконка поиска слева */
  isIcon?: boolean;
  /** isHelperText: показать Helper Text под полем */
  isHelperText?: boolean;
  /** Placeholder */
  placeholder?: string;
  /** Текст Helper Text */
  helperText?: string;
  /** State вложенного Helper Text: ошибка и успех поля задаются только через него */
  helperState?: HelperTextState;
  /** Доступное имя поля, если рядом нет видимой подписи */
  label?: string;
}

/** Text Field — Figma 2223:4571 (8 вариантов: Role × isIcon × isHelperText). */
export function TextField({
  role = 'default',
  isIcon = false,
  isHelperText = false,
  placeholder = 'Введите название тренировки',
  helperText = 'Helper text',
  helperState = 'default',
  label,
  disabled,
  className,
  id,
  ...rest
}: TextFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = `${inputId}-helper`;
  const isDisabled = disabled || role === 'disabled';
  return (
    <div className={cx(styles.root, className)}>
      <div className={cx(styles.field, role === 'pressed' && styles.pressed, isDisabled && styles.disabled)}>
        {isIcon && <Icon name="20px / search" className={styles.icon} />}
        <input
          id={inputId}
          className={cx(styles.input, 'ds-cart-chips')}
          placeholder={placeholder}
          aria-label={label ?? placeholder}
          aria-describedby={isHelperText ? helperId : undefined}
          aria-invalid={isHelperText && helperState === 'negative' ? true : undefined}
          disabled={isDisabled}
          {...rest}
        />
      </div>
      {isHelperText && (
        <HelperText id={helperId} state={isDisabled ? 'disabled' : helperState} helperText={helperText} />
      )}
    </div>
  );
}
