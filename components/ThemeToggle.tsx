'use client';

import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useTheme, type ThemeChoice } from '@/lib/theme-provider';

const OPTIONS: { value: ThemeChoice; label: string; icon: typeof FiSun }[] = [
  { value: 'light', label: 'Light', icon: FiSun },
  { value: 'dark', label: 'Dark', icon: FiMoon },
  { value: 'system', label: 'System', icon: FiMonitor }
];

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1"
    >
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            title={label}
            onClick={() => setTheme(value)}
            className={[
              'flex items-center justify-center rounded-full transition-colors',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              compact ? 'h-7 w-7' : 'h-8 w-8',
              active ? 'bg-primary text-white' : 'text-ink/60 hover:text-ink'
            ].join(' ')}
          >
            <Icon size={compact ? 14 : 15} />
            <span className="sr-only">{label} theme</span>
          </button>
        );
      })}
    </div>
  );
}
