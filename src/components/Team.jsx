const team = [
  {
    name: 'Stanislaus Muetuinda',
    role: 'Founder & Lead Engineer',
    bio: 'Electrical Engineering graduate with a passion for precision, safety, and building systems that last. The driving force behind KeeZone\'s technical standards and client philosophy.',
    initials: 'SM',
  },
  {
    name: 'Technical Partners',
    role: 'TVET-Qualified Electricians',
    bio: 'Our network of TVET-certified field electricians brings hands-on expertise across residential, commercial, and industrial environments — vetted, trained, and safety-cleared.',
    initials: 'TP',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-forest-night py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="block font-body text-stem text-sm font-medium tracking-widest uppercase mb-3">The People</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-pale-sprout mb-16 leading-tight">
          Expertise You<br />Can Trust
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {team.map(({ name, role, bio, initials }) => (
            <div key={name} className="flex flex-col gap-5">
              <div className="w-16 h-16 rounded-2xl bg-canopy flex items-center justify-center">
                <span className="font-display text-pale-sprout font-bold text-xl">{initials}</span>
              </div>
              <div>
                <h3 className="font-display text-pale-sprout text-2xl font-semibold">{name}</h3>
                <span className="font-body text-stem text-sm font-medium tracking-wide">{role}</span>
              </div>
              <p className="font-body text-stone text-sm leading-relaxed border-l-2 border-stem pl-5">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}