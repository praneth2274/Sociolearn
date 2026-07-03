'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiMenu, FiX, FiBell } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '/home', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/trending', label: 'Trending' },
  { href: '/categories', label: 'Categories' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/leaderboard', label: 'Leaderboard' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-card bg-primary font-mono text-sm text-white"
          >
            SL
          </span>
          SocioLearn <span className="text-primary">AI</span>
        </Link>

        <nav className="hidden items-center gap-6 font-body text-sm md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="relative">
            <span className="sr-only">Ask the AI about any topic</span>
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" size={15} />
            <input
              type="search"
              placeholder="Ask AI about any news topic…"
              className="w-56 rounded-full border border-line bg-surface py-1.5 pl-9 pr-3 font-body text-sm outline-none transition focus:w-72 focus:border-primary"
            />
          </label>
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-ink/70 hover:bg-surface"
          >
            <FiBell size={16} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
          </button>
          <ThemeToggle />
          <Link
            href="/profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-white"
          >
            SK
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-card border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 font-body text-sm">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink/80">
                {l.label}
              </Link>
            ))}
            <Link href="/profile" onClick={() => setOpen(false)} className="text-ink/80">
              Profile
            </Link>
            <Link href="/settings" onClick={() => setOpen(false)} className="text-ink/80">
              Settings
            </Link>
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-xs text-ink/50">Theme</span>
            <ThemeToggle compact />
          </div>
        </div>
      )}
    </header>
  );
}
