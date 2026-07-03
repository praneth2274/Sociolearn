import { MOCK_ARTICLES } from '@/lib/mock-data';
import NewsCard from '@/components/NewsCard';
import PageHeader from '@/components/PageHeader';

export default function BookmarksPage() {
  const saved = MOCK_ARTICLES.slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Saved" title="Bookmarks" description="Articles you've set aside to revisit." />
      {saved.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p className="font-body text-sm text-ink/50">Nothing saved yet — tap the bookmark icon on any article.</p>
      )}
    </div>
  );
}
