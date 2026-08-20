export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className="font-mono text-[13px] tracking-wide text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
