import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/mock-data';

const TOP_IMPACT = (impact: Article['impact']) =>
  (Object.entries(impact) as [string, number][]).sort((a, b) => b[1] - a[1])[0];

export default function NewsCard({ article }: { article: Article }) {
  const [topLabel, topScore] = TOP_IMPACT(article.impact);

  return (
    <Link
      href={`/article/${article.id}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink/70">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-base font-semibold leading-snug">{article.title}</h3>
        <p className="font-body text-sm text-ink/60">{article.easySummary}</p>

        <dl className="mt-1 space-y-1.5 border-t border-line pt-3">
          <div className="flex gap-2 text-xs">
            <dt className="ledger-index shrink-0 pt-0.5">01 · WHAT</dt>
            <dd className="text-ink/70 line-clamp-1">{article.whatHappened}</dd>
          </div>
          <div className="flex gap-2 text-xs">
            <dt className="ledger-index shrink-0 pt-0.5">02 · WHY</dt>
            <dd className="text-ink/70 line-clamp-1">{article.whyItHappened}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between pt-2 font-mono text-[11px] text-ink/50">
          <span>{article.readMinutes} min read</span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
            Top impact · {topLabel} {topScore}
          </span>
        </div>
      </div>
    </Link>
  );
}
