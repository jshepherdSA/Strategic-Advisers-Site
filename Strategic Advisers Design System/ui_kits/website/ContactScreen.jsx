// Strategic Advisers — Contact screen (interactive form)
function ContactScreen({ onNavigate }) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const { Button, Eyebrow, Field, Input, Badge } = NS;
  const Icon = window.Icon;
  const [form, setForm] = React.useState({ name: '', email: '', org: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState({});
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name';
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) next.email = 'Enter a valid work email';
    if (!form.message.trim()) next.message = 'A short note helps us route you';
    setErr(next);
    if (Object.keys(next).length === 0) setSent(true);
  };
  const contacts = [
    { icon: 'mail', h: 'Email', v: 'hello@strategicadvisers.com' },
    { icon: 'phone', h: 'Phone', v: '+1 (202) 555-0142' },
    { icon: 'map-pin', h: 'Office', v: '1100 Vermont Ave NW, Washington, DC' },
  ];
  return (
    <section style={{ background: 'var(--surface-subtle)', minHeight: '78vh' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(3rem,6vw,5.5rem) var(--gutter)', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '56px', alignItems: 'start' }} className="sa-hero-grid">
        <div>
          <div style={{ marginBottom: '22px' }}><Eyebrow>Start a conversation</Eyebrow></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.25rem,4vw,3.25rem)', lineHeight: 1.06, letterSpacing: '-0.025em', color: 'var(--navy-900)', margin: 0, textWrap: 'balance' }}>Let's talk about what's next.</h1>
          <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: 1.6, color: 'var(--gray-600)', maxWidth: '420px' }}>Tell us about your goal or the challenge in front of you. We'll come back within one business day.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
            {contacts.map((c) => (
              <div key={c.h} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-md)', background: '#fff', border: '1px solid var(--border-subtle)', color: 'var(--navy-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name={c.icon} size={20} color="var(--navy-700)" /></span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{c.h}</div>
                  <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--navy-900)', marginTop: '2px' }}>{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 'clamp(1.75rem,3vw,2.75rem)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 8px' }}>
              <span style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--green-100)', color: 'var(--color-success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Icon name="check" size={32} color="var(--color-success)" /></span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '24px', color: 'var(--navy-900)', margin: '0 0 10px' }}>Thanks, {form.name.split(' ')[0] || 'there'}.</h3>
              <p style={{ margin: '0 auto 24px', fontSize: '16px', color: 'var(--text-muted)', maxWidth: '360px' }}>Your message is on its way to our team. We'll be in touch within one business day.</p>
              <Button variant="outline" onClick={() => { setSent(false); setForm({ name: '', email: '', org: '', message: '' }); onNavigate('home'); }}>Back to home</Button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <Field label="Full name" htmlFor="c-name" required error={err.name}><Input id="c-name" placeholder="Jane Doe" value={form.name} onChange={set('name')} invalid={!!err.name} /></Field>
              <Field label="Work email" htmlFor="c-email" required error={err.email}><Input id="c-email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} invalid={!!err.email} /></Field>
              <div style={{ gridColumn: '1 / -1' }}><Field label="Organization" htmlFor="c-org"><Input id="c-org" placeholder="Company or agency" value={form.org} onChange={set('org')} /></Field></div>
              <div style={{ gridColumn: '1 / -1' }}><Field label="How can we help?" htmlFor="c-msg" required error={err.message}><Input id="c-msg" as="textarea" placeholder="Share your goal, timeline, or the challenge you're facing…" value={form.message} onChange={set('message')} invalid={!!err.message} /></Field></div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '7px' }}><Icon name="lock" size={14} color="var(--text-muted)" /> Confidential — never shared.</span>
                <Button type="submit" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Send message</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactScreen });
