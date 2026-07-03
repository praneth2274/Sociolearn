import Link from 'next/link';

const COLUMNS = [
  {
    heading: 'Learn',
    links: [
      { href: '/explore', label: 'Explore News' },
      { href: '/quiz', label: 'Daily Quiz' },
      { href: '/leaderboard', label: 'Leaderboard' }
    ]
  },
  {
    heading: 'Categories',
    links: [
      { href: '/categories/technology', label: 'Technology' },
      { href: '/categories/economy', label: 'Business' },
      { href: '/categories/environment', label: 'Environment' }
    ]
  },
  {
    heading: 'Account',
    links: [
      { href: '/settings', label: 'Settings' },
      { href: '/bookmarks', label: 'Bookmarks' },
      { href: '/achievements', label: 'Achievements' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">
            SocioLearn <span className="text-primary">AI</span>
          </p>
          <p className="mt-2 max-w-xs font-body text-sm text-ink/60">
            Understand the world, not just the news.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="ledger-index mb-3 uppercase">{col.heading}</p>
            <ul className="space-y-2 font-body text-sm text-ink/70">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-4 py-4 text-center font-mono text-xs text-ink/40 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} SocioLearn AI — a student learning project.
      </div>
    </footer>
  );
}
