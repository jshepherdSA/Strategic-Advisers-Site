// Strategic Advisers — top navigation bar
function NavBar({ current, onNavigate }) {
  const { Button } = window.StrategicAdvisersDesignSystem_281076;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const routeFor = { Services: 'services', Industries: 'industries', About: 'contact', 'Our Work': 'home', Insights: 'home' };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.86)', backdropFilter: 'saturate(180%) blur(14px)', WebkitBackdropFilter: 'saturate(180%) blur(14px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--gutter)', height: '76px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logos/sa-logo-full-color.png" alt="Strategic Advisers" style={{ height: '38px', width: 'auto' }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="sa-nav-links">
          {window.SA_NAV.map((item) => {
            const route = routeFor[item];
            const active = route === current && (item === 'Services' || item === 'Industries' || item === 'About');
            return (
              <a key={item} href="#" onClick={(e) => { e.preventDefault(); onNavigate(route); }}
                style={{ padding: '9px 14px', fontSize: '15px', fontWeight: 500, color: active ? 'var(--red-700)' : 'var(--navy-800)', borderRadius: 'var(--radius-sm)', transition: 'color var(--dur-fast) var(--ease-standard)' }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--red-700)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--navy-800)'; }}>
                {item}
              </a>
            );
          })}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Button variant="primary" size="sm" onClick={() => onNavigate('contact')}>Start a conversation</Button>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { NavBar });
