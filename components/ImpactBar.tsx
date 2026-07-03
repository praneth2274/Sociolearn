'use client';

import { motion } from 'framer-motion';

export default function ImpactBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between font-body text-xs">
        <span className="text-ink/70">{label}</span>
        <span className="font-mono text-ink/50">{value}/100</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-line">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
