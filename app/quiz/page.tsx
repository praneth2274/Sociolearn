'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

const QUESTIONS = [
  {
    q: 'What did the central bank do to its benchmark interest rate?',
    options: ['Raised it', 'Cut it', 'Left it unchanged', 'Abolished it'],
    answer: 1
  },
  {
    q: 'Why did universities add mandatory AI-literacy courses?',
    options: [
      'A government mandate',
      'Falling enrollment',
      'A gap between graduate skills and employer expectations',
      'Budget surplus'
    ],
    answer: 2
  }
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUESTIONS[step];

  const submit = () => {
    if (selected === null) return;
    if (selected === question.answer) setScore((s) => s + 1);
    if (step + 1 < QUESTIONS.length) {
      setStep((s) => s + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Daily Quiz" title="Test what you've learned" />

      {!done ? (
        <div className="rounded-card border border-line bg-surface p-6">
          <p className="ledger-index mb-2 uppercase">
            Question {step + 1} of {QUESTIONS.length}
          </p>
          <h2 className="mb-5 font-display text-lg font-semibold">{question.q}</h2>
          <div className="space-y-2">
            {question.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelected(i)}
                className={[
                  'w-full rounded-card border px-4 py-3 text-left font-body text-sm transition',
                  selected === i ? 'border-primary bg-primary/10 text-primary' : 'border-line hover:border-primary/40'
                ].join(' ')}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={submit}
            disabled={selected === null}
            className="mt-5 rounded-full bg-primary px-6 py-2.5 font-body text-sm font-semibold text-white disabled:opacity-40"
          >
            {step + 1 === QUESTIONS.length ? 'Finish' : 'Next question'}
          </button>
        </div>
      ) : (
        <div className="rounded-card border border-line bg-surface p-8 text-center">
          <h2 className="font-display text-2xl font-semibold">
            {score}/{QUESTIONS.length} correct
          </h2>
          <p className="mt-2 font-body text-sm text-ink/60">+{score * 20} XP earned today.</p>
        </div>
      )}
    </div>
  );
}
