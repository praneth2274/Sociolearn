import { FiAward, FiBookOpen, FiZap } from 'react-icons/fi';
import { MOCK_ARTICLES } from '@/lib/mock-data';
import NewsCard from '@/components/NewsCard';

const STATS = [
  { icon: FiZap, label: 'XP', value: '8,460' },
  { icon: FiBookOpen, label: 'Articles read', value: '132' },
  { icon: FiAward, label: 'Day streak', value: '12' }
];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 rounded-card border border-line bg-surface p-8 text-center sm:flex-row sm:text-left">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-2xl font-semibold text-white">
          SK
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold">Sara K.</h1>
          <p className="font-body text-sm text-ink/60">Competitive Exam · Preparing for Civil Services</p>
        </div>
        <div className="ml-auto flex gap-3">
          {STATS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-card border border-line bg-bg px-4 py-2 text-center">
              <Icon className="mx-auto mb-1 text-primary" size={16} />
              <p className="font-mono text-sm font-semibold">{value}</p>
              <p className="font-mono text-[10px] uppercase text-ink/40">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 font-display text-xl font-semibold">Reading History</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_ARTICLES.slice(0, 3).map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
