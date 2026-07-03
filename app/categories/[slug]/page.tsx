import { CATEGORIES, MOCK_ARTICLES } from '@/lib/mock-data';
import NewsCard from '@/components/NewsCard';
import PageHeader from '@/components/PageHeader';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.toLowerCase() }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.toLowerCase() === params.slug) ?? params.slug;
  const articles = MOCK_ARTICLES.filter((a) => a.category.toLowerCase() === params.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Category" title={category} description={`Everything SocioLearn AI has explained about ${category.toLowerCase()}.`} />
      {articles.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      ) : (
        <p className="font-body text-sm text-ink/50">
          No stories in this category yet — the automated fetch job checks every 15 minutes.
        </p>
      )}
    </div>
  );
}
