// Shared Lucide icon helper for the Strategic Advisers website UI kit.
// Uses the canonical data-lucide + createIcons API.
function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 1.75, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (host && window.lucide) {
      host.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      host.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth } });
    }
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

Object.assign(window, { Icon });
