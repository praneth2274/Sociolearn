import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiZap, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { MOCK_ARTICLES } from '@/lib/mock-data';
import ImpactBar from '@/components/ImpactBar';

const PILLARS = [
  {
    icon: FiZap,
    title: 'What happened',
    body: 'A plain-English summary of the event — no jargon, no assumed context.'
  },
  {
    icon: FiTarget,
    title: 'Why it happened',
    body: 'The chain of causes, explained like a professor annotating the margin.'
  },
  {
    icon: FiTrendingUp,
    title: 'Why it matters to you',
    body: 'Scored impact on your studies, career path, and the wider economy.'
  }
];

export default function LandingPage() {
  const sample = MOCK_ARTICLES[1];

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="ledger-index mb-4 uppercase">A Final Year IT Major Project</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Understand the <span className="mark mark-primary">world</span>,
              <br /> not just the news.
            </h1>
            <p className="mt-5 max-w-md font-body text-base text-ink/70">
              SocioLearn AI reads every headline the way a good teacher would —
              breaking it into what happened, why it happened, and why it
              actually matters to a student like you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/home"
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-white transition hover:opacity-90"
              >
                Start learning <FiArrowRight />
              </Link>
              <Link
                href="/explore"
                className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-body text-sm font-semibold text-ink transition hover:bg-surface"
              >
                Explore the feed
              </Link>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface p-5 shadow-xl shadow-primary/5">
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-card">
              <Image src={sample.image} alt="" fill className="object-cover" sizes="480px" />
            </div>
            <p className="ledger-index mb-1 uppercase">{sample.category}</p>
            <h3 className="font-display text-lg font-semibold leading-snug">{sample.title}</h3>
            <p className="mt-2 font-body text-sm text-ink/60">{sample.easySummary}</p>
            <div className="mt-4 space-y-3 border-t border-line pt-4">
              <ImpactBar label="Technology impact" value={sample.impact.technology} />
              <ImpactBar label="Employment impact" value={sample.impact.employment} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-card border border-line bg-bg p-6">
              <Icon className="mb-4 text-primary" size={22} />
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 font-body text-sm text-ink/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Ready to read the news like a <span className="mark mark-primary">strategist</span>?
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-ink/60">
          Free to use. No credit card. Built for students preparing for exams,
          interviews, and the world beyond both.
        </p>
        <Link
          href="/home"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-white hover:opacity-90"
        >
          Get started <FiArrowRight />
        </Link>
      </section>
    </div>
  );
}
