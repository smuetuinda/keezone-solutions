export default function Cover() {
  return (
    <section
      id="cover"
      className="min-h-screen bg-forest-night flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(64,145,108,0.18) 0%, transparent 70%)' }}
      />

      {/* Nav strip */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-5">
        <span className="font-display text-pale-sprout text-xl font-semibold tracking-wide">KeeZone</span>
        <a
          href="#contact"
          className="text-sm font-body font-medium text-pale-sprout border border-stem px-4 py-2 rounded-full hover:bg-stem hover:text-cream transition-colors duration-200"
        >
          Get in Touch
        </a>
      </nav>

      {/* Logo */}
      <img
        src="/logo.jpg"
        alt="KeeZone Solutions Logo"
        className="w-32 h-32 rounded-2xl object-contain mb-8 shadow-lg"
        style={{ border: '1.5px solid rgba(216,243,220,0.18)' }}
      />

      {/* Company name */}
      <h1 className="font-display text-5xl md:text-7xl font-bold text-pale-sprout leading-tight mb-4 tracking-tight">
        KeeZone Solutions
      </h1>

      {/* Tagline */}
      <p className="font-body text-lg md:text-xl text-stem font-light max-w-lg leading-relaxed mb-10">
        Powering spaces. Protecting lives. Delivering precision.
      </p>

      <a
        href="#about"
        className="bg-canopy hover:bg-stem text-cream font-body font-medium px-8 py-3 rounded-full transition-colors duration-200 text-sm tracking-wide"
      >
        Discover More
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-10 bg-pale-sprout animate-pulse" />
        <span className="text-pale-sprout text-xs font-body tracking-widest uppercase">scroll</span>
      </div>
    </section>
  )
}