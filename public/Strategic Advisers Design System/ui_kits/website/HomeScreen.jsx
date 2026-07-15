// Strategic Advisers — Home screen
function HomeScreen({ onNavigate }) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const { Button, Eyebrow, ServiceCard, IndustryCard, TestimonialCard, SectionHeader, CTASection, Stat, Badge } = NS;
  const Icon = window.Icon;

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-50)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6.5rem) var(--gutter) clamp(3rem,5vw,5rem)', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '56px', alignItems: 'center' }} className="sa-hero-grid">
          <div>
            <div style={{ marginBottom: '24px' }}><Eyebrow>PR · Digital Media · Public Affairs</Eyebrow></div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.75rem, 5.2vw, 4.75rem)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--navy-900)', margin: 0, textWrap: 'balance' }}>
              We move the <span style={{ color: 'var(--red-700)' }}>conversation.</span>
            </h1>
            <p style={{ margin: '26px 0 0', fontSize: '20px', lineHeight: 1.55, color: 'var(--gray-600)', maxWidth: '520px' }}>
              Strategic Advisers is an integrated communications firm that helps organizations lead public debate with clarity, conviction and data-driven strategy.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
              <Button variant="primary" size="lg" onClick={() => onNavigate('contact')} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Start a conversation</Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('services')}>Explore services</Button>
            </div>
            <div style={{ display: 'flex', gap: '40px', marginTop: '48px' }}>
              <Stat value="25+" label="Years of counsel" />
              <Stat value="150+" label="Clients served" />
              <Stat value="98%" label="Earned reach" />
            </div>
          </div>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: '1.4fr 1fr 0.9fr', gap: '10px', aspectRatio: '1/1' }}>
            <div style={{ gridColumn: '1', gridRow: '1 / 3', overflow: 'hidden', position: 'relative' }}>
              <img src={window.SA_HERO_IMG} alt="Strategic Advisers team at work" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.9)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,18,37,0.22)' }} />
            </div>
            <div style={{ gridColumn: '2', gridRow: '1', background: 'var(--red-700)' }} />
            <div style={{ gridColumn: '2', gridRow: '2', background: 'var(--navy-700)', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
              <Icon name="compass" size={30} color="#fff" />
            </div>
            <div style={{ gridColumn: '1', gridRow: '3', background: '#fff', display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 22px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '34px', lineHeight: 1, color: 'var(--red-700)', letterSpacing: '-0.02em' }}>3.4M</span>
              <span style={{ fontSize: '13px', lineHeight: 1.35, color: 'var(--navy-800)' }}>earned impressions on a single announcement.</span>
            </div>
            <div style={{ gridColumn: '2', gridRow: '3', background: 'var(--navy-900)' }} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '28px var(--gutter)', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Trusted by leaders across</span>
          {['Meridian Energy', 'Halcyon Health', 'Statecraft', 'Northwind Capital', 'Vantage Tech'].map((n) => (
            <span key={n} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px', color: 'var(--navy-300)' }}>{n}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'var(--section-y) 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <SectionHeader eyebrow="What we do" title="Communications, integrated end to end" intro="Six disciplines, one strategy. We bring the right mix to every mandate." action={<Button variant="outline" onClick={() => onNavigate('services')}>All services</Button>} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }} className="sa-grid-3">
            {window.SA_SERVICES.map((s) => (
              <ServiceCard key={s.title} icon={<Icon name={s.icon} size={26} />} title={s.title} description={s.desc} tags={s.tags} href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: 'var(--navy-800)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y-tight) var(--gutter)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }} className="sa-grid-4">
            {window.SA_STATS.map((s) => <Stat key={s.label} value={s.value} label={s.label} sublabel={s.sublabel} tone="on-navy" />)}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: 'var(--section-y) 0', background: 'var(--surface-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <SectionHeader eyebrow="Who we serve" title="Sector expertise that runs deep" intro="Two decades of counsel across the industries where reputation and regulation collide." action={<Button variant="outline" onClick={() => onNavigate('industries')}>All industries</Button>} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }} className="sa-grid-3">
            {window.SA_INDUSTRIES.slice(0, 6).map((i) => (
              <IndustryCard key={i.label} label={i.label} count={i.count} image={i.image} href="#" onClick={(e) => { e.preventDefault(); onNavigate('industries'); }} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: 'var(--section-y) 0' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <TestimonialCard tone="navy" quote="They turned a difficult regulatory announcement into a moment of public trust. Strategic Advisers is the team we call before anyone else." name="Dana Whitfield" role="VP Communications" org="Meridian Energy" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <CTASection title="Ready to move the conversation?" intro="Tell us what you're up against. We'll bring the strategy, the story and the team to win it." primaryLabel="Start a conversation" secondaryLabel="See our work" markSrc="../../assets/logos/sa-mark-color.png"
            primaryHref="#" secondaryHref="#" />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
