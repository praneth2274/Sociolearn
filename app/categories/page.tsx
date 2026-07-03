import Link from 'next/link';
import { CATEGORIES, MOCK_ARTICLES } from '@/lib/mock-data';
import PageHeader from '@/components/PageHeader';

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Browse" title="Categories" description="Nine lenses on the same world." />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {CATEGORIES.map((c) => {
          const count = MOCK_ARTICLES.filter((a) => a.category === c).length;
          return (
            <Link
              key={c}
              href={`/categories/${c.toLowerCase()}`}
              className="group rounded-card border border-line bg-surface p-5 transition hover:border-primary/50"
            >
              <h2 className="font-display text-lg font-semibold group-hover:text-primary">{c}</h2>
              <p className="mt-1 font-mono text-xs text-ink/50">{count} active stories</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
