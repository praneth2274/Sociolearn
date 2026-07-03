import { CATEGORIES, MOCK_ARTICLES } from '@/lib/mock-data';
import NewsCard from '@/components/NewsCard';
import PageHeader from '@/components/PageHeader';

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Explore"
        title="Explore News"
        description="Every story, broken into what happened, why it happened, and why it matters."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <button className="rounded-full bg-primary px-4 py-1.5 font-mono text-xs text-white">All</button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink/70 hover:border-primary hover:text-primary"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_ARTICLES.map((a) => (
          <NewsCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}
