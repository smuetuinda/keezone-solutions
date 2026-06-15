export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="block font-body text-stem text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-6 leading-tight">
          Let's Talk About<br />Your Next Project
        </h2>
        <p className="font-body text-stone text-base max-w-md mx-auto mb-14 leading-relaxed">
          Whether you need a full installation, a safety inspection, or just an expert opinion — KeeZone is ready.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {[
            { label: 'Email', value: 'keezone.na@gmail.com', href: 'mailto:keezone.na@gmail.com' },
            { label: 'Phone', value: '+264 81 696 4290', href: 'tel:+264816964290' },
            { label: 'Location', value: 'Windhoek, Namibia', href: null },
          ].map(({ label, value, href }) => (
            <div key={label} className="bg-pale-sprout rounded-2xl p-6">
              <span className="block font-body text-stone text-xs tracking-widest uppercase mb-2">{label}</span>
              {href ? (
                <a href={href} className="font-body text-canopy font-medium text-sm hover:text-stem transition-colors">
                  {value}
                </a>
              ) : (
                <span className="font-body text-ink font-medium text-sm">{value}</span>
              )}
            </div>
          ))}
        </div>

        <a
          href="mailto:keezone.na@gmail.com"
          className="inline-block bg-canopy hover:bg-stem text-cream font-body font-medium px-10 py-4 rounded-full transition-colors duration-200 text-sm tracking-wide"
        >
          Send Us a Message
        </a>
      </div>

      {/* Footer strip */}
      <div className="mt-20 pt-6 border-t border-parchment flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto">
        <span className="font-display text-ink text-base font-semibold">KeeZone Solutions</span>
        <span className="font-body text-stone text-xs">© {new Date().getFullYear()} KeeZone Solutions. All rights reserved.</span>
      </div>
    </section>
  )
}