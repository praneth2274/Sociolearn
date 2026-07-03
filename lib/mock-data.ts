export interface ImpactScores {
  education: number;
  technology: number;
  economic: number;
  environment: number;
  health: number;
  employment: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  publishedAt: string;
  readMinutes: number;
  easySummary: string;
  whatHappened: string;
  whyItHappened: string;
  whyItMatters: string;
  impact: ImpactScores;
}

export const CATEGORIES = [
  'Education',
  'Technology',
  'Science',
  'Business',
  'Environment',
  'Politics',
  'Sports',
  'Space',
  'Health'
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'central-bank-rate-move',
    title: 'Central bank cuts interest rates for the first time in two years',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    publishedAt: '2026-07-02T09:00:00Z',
    readMinutes: 4,
    easySummary:
      'The country\u2019s central bank lowered the cost of borrowing money to help businesses and people spend more.',
    whatHappened:
      'The central bank reduced its benchmark interest rate by 0.25 percentage points, the first cut since 2024.',
    whyItHappened:
      'Inflation has cooled toward the target range while job growth has slowed, giving policymakers room to ease.',
    whyItMatters:
      'Lower rates can mean cheaper loans for students, startups, and mortgages — but also smaller returns on savings.',
    impact: { education: 25, technology: 40, economic: 88, environment: 10, health: 15, employment: 55 }
  },
  {
    id: '2',
    slug: 'ai-chip-export-rules',
    title: 'New export rules reshape the global AI chip supply chain',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=800&q=80',
    publishedAt: '2026-07-01T14:30:00Z',
    readMinutes: 6,
    easySummary:
      'Governments changed the rules on which countries can buy advanced computer chips used to build AI.',
    whatHappened:
      'A revised export framework restricts sales of top-tier AI accelerators to a shorter list of approved countries.',
    whyItHappened:
      'Policymakers cited national security concerns tied to AI\u2019s military and economic applications.',
    whyItMatters:
      'Students entering hardware, chip design, or ML infrastructure roles may see shifting job markets and new regional hubs.',
    impact: { education: 30, technology: 92, economic: 60, environment: 5, health: 5, employment: 45 }
  },
  {
    id: '3',
    slug: 'coral-reef-heat-event',
    title: 'Fourth global coral bleaching event confirmed by marine scientists',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80',
    publishedAt: '2026-06-30T08:15:00Z',
    readMinutes: 5,
    easySummary:
      'Ocean heat has caused coral reefs around the world to lose their color and struggle to survive.',
    whatHappened:
      'Scientists confirmed mass coral bleaching across reefs in over 70 countries and territories.',
    whyItHappened:
      'Sustained ocean heatwaves, linked to rising global temperatures, pushed coral past survivable thresholds.',
    whyItMatters:
      'Reefs support fisheries, tourism economies, and coastal protection — subjects central to environmental science careers.',
    impact: { education: 45, technology: 15, economic: 40, environment: 95, health: 20, employment: 20 }
  },
  {
    id: '4',
    slug: 'university-ai-curriculum',
    title: 'Universities overhaul curricula to add mandatory AI literacy courses',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    publishedAt: '2026-06-29T11:00:00Z',
    readMinutes: 3,
    easySummary:
      'Colleges are adding new required classes to teach every student the basics of working with AI tools.',
    whatHappened:
      'A coalition of universities announced a shared AI-literacy requirement starting next academic year.',
    whyItHappened:
      'Employer surveys showed a widening gap between graduate AI fluency and workplace expectations.',
    whyItMatters:
      'Directly affects course planning, elective choices, and how students should prepare for interviews.',
    impact: { education: 90, technology: 60, economic: 30, environment: 5, health: 5, employment: 65 }
  }
];

export interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  streak: number;
}

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'Aditi R.', xp: 12480, streak: 41 },
  { rank: 2, name: 'Marcus T.', xp: 11920, streak: 33 },
  { rank: 3, name: 'Wei L.', xp: 10875, streak: 28 },
  { rank: 4, name: 'Sofia G.', xp: 9990, streak: 19 },
  { rank: 5, name: 'You', xp: 8460, streak: 12 }
];

export const MOCK_ACHIEVEMENTS = [
  { id: 'a1', title: 'First Explainer', description: 'Read your first AI-simplified article.', earned: true },
  { id: 'a2', title: '7-Day Streak', description: 'Learned something new for 7 days straight.', earned: true },
  { id: 'a3', title: 'Quiz Sharpshooter', description: 'Scored 100% on 5 quizzes.', earned: false },
  { id: 'a4', title: 'Category Explorer', description: 'Read from all 9 categories.', earned: false }
];
