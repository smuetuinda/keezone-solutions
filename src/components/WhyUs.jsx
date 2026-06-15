const reasons = [
  {
    title: 'Qualified Personnel',
    desc: 'Every technician on our team holds recognised electrical qualifications. No shortcuts — we bring credentials to every site.',
  },
  {
    title: 'Fast Response',
    desc: 'Fault at midnight? Emergency on-site? We show up when it matters, with the tools and expertise to resolve it quickly.',
  },
  {
    title: 'Safety-Focused',
    desc: 'Safety is non-negotiable. We design, install, and inspect with the protection of people and property as our first principle.',
  },
  {
    title: 'Customer-Centered',
    desc: 'We listen before we act. Your goals, constraints, and timeline shape every decision we make on your project.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-stem text-sm font-medium tracking-widest uppercase mb-3">Why KeeZone</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-16 leading-tight">
          The Standard We Hold<br />Ourselves To
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map(({ title, desc }, i) => (
            <div key={title} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pale-sprout flex items-center justify-center">
                <span className="font-display text-canopy font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="font-display text-ink text-2xl font-semibold mb-2">{title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}