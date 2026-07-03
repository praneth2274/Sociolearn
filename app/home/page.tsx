import Link from 'next/link';
import { FiSearch, FiCpu, FiZap } from 'react-icons/fi';
import { MOCK_ARTICLES, CATEGORIES } from '@/lib/mock-data';
import NewsCard from '@/components/NewsCard';
import LiveTrendingRail from '@/components/LiveTrendingRail';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breaking news banner */}
      <div className="mb-8 flex items-center gap-3 rounded-card border border-accent/30 bg-accent/10 px-4 py-2.5 font-body text-sm text-accent">
        <FiZap className="shrink-0" size={16} />
        <span className="line-clamp-1">
          Breaking: {MOCK_ARTICLES[0].title}
        </span>
        <Link href={`/article/${MOCK_ARTICLES[0].id}`} className="ml-auto shrink-0 font-semibold underline underline-offset-2">
          Read
        </Link>
      </div>

      {/* Hero + AI search */}
      <section className="mb-10">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Welcome back. What do you want to <span className="mark mark-primary">understand</span> today?
        </h1>
        <label className="relative mt-5 block max-w-xl">
          <span className="sr-only">Ask AI about any news topic</span>
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={18} />
          <input
            type="search"
            placeholder="e.g. Why did the central bank cut rates?"
            className="w-full rounded-full border border-line bg-surface py-3 pl-12 pr-4 font-body text-sm outline-none focus:border-primary"
          />
        </label>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          {/* Today's Learning */}
          <section>
            <h2 className="mb-4 font-display text-xl font-semibold">Today&apos;s Learning</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {MOCK_ARTICLES.slice(0, 2).map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </section>

          {/* Recommended */}
          <section>
            <h2 className="mb-4 font-display text-xl font-semibold">Recommended for you</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {MOCK_ARTICLES.slice(1, 3).map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </section>

          {/* Latest */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold">Latest Articles</h2>
              <Link href="/explore" className="font-mono text-xs text-primary">
                View all →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {MOCK_ARTICLES.map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <LiveTrendingRail articles={MOCK_ARTICLES} />

          {/* AI Tutor widget */}
          <div className="rounded-card border border-line bg-surface p-4">
            <div className="mb-2 flex items-center gap-2">
              <FiCpu className="text-primary" size={16} />
              <h2 className="font-display text-base font-semibold">AI Tutor</h2>
            </div>
            <p className="font-body text-sm text-ink/60">
              Stuck on a concept from today&apos;s news? Ask and get an
              explanation tuned to your reading level.
            </p>
            <button
              type="button"
              className="mt-3 w-full rounded-full bg-primary py-2 font-body text-sm font-semibold text-white hover:opacity-90"
            >
              Ask the AI Tutor
            </button>
          </div>

          {/* Daily Quiz */}
          <div className="rounded-card border border-line bg-surface p-4">
            <h2 className="mb-1 font-display text-base font-semibold">Daily Quiz</h2>
            <p className="font-body text-sm text-ink/60">5 questions from today&apos;s top stories.</p>
            <Link
              href="/quiz"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-line py-2 font-body text-sm font-semibold hover:bg-bg"
            >
              Take today&apos;s quiz
            </Link>
          </div>

          {/* Popular categories */}
          <div className="rounded-card border border-line bg-surface p-4">
            <h2 className="mb-3 font-display text-base font-semibold">Popular Categories</h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/categories/${c.toLowerCase()}`}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink/70 hover:border-primary hover:text-primary"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
