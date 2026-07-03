'use client';

import { useState } from 'react';

const LEVELS = ["Explain like I'm 10", "Explain like I'm 15", 'College Student', 'Competitive Exam', 'Placement Prep'];

export default function ReadingLevelToggle() {
  const [active, setActive] = useState(LEVELS[2]);

  return (
    <div>
      <p className="ledger-index mb-2 uppercase">Reading level</p>
      <div className="flex flex-wrap gap-2">
        {LEVELS.map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setActive(level)}
            className={[
              'rounded-full border px-3 py-1.5 font-body text-xs font-medium transition',
              active === level
                ? 'border-primary bg-primary text-white'
                : 'border-line text-ink/60 hover:border-primary/40'
            ].join(' ')}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}
