const services = [
  {
    icon: '⚡',
    title: 'Electrical Installations',
    desc: 'Residential, commercial, and industrial wiring installed to NEC and local code standards — from DB boards to full fit-outs.',
  },
  {
    icon: '🔌',
    title: 'Fault Finding & Repairs',
    desc: 'Rapid diagnosis and repair of electrical faults, circuit failures, and power disruptions with minimal downtime.',
  },
  {
    icon: '💡',
    title: 'Lighting & Energy Solutions',
    desc: 'LED retrofits, automated lighting controls, and energy-efficiency audits that cut costs without cutting corners.',
  },
  {
    icon: '🛡️',
    title: 'Safety Compliance & Inspections',
    desc: 'Comprehensive electrical safety inspections and compliance certifications for residential and commercial properties.',
  },
  {
    icon: '🏗️',
    title: 'Project Management',
    desc: 'End-to-end coordination of electrical projects — scoping, procurement, installation, testing, and sign-off.',
  },
  {
    icon: '📋',
    title: 'Technical Consulting',
    desc: 'Engineering-backed advice on system design, load calculations, and infrastructure planning for new builds and upgrades.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-forest-night py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-stem text-sm font-medium tracking-widest uppercase mb-3">What We Do</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-pale-sprout mb-16 leading-tight">
          Services Built<br />for the Real World
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-canopy/20 border border-stem/30 rounded-2xl p-7 hover:bg-canopy/30 transition-colors duration-200 group"
            >
              <span className="text-3xl mb-5 block">{icon}</span>
              <h3 className="font-display text-pale-sprout text-xl font-semibold mb-3 group-hover:text-cream transition-colors">
                {title}
              </h3>
              <p className="font-body text-stone text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}