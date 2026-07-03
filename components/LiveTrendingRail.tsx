'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiRadio, FiArrowUpRight } from 'react-icons/fi';
import type { Article } from '@/lib/mock-data';

// NOTE: this renders the live-rail UI against mock data for now.
// Wiring to Socket.IO ("news:new" on the /live namespace) + the 60s
// polling fallback happens in the Real-Time News Automation phase.
export default function LiveTrendingRail({ articles }: { articles: Article[] }) {
  const [hasNew, setHasNew] = useState(true);

  return (
    <div className="rounded-card border border-line bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiRadio className="text-accent" size={16} />
          <h2 className="font-display text-base font-semibold">Live Trending</h2>
        </div>
        {hasNew && (
          <button
            type="button"
            onClick={() => setHasNew(false)}
            className="flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] text-accent transition hover:bg-accent/25"
          >
            New stories available — tap to refresh
          </button>
        )}
      </div>
      <ul className="divide-y divide-line">
        {articles.map((a, i) => (
          <li key={a.id}>
            <Link
              href={`/article/${a.id}`}
              className="flex items-center justify-between gap-3 py-3 text-sm transition hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <span className="ledger-index w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="line-clamp-1 font-body">{a.title}</span>
              </span>
              <FiArrowUpRight className="shrink-0 text-ink/30" size={14} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
