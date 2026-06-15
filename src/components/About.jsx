const pillars = [
  {
    label: 'Mission',
    text: 'To deliver reliable, safety-first electrical and technical solutions that empower communities and businesses across Namibia.',
  },
  {
    label: 'Vision',
    text: 'A future where every structure — residential, commercial, or industrial — runs on systems that are safe, efficient, and built to last.',
  },
  {
    label: 'Values',
    text: 'Integrity in every installation. Precision in every plan. Respect for every client, community, and code.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-stem text-sm font-medium tracking-widest uppercase mb-3">Who We Are</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-6 leading-tight">
          Built on Purpose.<br />Wired for Excellence.
        </h2>
        <p className="font-body text-stone text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
          KeeZone Solutions is a Namibia-based electrical and technical services company. We combine qualified engineering expertise with practical field experience to serve clients who refuse to compromise on quality or safety.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map(({ label, text }) => (
            <div key={label} className="bg-pale-sprout rounded-2xl p-8">
              <span className="inline-block font-display text-canopy text-sm font-bold tracking-widest uppercase mb-4">
                {label}
              </span>
              <p className="font-body text-ink text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}