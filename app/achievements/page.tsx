import { FiAward, FiLock } from 'react-icons/fi';
import { MOCK_ACHIEVEMENTS } from '@/lib/mock-data';
import PageHeader from '@/components/PageHeader';

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Progress" title="Achievements" description="Badges earned along your learning path." />
      <div className="grid gap-4 sm:grid-cols-2">
        {MOCK_ACHIEVEMENTS.map((a) => (
          <div
            key={a.id}
            className={[
              'flex items-start gap-3 rounded-card border p-4',
              a.earned ? 'border-primary/40 bg-primary/5' : 'border-line bg-surface opacity-60'
            ].join(' ')}
          >
            {a.earned ? (
              <FiAward className="mt-0.5 shrink-0 text-primary" size={20} />
            ) : (
              <FiLock className="mt-0.5 shrink-0 text-ink/40" size={20} />
            )}
            <div>
              <p className="font-display text-sm font-semibold">{a.title}</p>
              <p className="mt-0.5 font-body text-xs text-ink/60">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
