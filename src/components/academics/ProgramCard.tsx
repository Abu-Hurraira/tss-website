import type { Program } from '@/types/academic'

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <article className="grid gap-6 rounded-[22px] border border-border bg-surface p-6 md:grid-cols-[120px_1fr] md:p-8">
      <p className="font-display text-4xl text-brand">{String(index + 1).padStart(2, '0')}</p>
      <div>
        <h3 className="text-2xl font-semibold text-navy">{program.title}</h3>
        <p className="mt-1 text-sm font-medium text-accent-orange">{program.ages}</p>
        <p className="mt-3 max-w-3xl text-ink-secondary">{program.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {program.highlights.map((h) => (
            <li key={h} className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function DepartmentCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="border-l-2 border-brand pl-4">
      <h3 className="font-semibold text-navy">{name}</h3>
      <p className="mt-1 text-sm text-ink-secondary">{description}</p>
    </div>
  )
}

export function AcademicPathway({ programs }: { programs: Program[] }) {
  return (
    <div className="space-y-6">
      {programs.map((program, index) => (
        <ProgramCard key={program.id} program={program} index={index} />
      ))}
    </div>
  )
}

export function CurriculumSection({
  items,
}: {
  items: { title: string; text: string }[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="rounded-[16px] border border-border bg-surface p-5">
          <h3 className="font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 text-sm text-ink-secondary">{item.text}</p>
        </div>
      ))}
    </div>
  )
}
