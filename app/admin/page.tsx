import { FiUsers, FiFileText, FiActivity, FiAlertCircle } from 'react-icons/fi';
import PageHeader from '@/components/PageHeader';

const STATS = [
  { icon: FiUsers, label: 'Active users', value: '4,218' },
  { icon: FiFileText, label: 'Articles enriched', value: '1,096' },
  { icon: FiActivity, label: 'Fetch jobs today', value: '48' },
  { icon: FiAlertCircle, label: 'Failed fetches (7d)', value: '2' }
];

const LOGS = [
  { time: '09:45', category: 'Technology', found: 6, inserted: 4, status: 'ok' },
  { time: '09:30', category: 'Business', found: 3, inserted: 3, status: 'ok' },
  { time: '09:15', category: 'Environment', found: 5, inserted: 0, status: 'error' },
  { time: '09:00', category: 'Politics', found: 8, inserted: 6, status: 'ok' }
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Admin" title="Dashboard" description="Automation health, moderation, and platform analytics." />

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-card border border-line bg-surface p-4">
            <Icon className="mb-2 text-primary" size={18} />
            <p className="font-mono text-xl font-semibold">{value}</p>
            <p className="font-mono text-[11px] uppercase text-ink/40">{label}</p>
          </div>
        ))}
      </div>

      <section>
        <h2 className="mb-4 font-display text-xl font-semibold">Automation Logs</h2>
        <div className="overflow-hidden rounded-card border border-line">
          <table className="w-full border-collapse font-body text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Time</th>
                <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Category</th>
                <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Found</th>
                <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Inserted</th>
                <th className="px-4 py-3 font-mono text-xs uppercase text-ink/50">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {LOGS.map((log, i) => (
                <tr key={i} className="border-t border-line">
                  <td className="px-4 py-3 font-mono">{log.time}</td>
                  <td className="px-4 py-3">{log.category}</td>
                  <td className="px-4 py-3 font-mono">{log.found}</td>
                  <td className="px-4 py-3 font-mono">{log.inserted}</td>
                  <td className="px-4 py-3">
                    <span
                      className={[
                        'rounded-full px-2 py-0.5 font-mono text-[11px]',
                        log.status === 'ok' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'
                      ].join(' ')}
                    >
                      {log.status === 'ok' ? 'OK' : 'ERROR'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    {log.status === 'error' && (
                      <button className="font-mono text-xs text-accent underline underline-offset-2">Retry</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
