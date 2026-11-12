import type { HTMLAttributes } from 'react';
import { cx } from '../_shared/cx';
import { Icon, type IconName } from '../Icon';
import styles from './TabBar.module.css';

export type TabBarTab = 1 | 2 | 3 | 4 | 5;

const TABS: Array<{ label: string; icon: IconName }> = [
  { label: 'Главная', icon: '26px / home' },
  { label: 'Расписание', icon: '26px / schedule' },
  { label: 'Активность', icon: 'activity' },
  { label: 'Каталог', icon: '26px / catalog' },
  { label: 'Профиль', icon: '26px / profile' },
];

export interface TabBarProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** activeTab: 1 | 2 | 3 | 4 | 5 */
  activeTab?: TabBarTab;
  onChange?: (tab: TabBarTab) => void;
}

/** Tab Bar — Figma 407:2310. Нижний таббар на 5 вкладок, 375×83 (с зоной Home Bar 34 px). */
export function TabBar({ activeTab = 1, onChange, className, ...rest }: TabBarProps) {
  return (
    <nav className={cx(styles.root, className)} aria-label="Основная навигация" {...rest}>
      <ul className={styles.tabs}>
        {TABS.map((tab, i) => {
          const n = (i + 1) as TabBarTab;
          const active = n === activeTab;
          return (
            <li key={tab.label} className={styles.item}>
              <button
                type="button"
                aria-current={active ? 'page' : undefined}
                className={cx(styles.tab, active && styles.active)}
                onClick={() => onChange?.(n)}
              >
                <Icon name={tab.icon} size={tab.icon === 'activity' ? 30 : undefined} />
                <span className={styles.label}>{tab.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
