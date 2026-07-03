export default function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="ledger-index mb-2 uppercase">{eyebrow}</p>}
      <h1 className="font-display text-3xl font-semibold">{title}</h1>
      {description && <p className="mt-2 max-w-xl font-body text-sm text-ink/60">{description}</p>}
    </div>
  );
}
