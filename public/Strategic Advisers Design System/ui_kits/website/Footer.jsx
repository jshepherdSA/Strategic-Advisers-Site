// Strategic Advisers — site footer
function Footer({ onNavigate }) {
  const cols = [
    { h: 'Services', links: ['Public Relations', 'Digital Media', 'Public Affairs', 'Crisis Communications', 'Research & Insights'] },
    { h: 'Company', links: ['About Us', 'Our Team', 'Careers', 'Newsroom', 'Contact'] },
    { h: 'Industries', links: ['Energy & Utilities', 'Healthcare', 'Government', 'Technology', 'Nonprofit'] },
  ];
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'var(--navy-100)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: 'var(--space-11) var(--gutter) var(--space-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '48px', paddingBottom: 'var(--space-9)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ maxWidth: '320px' }}>
            <img src="../../assets/logos/sa-logo-full-white.png" alt="Strategic Advisers" style={{ height: '42px', width: 'auto', marginBottom: '20px' }} />
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: 'var(--navy-200)' }}>
              An integrated communications firm shaping public conversation across PR, digital media and public affairs.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((s) => (
                <a key={s} href="#" onClick={(e) => e.preventDefault()} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-100)', transition: 'all var(--dur-fast) var(--ease-standard)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--red-700)'; e.currentTarget.style.borderColor = 'var(--red-700)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}>
                  <window.Icon name={s} size={17} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red-400)', marginBottom: '18px' }}>{c.h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {c.links.map((l) => (
                  <li key={l}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '14px', color: 'var(--navy-200)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--navy-200)'}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-6)', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: 'var(--navy-300)' }}>© 2026 Strategic Advisers. PR · Digital Media · Public Affairs.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '13px', color: 'var(--navy-300)' }}>Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '13px', color: 'var(--navy-300)' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
