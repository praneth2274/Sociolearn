import Link from 'next/link';
import Image from 'next/image';
import { MOCK_ARTICLES } from '@/lib/mock-data';
import PageHeader from '@/components/PageHeader';

export default function TrendingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Live" title="Trending Now" description="Ranked by reader engagement over the last 24 hours." />

      <ol className="divide-y divide-line">
        {MOCK_ARTICLES.map((a, i) => (
          <li key={a.id}>
            <Link href={`/article/${a.id}`} className="group flex items-center gap-4 py-5">
              <span className="font-display text-2xl font-semibold text-ink/20 group-hover:text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-card">
                <Image src={a.image} alt="" fill className="object-cover" sizes="96px" />
              </div>
              <div className="min-w-0">
                <p className="ledger-index mb-1 uppercase">{a.category}</p>
                <h3 className="truncate font-display text-base font-semibold group-hover:text-primary">
                  {a.title}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
