import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MOCK_ARTICLES } from '@/lib/mock-data';
import ImpactBar from '@/components/ImpactBar';
import ArticleActions from '@/components/ArticleActions';
import ReadingLevelToggle from '@/components/ReadingLevelToggle';
import AskAiBox from '@/components/AskAiBox';

export function generateStaticParams() {
  return MOCK_ARTICLES.map((a) => ({ id: a.id }));
}

const DIFFICULT_WORDS = [
  { word: 'Benchmark rate', meaning: 'The main interest rate a central bank sets, which other loan rates follow.', example: 'When the benchmark rate falls, mortgage rates usually fall too.' },
  { word: 'Inflation', meaning: 'The rate at which prices for goods and services rise over time.', example: 'High inflation means your money buys less than it did last year.' }
];

const INTERVIEW_QUESTIONS = [
  'Explain, in your own words, how an interest rate cut affects consumer spending.',
  'What tradeoffs does a central bank weigh when adjusting rates?',
  'How might this decision influence hiring in your target industry?'
];

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = MOCK_ARTICLES.find((a) => a.id === params.id);
  if (!article) notFound();

  const impactEntries = Object.entries(article.impact) as [string, number][];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="ledger-index mb-3 uppercase">{article.category}</p>
      <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{article.title}</h1>
      <div className="mt-3 flex items-center gap-3 font-mono text-xs text-ink/50">
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        <span>·</span>
        <span>{article.readMinutes} min read</span>
      </div>

      <div className="relative mt-6 h-72 w-full overflow-hidden rounded-card">
        <Image src={article.image} alt="" fill className="object-cover" sizes="768px" priority />
      </div>

      <ArticleActions />

      <div className="mt-8">
        <ReadingLevelToggle />
      </div>

      {/* Easy summary */}
      <section className="mt-6 rounded-card border border-line bg-surface p-5">
        <p className="ledger-index mb-2 uppercase">Easy Summary</p>
        <p className="font-body text-base leading-relaxed">{article.easySummary}</p>
      </section>

      {/* What / Why / Matters ledger */}
      <section className="mt-8 space-y-6">
        <div className="flex gap-4">
          <span className="ledger-index w-16 shrink-0 pt-1">01 · WHAT</span>
          <p className="font-body text-base leading-relaxed text-ink/80">{article.whatHappened}</p>
        </div>
        <div className="flex gap-4">
          <span className="ledger-index w-16 shrink-0 pt-1">02 · WHY</span>
          <p className="font-body text-base leading-relaxed text-ink/80">{article.whyItHappened}</p>
        </div>
        <div className="flex gap-4">
          <span className="ledger-index w-16 shrink-0 pt-1">03 · MATTERS</span>
          <p className="font-body text-base leading-relaxed text-ink/80">
            <span className="mark mark-primary">{article.whyItMatters}</span>
          </p>
        </div>
      </section>

      {/* Detailed summary + key points */}
      <section className="mt-10">
        <h2 className="mb-3 font-display text-xl font-semibold">Detailed Summary</h2>
        <p className="font-body text-sm leading-relaxed text-ink/70">
          {article.whatHappened} {article.whyItHappened} Analysts note the decision fits a broader
          pattern this quarter, and student researchers can expect follow-up coverage as more data
          becomes available.
        </p>
        <h3 className="mb-2 mt-5 font-display text-base font-semibold">Key Points</h3>
        <ul className="list-inside list-disc space-y-1 font-body text-sm text-ink/70">
          <li>{article.whatHappened}</li>
          <li>{article.whyItHappened}</li>
          <li>{article.whyItMatters}</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="mt-10">
        <h2 className="mb-4 font-display text-xl font-semibold">Timeline</h2>
        <ol className="space-y-4 border-l border-line pl-5">
          <li className="relative">
            <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
            <p className="font-mono text-xs text-ink/50">6 months ago</p>
            <p className="font-body text-sm text-ink/70">Early signals started appearing in related data.</p>
          </li>
          <li className="relative">
            <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
            <p className="font-mono text-xs text-ink/50">{new Date(article.publishedAt).toLocaleDateString()}</p>
            <p className="font-body text-sm text-ink/70">{article.whatHappened}</p>
          </li>
        </ol>
      </section>

      {/* Difficult words */}
      <section className="mt-10">
        <h2 className="mb-4 font-display text-xl font-semibold">Difficult Words</h2>
        <div className="space-y-4">
          {DIFFICULT_WORDS.map((w) => (
            <div key={w.word} className="rounded-card border border-line bg-surface p-4">
              <p className="font-display text-sm font-semibold">{w.word}</p>
              <p className="mt-1 font-body text-sm text-ink/70">{w.meaning}</p>
              <p className="mt-1 font-body text-xs italic text-ink/50">e.g. {w.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Society impact */}
      <section className="mt-10">
        <h2 className="mb-4 font-display text-xl font-semibold">Society Impact</h2>
        <div className="grid gap-4 rounded-card border border-line bg-surface p-5 sm:grid-cols-2">
          {impactEntries.map(([label, value]) => (
            <ImpactBar key={label} label={label[0].toUpperCase() + label.slice(1)} value={value} />
          ))}
        </div>
      </section>

      {/* Student & career impact */}
      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-card border border-line bg-surface p-5">
          <h2 className="mb-2 font-display text-lg font-semibold">Student Impact</h2>
          <p className="font-body text-sm text-ink/70">{article.whyItMatters}</p>
        </div>
        <div className="rounded-card border border-line bg-surface p-5">
          <h2 className="mb-2 font-display text-lg font-semibold">Career Opportunities</h2>
          <p className="font-body text-sm text-ink/70">
            Roles touched by this story include policy research, data analysis, and
            {' '}{article.category.toLowerCase()}-focused consulting.
          </p>
        </div>
      </section>

      {/* Interview questions */}
      <section className="mt-10">
        <h2 className="mb-3 font-display text-xl font-semibold">Interview Questions</h2>
        <ul className="space-y-2 font-body text-sm text-ink/70">
          {INTERVIEW_QUESTIONS.map((q) => (
            <li key={q} className="rounded-card border border-line bg-surface p-3">{q}</li>
          ))}
        </ul>
      </section>

      {/* Quiz CTA */}
      <section className="mt-10 rounded-card border border-line bg-primary/10 p-5 text-center">
        <h2 className="font-display text-lg font-semibold">Test what you just learned</h2>
        <p className="mt-1 font-body text-sm text-ink/60">A 5-question quiz generated from this article.</p>
        <button className="mt-4 rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-white hover:opacity-90">
          Start Quiz
        </button>
      </section>

      {/* Ask AI */}
      <section className="mt-10">
        <h2 className="mb-3 font-display text-xl font-semibold">Ask AI About This Story</h2>
        <AskAiBox />
      </section>

      {/* Comments */}
      <section className="mt-10">
        <h2 className="mb-3 font-display text-xl font-semibold">Comments</h2>
        <textarea
          placeholder="Share your take…"
          rows={3}
          className="w-full rounded-card border border-line bg-surface p-3 font-body text-sm outline-none focus:border-primary"
        />
        <button className="mt-2 rounded-full border border-line px-4 py-1.5 font-body text-sm font-semibold hover:bg-surface">
          Post comment
        </button>
      </section>
    </div>
  );
}
