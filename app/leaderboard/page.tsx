import { MOCK_LEADERBOARD } from '@/lib/mock-data';
import PageHeader from '@/components/PageHeader';

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="This week" title="Leaderboard" description="Top learners ranked by XP earned." />
      <div className="overflow-hidden rounded-card border border-line">
        <table className="w-full border-collapse font-body text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Rank</th>
              <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Learner</th>
              <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Streak</th>
              <th className="px-4 py-3 text-right font-mono text-xs uppercase text-ink/50">XP</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_LEADERBOARD.map((entry) => (
              <tr
                key={entry.rank}
                className={['border-t border-line', entry.name === 'You' ? 'bg-primary/10' : ''].join(' ')}
              >
                <td className="px-4 py-3 font-mono">{entry.rank}</td>
                <td className="px-4 py-3 font-semibold">{entry.name}</td>
                <td className="px-4 py-3 text-ink/60">{entry.streak} days</td>
                <td className="px-4 py-3 text-right font-mono">{entry.xp.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
