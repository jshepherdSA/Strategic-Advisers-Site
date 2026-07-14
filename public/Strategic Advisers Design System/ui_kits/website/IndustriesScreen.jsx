// Strategic Advisers — Industries screen
function IndustriesScreen({ onNavigate }) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const { Eyebrow, IndustryCard, SectionHeader, TestimonialCard, Stat, CTASection } = NS;
  return (
    <div>
      <section style={{ background: 'linear-gradient(180deg, var(--navy-50), #fff)', padding: 'clamp(3rem,6vw,5.5rem) 0 clamp(2rem,4vw,3.5rem)' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '0 var(--gutter)', textAlign: 'center' }}>
          <div style={{ marginBottom: '22px', display: 'flex', justifyContent: 'center' }}><Eyebrow>Industries</Eyebrow></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.5rem,4.5vw,4rem)', lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--navy-900)', margin: 0, textWrap: 'balance' }}>Where reputation meets regulation</h1>
          <p style={{ margin: '22px auto 0', fontSize: '19px', lineHeight: 1.6, color: 'var(--gray-600)', maxWidth: '560px' }}>We know the stakeholders, the media and the rules in the sectors we serve — so we move faster and land harder.</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-y-tight) 0 var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="sa-grid-3">
            {window.SA_INDUSTRIES.map((i) => <IndustryCard key={i.label} label={i.label} count={i.count} image={i.image} href="#" onClick={(e) => e.preventDefault()} />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--navy-700), var(--navy-900))' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'center' }} className="sa-hero-grid">
          <div>
            <div style={{ marginBottom: '20px' }}><Eyebrow color="on-navy">Proof, not promises</Eyebrow></div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>Outcomes our clients can take to the board.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '32px 40px' }}>
            <Stat tone="on-navy" value="3.4M" label="Earned impressions" sublabel="Single energy announcement" />
            <Stat tone="on-navy" value="12 pt" label="Favorability lift" sublabel="Statewide advocacy campaign" />
            <Stat tone="on-navy" value="48 hrs" label="From crisis to control" sublabel="Healthcare rapid response" />
            <Stat tone="on-navy" value="6:1" label="Return on paid spend" sublabel="Technology launch program" />
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-y) 0' }}>
        <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <TestimonialCard quote="No firm understands the healthcare regulatory landscape like this team. They see around corners." name="Marcus Reyes" role="Chief Communications Officer" org="Halcyon Health" />
        </div>
      </section>

      <section style={{ padding: '0 0 var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <CTASection title="Your sector is our specialty." intro="Let's talk about the reputation and regulatory challenges ahead." primaryLabel="Start a conversation" markSrc="../../assets/logos/sa-mark-color.png" />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { IndustriesScreen });
