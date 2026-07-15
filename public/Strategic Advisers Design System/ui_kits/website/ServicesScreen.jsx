// Strategic Advisers — Services screen
function ServicesScreen({ onNavigate }) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const { Button, Eyebrow, Badge, SectionHeader, CTASection } = NS;
  const Icon = window.Icon;
  const process = [
    { n: '01', t: 'Listen & diagnose', d: 'We start with research — audiences, stakeholders, the landscape and the risk.' },
    { n: '02', t: 'Set the strategy', d: 'A clear plan with measurable goals, the right channels and a message that lands.' },
    { n: '03', t: 'Execute & adapt', d: 'Integrated delivery across earned, owned and paid — adjusted in real time.' },
    { n: '04', t: 'Measure & prove', d: 'Reporting that ties activity to outcomes, so every dollar is accountable.' },
  ];
  return (
    <div>
      <section style={{ background: 'var(--navy-50)', padding: 'clamp(3rem,6vw,5.5rem) 0 clamp(2rem,4vw,3.5rem)' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>
          <div style={{ marginBottom: '22px', display: 'flex', justifyContent: 'center' }}><Eyebrow>Our services</Eyebrow></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.5rem,4.5vw,4rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--navy-900)', margin: 0, textWrap: 'balance' }}>Six disciplines. One strategy.</h1>
          <p style={{ margin: '22px auto 0', fontSize: '19px', lineHeight: 1.6, color: 'var(--gray-600)', maxWidth: '560px' }}>We assemble the right mix of capabilities around your goal — and hold ourselves to the results.</p>
        </div>
      </section>

      {/* Alternating service rows */}
      <section style={{ padding: 'var(--section-y-tight) 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {window.SA_SERVICES.map((s, i) => (
            <div key={s.title} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '28px', alignItems: 'center', background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px 32px', boxShadow: 'var(--shadow-sm)' }} className="sa-service-row">
              <span style={{ width: '64px', height: '64px', background: 'var(--navy-900)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={30} color="#fff" /></span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '7px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '23px', color: 'var(--navy-900)', margin: 0 }}>{s.title}</h3>
                  {s.tags.map((t) => <Badge key={t} variant="neutral" size="sm">{t}</Badge>)}
                </div>
                <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '620px' }}>{s.desc}</p>
              </div>
              <Button variant="ghost" iconRight={<Icon name="arrow-right" size={17} />} onClick={() => onNavigate('contact')}>Discuss</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--surface-subtle)', padding: 'var(--section-y) 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <SectionHeader align="center" eyebrow="How we work" title="A method built to prove its worth" maxWidth="620px" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', marginTop: '48px' }} className="sa-grid-4">
            {process.map((p) => (
              <div key={p.n} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px 26px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '30px', fontWeight: 600, color: 'var(--red-600)', letterSpacing: '-0.02em' }}>{p.n}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px', color: 'var(--navy-900)', margin: '14px 0 8px' }}>{p.t}</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-y) 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <CTASection eyebrow="Let's talk" title="Not sure which mix you need?" intro="Bring us the challenge. We'll shape the right team around it." primaryLabel="Book an intro call" secondaryLabel="See our work" markSrc="../../assets/logos/sa-mark-color.png" />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesScreen });
