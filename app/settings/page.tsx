'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/lib/theme-provider';

const NOTIFICATIONS = [
  { id: 'breaking', label: 'Breaking news alerts', default: true },
  { id: 'daily-quiz', label: 'Daily quiz reminder', default: true },
  { id: 'streak', label: 'Streak-at-risk reminder', default: false },
  { id: 'weekly-digest', label: 'Weekly learning digest', default: true }
];

export default function SettingsPage() {
  const { theme } = useTheme();
  const [prefs, setPrefs] = useState(
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, n.default]))
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Preferences" title="Settings" />

      <section className="rounded-card border border-line bg-surface p-5">
        <h2 className="mb-1 font-display text-lg font-semibold">Appearance</h2>
        <p className="mb-4 font-body text-sm text-ink/60">
          Choose light, dark, or match your device. Currently: <span className="font-semibold text-ink">{theme}</span>.
        </p>
        <ThemeToggle />
      </section>

      <section className="mt-6 rounded-card border border-line bg-surface p-5">
        <h2 className="mb-1 font-display text-lg font-semibold">Notifications</h2>
        <p className="mb-4 font-body text-sm text-ink/60">Control what SocioLearn AI sends you.</p>
        <div className="space-y-3">
          {NOTIFICATIONS.map((n) => (
            <label key={n.id} className="flex items-center justify-between gap-3">
              <span className="font-body text-sm">{n.label}</span>
              <input
                type="checkbox"
                checked={prefs[n.id]}
                onChange={() => setPrefs((p) => ({ ...p, [n.id]: !p[n.id] }))}
                className="h-4 w-4 accent-primary"
              />
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
