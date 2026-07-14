/* @ds-bundle: {"format":4,"namespace":"StrategicAdvisersDesignSystem_281076","components":[{"name":"IndustryCard","sourcePath":"components/cards/IndustryCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CTASection","sourcePath":"components/sections/CTASection.jsx"},{"name":"SectionHeader","sourcePath":"components/sections/SectionHeader.jsx"}],"sourceHashes":{"components/cards/IndustryCard.jsx":"a2cf7cd37003","components/cards/ServiceCard.jsx":"ba411be769bb","components/cards/TestimonialCard.jsx":"426053f85ef2","components/core/Badge.jsx":"009a1f3bfd1e","components/core/Button.jsx":"d26717a4fd0c","components/core/Eyebrow.jsx":"2e1aece3b14b","components/core/Stat.jsx":"e16392abb791","components/forms/Field.jsx":"c715fe655c69","components/forms/Input.jsx":"2ee45f4e29e5","components/sections/CTASection.jsx":"332823c3b918","components/sections/SectionHeader.jsx":"a5ea5995dca5","ui_kits/website/App.jsx":"d3535c109cf0","ui_kits/website/ContactScreen.jsx":"3cd2d4548f45","ui_kits/website/Footer.jsx":"a2da7e448983","ui_kits/website/HomeScreen.jsx":"40cc4f973a30","ui_kits/website/IndustriesScreen.jsx":"cf00276a8494","ui_kits/website/NavBar.jsx":"750bd64aaafa","ui_kits/website/ServicesScreen.jsx":"f482ede76924","ui_kits/website/data.jsx":"33ab2bb78b7f","ui_kits/website/icons.jsx":"f8dd2d645656"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StrategicAdvisersDesignSystem_281076 = window.StrategicAdvisersDesignSystem_281076 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/IndustryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — IndustryCard
 * Image-forward card for an industry / sector the agency serves. A full-bleed
 * image (or navy fallback) with a gradient scrim and label pinned to the base.
 */
function IndustryCard({
  label,
  count,
  image,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      aspectRatio: '3 / 4',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      background: 'var(--navy-700)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      filter: 'saturate(0.85)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(16,26,53,0.10) 0%, rgba(16,26,53,0.30) 45%, rgba(16,26,53,0.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '4px',
      width: hover ? '100%' : '0%',
      background: 'var(--red-600)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '24px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, count && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.06em',
      color: 'var(--red-300)',
      marginBottom: '6px'
    }
  }, count), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '21px',
      color: '#fff',
      letterSpacing: '-0.01em',
      lineHeight: 1.15
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.4)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      background: hover ? 'var(--red-700)' : 'transparent',
      borderColor: hover ? 'var(--red-700)' : 'rgba(255,255,255,0.4)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { IndustryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/IndustryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — ServiceCard
 * A single service offering: icon, title, description, and an optional link row.
 * Squared premium card with a subtle lift and a red accent that reveals on hover.
 */
function ServiceCard({
  icon,
  title,
  description,
  tags,
  href,
  linkLabel = 'Learn more',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '32px 30px',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      borderColor: hover ? 'var(--navy-200)' : 'var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '3px',
      width: hover ? '100%' : '0%',
      background: 'var(--red-700)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '52px',
      height: '52px',
      borderRadius: 'var(--radius-md)',
      background: hover ? 'var(--red-700)' : 'var(--navy-50)',
      color: hover ? '#fff' : 'var(--navy-700)',
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 600,
      color: 'var(--navy-900)',
      margin: '0 0 8px',
      letterSpacing: '-0.01em'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, description)), tags && tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '7px',
      marginTop: 'auto'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.03em',
      color: 'var(--gray-600)',
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, t))), href && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: tags ? '4px' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '14px',
      color: 'var(--red-700)'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? 'translateX(4px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — TestimonialCard
 * A client quote with attribution. Large mono quote mark, measured serif-free
 * quote, and a navy attribution row. Two tones: light card or navy panel.
 */
function TestimonialCard({
  quote,
  name,
  role,
  org,
  tone = 'light',
  style,
  ...rest
}) {
  const onNavy = tone === 'navy';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      background: onNavy ? 'var(--navy-700)' : 'var(--surface-card)',
      border: onNavy ? '1px solid var(--navy-600)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 34px',
      boxShadow: onNavy ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '56px',
      lineHeight: 0.6,
      height: '30px',
      color: onNavy ? 'var(--red-400)' : 'var(--red-600)'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: 1.45,
      letterSpacing: '-0.01em',
      color: onNavy ? '#fff' : 'var(--navy-900)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginTop: 'auto',
      paddingTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '36px',
      height: '2px',
      background: onNavy ? 'var(--red-400)' : 'var(--red-700)'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      fontSize: '15px',
      color: onNavy ? '#fff' : 'var(--navy-900)'
    }
  }, name), (role || org) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      color: onNavy ? 'var(--navy-200)' : 'var(--text-muted)',
      marginTop: '2px'
    }
  }, role, role && org ? ', ' : '', org))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — Badge
 * Small status/label pill. Use for tags, categories, statuses.
 */
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--gray-100)',
      color: 'var(--gray-700)',
      border: '1px solid var(--gray-200)'
    },
    navy: {
      background: 'var(--navy-50)',
      color: 'var(--navy-700)',
      border: '1px solid var(--navy-100)'
    },
    accent: {
      background: 'var(--red-50)',
      color: 'var(--red-700)',
      border: '1px solid var(--red-100)'
    },
    solid: {
      background: 'var(--navy-700)',
      color: '#fff',
      border: '1px solid var(--navy-700)'
    },
    'solid-accent': {
      background: 'var(--red-700)',
      color: '#fff',
      border: '1px solid var(--red-700)'
    },
    success: {
      background: 'var(--green-100)',
      color: 'var(--color-success)',
      border: '1px solid var(--green-100)'
    },
    'on-navy': {
      background: 'rgba(255,255,255,0.12)',
      color: 'var(--navy-100)',
      border: '1px solid rgba(255,255,255,0.18)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: '11px'
    },
    md: {
      padding: '5px 12px',
      fontSize: '12px'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.2,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — Button
 * Confident, squared-but-soft CTA. Primary = red (action), secondary = navy,
 * outline/ghost for lower emphasis, link for inline.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: '14px',
      gap: '7px'
    },
    md: {
      padding: '13px 24px',
      fontSize: '15px',
      gap: '9px'
    },
    lg: {
      padding: '17px 34px',
      fontSize: '17px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--red-700)',
      color: '#fff',
      border: '1px solid var(--red-700)',
      boxShadow: 'var(--shadow-accent)'
    },
    secondary: {
      background: 'var(--navy-700)',
      color: '#fff',
      border: '1px solid var(--navy-700)',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--navy-700)',
      border: '1px solid var(--navy-300)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--navy-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    'on-navy': {
      background: '#fff',
      color: 'var(--navy-800)',
      border: '1px solid #fff',
      boxShadow: 'var(--shadow-md)'
    },
    link: {
      background: 'transparent',
      color: 'var(--red-700)',
      border: '1px solid transparent',
      boxShadow: 'none',
      padding: '0',
      textDecoration: 'none'
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: variant === 'link' ? 0 : sizes[size].padding,
    borderRadius: variant === 'link' ? 0 : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  const hoverMap = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--red-800)' : 'var(--red-700)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--navy-800)' : 'var(--navy-700)';
    },
    outline: (e, on) => {
      e.currentTarget.style.borderColor = on ? 'var(--navy-700)' : 'var(--navy-300)';
      e.currentTarget.style.background = on ? 'var(--navy-50)' : 'transparent';
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--navy-50)' : 'transparent';
    },
    'on-navy': (e, on) => {
      e.currentTarget.style.background = on ? 'var(--navy-50)' : '#fff';
    },
    link: (e, on) => {
      e.currentTarget.style.color = on ? 'var(--red-800)' : 'var(--red-700)';
    }
  };
  const handlers = disabled ? {} : {
    onMouseEnter: e => {
      hoverMap[variant]?.(e, true);
      if (variant !== 'link' && variant !== 'outline' && variant !== 'ghost') e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      hoverMap[variant]?.(e, false);
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — Eyebrow
 * Wide-tracked mono kicker that sits above headlines. The brand's signature
 * section label, optionally led by a short red rule.
 */
function Eyebrow({
  children,
  rule = true,
  color = 'accent',
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--red-700)',
    navy: 'var(--navy-600)',
    muted: 'var(--gray-500)',
    'on-navy': 'var(--red-400)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 500,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: colors[color],
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '2px',
      background: 'currentColor',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — Stat
 * Big mono figure with label. The data-driven proof point used in stat bands.
 */
function Stat({
  value,
  label,
  sublabel,
  align = 'left',
  tone = 'default',
  style,
  ...rest
}) {
  const onNavy = tone === 'on-navy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: onNavy ? '#fff' : 'var(--navy-900)'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '15px',
      color: onNavy ? 'var(--navy-100)' : 'var(--navy-700)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontSize: '13px',
      lineHeight: 1.5,
      color: onNavy ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — Field
 * Label + helper/error wrapper for form controls.
 */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const onNavy = tone === 'on-navy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 600,
      color: onNavy ? '#fff' : 'var(--navy-900)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-600)',
      marginLeft: '4px'
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: onNavy ? 'var(--red-300)' : 'var(--red-700)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: onNavy ? 'var(--navy-200)' : 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — Input
 * Text input / textarea with a clean navy focus ring. Pair with Field for labels.
 */
function Input({
  as = 'input',
  tone = 'light',
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const onNavy = tone === 'on-navy';
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  const borderColor = invalid ? 'var(--red-500)' : focus ? onNavy ? 'var(--red-400)' : 'var(--navy-600)' : onNavy ? 'rgba(255,255,255,0.22)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: 1.5,
      color: onNavy ? '#fff' : 'var(--navy-900)',
      background: onNavy ? 'rgba(255,255,255,0.06)' : 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: as === 'textarea' ? '13px 15px' : '12px 15px',
      minHeight: as === 'textarea' ? '128px' : undefined,
      resize: as === 'textarea' ? 'vertical' : undefined,
      outline: 'none',
      boxShadow: focus ? invalid ? '0 0 0 3px rgba(205,74,74,0.18)' : onNavy ? '0 0 0 3px rgba(221,111,111,0.22)' : '0 0 0 3px rgba(42,64,116,0.14)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/sections/CTASection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — CTASection
 * The strong closing call-to-action band. Deep navy with the brand mark motif,
 * a large headline and one or two buttons. The signature end-of-page moment.
 */
function CTASection({
  eyebrow = 'Get started',
  title,
  intro,
  primaryLabel = 'Start a conversation',
  primaryHref = '#',
  secondaryLabel,
  secondaryHref,
  markSrc,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(3rem, 6vw, 5.5rem)',
      ...style
    }
  }, rest), markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '-60px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '380px',
      height: '380px',
      objectFit: 'contain',
      opacity: 0.10,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '660px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: "on-navy"
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--navy-100)',
      maxWidth: '540px'
    }
  }, intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px',
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    href: primaryHref
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "on-navy",
    size: "lg",
    href: secondaryHref || '#'
  }, secondaryLabel))));
}
Object.assign(__ds_scope, { CTASection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CTASection.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Strategic Advisers — SectionHeader
 * Eyebrow + large headline + optional intro. The consistent opener for every
 * page section. Left or center aligned; light or on-navy tone.
 */
function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  maxWidth = '640px',
  action,
  style,
  ...rest
}) {
  const onNavy = tone === 'on-navy';
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: action && !centered ? 'row' : 'column',
      alignItems: action && !centered ? 'flex-end' : centered ? 'center' : 'flex-start',
      justifyContent: 'space-between',
      gap: '24px',
      textAlign: centered ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: centered ? maxWidth : undefined,
      marginInline: centered ? 'auto' : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '18px',
      display: 'flex',
      justifyContent: centered ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: onNavy ? 'on-navy' : 'accent'
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: onNavy ? '#fff' : 'var(--navy-900)',
      margin: 0,
      maxWidth: !centered ? maxWidth : undefined,
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: '18px',
      lineHeight: 1.6,
      color: onNavy ? 'var(--navy-100)' : 'var(--text-muted)',
      maxWidth: maxWidth,
      marginInline: centered ? 'auto' : undefined
    }
  }, intro)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Strategic Advisers website — app shell / router
function App() {
  const [route, setRoute] = React.useState('home');
  const navigate = r => {
    setRoute(r || 'home');
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };
  const screens = {
    home: window.HomeScreen,
    services: window.ServicesScreen,
    industries: window.IndustriesScreen,
    contact: window.ContactScreen
  };
  const Screen = screens[route] || window.HomeScreen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      background: '#fff',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(window.NavBar, {
    current: route,
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Screen, {
    onNavigate: navigate
  })), /*#__PURE__*/React.createElement(window.Footer, {
    onNavigate: navigate
  }));
}
Object.assign(window, {
  App
});
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Strategic Advisers — Contact screen (interactive form)
function ContactScreen({
  onNavigate
}) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const {
    Button,
    Eyebrow,
    Field,
    Input,
    Badge
  } = NS;
  const Icon = window.Icon;
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    org: '',
    message: ''
  });
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState({});
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name';
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) next.email = 'Enter a valid work email';
    if (!form.message.trim()) next.message = 'A short note helps us route you';
    setErr(next);
    if (Object.keys(next).length === 0) setSent(true);
  };
  const contacts = [{
    icon: 'mail',
    h: 'Email',
    v: 'hello@strategicadvisers.com'
  }, {
    icon: 'phone',
    h: 'Phone',
    v: '+1 (202) 555-0142'
  }, {
    icon: 'map-pin',
    h: 'Office',
    v: '1100 Vermont Ave NW, Washington, DC'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      minHeight: '78vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(3rem,6vw,5.5rem) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.95fr 1.05fr',
      gap: '56px',
      alignItems: 'start'
    },
    className: "sa-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a conversation")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2.25rem,4vw,3.25rem)',
      lineHeight: 1.06,
      letterSpacing: '-0.025em',
      color: 'var(--navy-900)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Let's talk about what's next."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--gray-600)',
      maxWidth: '420px'
    }
  }, "Tell us about your goal or the challenge in front of you. We'll come back within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginTop: '40px'
    }
  }, contacts.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '46px',
      height: '46px',
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      color: 'var(--navy-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 20,
    color: "var(--navy-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--navy-900)',
      marginTop: '2px'
    }
  }, c.v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      padding: 'clamp(1.75rem,3vw,2.75rem)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: 'var(--green-100)',
      color: 'var(--color-success)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--color-success)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '24px',
      color: 'var(--navy-900)',
      margin: '0 0 10px'
    }
  }, "Thanks, ", form.name.split(' ')[0] || 'there', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto 24px',
      fontSize: '16px',
      color: 'var(--text-muted)',
      maxWidth: '360px'
    }
  }, "Your message is on its way to our team. We'll be in touch within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setSent(false);
      setForm({
        name: '',
        email: '',
        org: '',
        message: ''
      });
      onNavigate('home');
    }
  }, "Back to home")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    htmlFor: "c-name",
    required: true,
    error: err.name
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "Jane Doe",
    value: form.name,
    onChange: set('name'),
    invalid: !!err.name
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "c-email",
    required: true,
    error: err.email
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    type: "email",
    placeholder: "you@company.com",
    value: form.email,
    onChange: set('email'),
    invalid: !!err.email
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Organization",
    htmlFor: "c-org"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-org",
    placeholder: "Company or agency",
    value: form.org,
    onChange: set('org')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "How can we help?",
    htmlFor: "c-msg",
    required: true,
    error: err.message
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-msg",
    as: "textarea",
    placeholder: "Share your goal, timeline, or the challenge you're facing\u2026",
    value: form.message,
    onChange: set('message'),
    invalid: !!err.message
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14,
    color: "var(--text-muted)"
  }), " Confidential \u2014 never shared."), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "#fff"
    })
  }, "Send message"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Strategic Advisers — site footer
function Footer({
  onNavigate
}) {
  const cols = [{
    h: 'Services',
    links: ['Public Relations', 'Digital Media', 'Public Affairs', 'Crisis Communications', 'Research & Insights']
  }, {
    h: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Newsroom', 'Contact']
  }, {
    h: 'Industries',
    links: ['Energy & Utilities', 'Healthcare', 'Government', 'Technology', 'Nonprofit']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--navy-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: '48px',
      paddingBottom: 'var(--space-9)',
      borderBottom: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/sa-logo-full-white.png",
    alt: "Strategic Advisers",
    style: {
      height: '42px',
      width: 'auto',
      marginBottom: '20px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.65,
      color: 'var(--navy-200)'
    }
  }, "An integrated communications firm shaping public conversation across PR, digital media and public affairs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '22px'
    }
  }, ['linkedin', 'twitter', 'facebook', 'instagram'].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.18)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--navy-100)',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--red-700)';
      e.currentTarget.style.borderColor = 'var(--red-700)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: s,
    size: 17
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--red-400)',
      marginBottom: '18px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '11px'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '14px',
      color: 'var(--navy-200)'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--navy-200)'
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 'var(--space-6)',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--navy-300)'
    }
  }, "\xA9 2026 Strategic Advisers. PR \xB7 Digital Media \xB7 Public Affairs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '13px',
      color: 'var(--navy-300)'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '13px',
      color: 'var(--navy-300)'
    }
  }, "Terms")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Strategic Advisers — Home screen
function HomeScreen({
  onNavigate
}) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const {
    Button,
    Eyebrow,
    ServiceCard,
    IndustryCard,
    TestimonialCard,
    SectionHeader,
    CTASection,
    Stat,
    Badge
  } = NS;
  const Icon = window.Icon;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--navy-50) 0%, #fff 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: 'clamp(3.5rem, 7vw, 6.5rem) var(--gutter) clamp(3rem,5vw,5rem)',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: '56px',
      alignItems: 'center'
    },
    className: "sa-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "PR \xB7 Digital Media \xB7 Public Affairs")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2.75rem, 5.2vw, 4.75rem)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      color: 'var(--navy-900)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "We move the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-700)'
    }
  }, "conversation.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontSize: '20px',
      lineHeight: 1.55,
      color: 'var(--gray-600)',
      maxWidth: '520px'
    }
  }, "Strategic Advisers is an integrated communications firm that helps organizations lead public debate with clarity, conviction and data-driven strategy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px',
      marginTop: '36px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('contact'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      color: "#fff"
    })
  }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNavigate('services')
  }, "Explore services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '40px',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "25+",
    label: "Years of counsel"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "150+",
    label: "Clients served"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "Earned reach"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.SA_HERO_IMG,
    alt: "Strategic Advisers team at work",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(150deg, rgba(29,45,81,0.10), rgba(29,45,81,0.55))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-22px',
      left: '-22px',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '18px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      maxWidth: '260px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '46px',
      height: '46px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--red-50)',
      color: 'var(--red-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 24,
    color: "var(--red-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      lineHeight: 1.4,
      color: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--navy-900)'
    }
  }, "3.4M"), " earned impressions on a single announcement."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '28px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Trusted by leaders across"), ['Meridian Energy', 'Halcyon Health', 'Statecraft', 'Northwind Capital', 'Vantage Tech'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '19px',
      color: 'var(--navy-300)'
    }
  }, n)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "What we do",
    title: "Communications, integrated end to end",
    intro: "Six disciplines, one strategy. We bring the right mix to every mandate.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('services')
    }, "All services")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginTop: '48px'
    },
    className: "sa-grid-3"
  }, window.SA_SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26
    }),
    title: s.title,
    description: s.desc,
    tags: s.tags,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('services');
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg, var(--navy-700), var(--navy-900))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y-tight) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '32px'
    },
    className: "sa-grid-4"
  }, window.SA_STATS.map(s => /*#__PURE__*/React.createElement(Stat, {
    key: s.label,
    value: s.value,
    label: s.label,
    sublabel: s.sublabel,
    tone: "on-navy"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Who we serve",
    title: "Sector expertise that runs deep",
    intro: "Two decades of counsel across the industries where reputation and regulation collide.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('industries')
    }, "All industries")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginTop: '48px'
    },
    className: "sa-grid-3"
  }, window.SA_INDUSTRIES.slice(0, 6).map(i => /*#__PURE__*/React.createElement(IndustryCard, {
    key: i.label,
    label: i.label,
    count: i.count,
    image: i.image,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('industries');
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "navy",
    quote: "They turned a difficult regulatory announcement into a moment of public trust. Strategic Advisers is the team we call before anyone else.",
    name: "Dana Whitfield",
    role: "VP Communications",
    org: "Meridian Energy"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(CTASection, {
    title: "Ready to move the conversation?",
    intro: "Tell us what you're up against. We'll bring the strategy, the story and the team to win it.",
    primaryLabel: "Start a conversation",
    secondaryLabel: "See our work",
    markSrc: "../../assets/logos/sa-mark-color.png",
    primaryHref: "#",
    secondaryHref: "#"
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IndustriesScreen.jsx
try { (() => {
// Strategic Advisers — Industries screen
function IndustriesScreen({
  onNavigate
}) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const {
    Eyebrow,
    IndustryCard,
    SectionHeader,
    TestimonialCard,
    Stat,
    CTASection
  } = NS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--navy-50), #fff)',
      padding: 'clamp(3rem,6vw,5.5rem) 0 clamp(2rem,4vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '22px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Industries")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2.5rem,4.5vw,4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--navy-900)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Where reputation meets regulation"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px auto 0',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--gray-600)',
      maxWidth: '560px'
    }
  }, "We know the stakeholders, the media and the rules in the sectors we serve \u2014 so we move faster and land harder."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y-tight) 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    },
    className: "sa-grid-3"
  }, window.SA_INDUSTRIES.map(i => /*#__PURE__*/React.createElement(IndustryCard, {
    key: i.label,
    label: i.label,
    count: i.count,
    image: i.image,
    href: "#",
    onClick: e => e.preventDefault()
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg, var(--navy-700), var(--navy-900))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: '56px',
      alignItems: 'center'
    },
    className: "sa-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "on-navy"
  }, "Proof, not promises")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2rem,3.5vw,3rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0
    }
  }, "Outcomes our clients can take to the board.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '32px 40px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "on-navy",
    value: "3.4M",
    label: "Earned impressions",
    sublabel: "Single energy announcement"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "on-navy",
    value: "12 pt",
    label: "Favorability lift",
    sublabel: "Statewide advocacy campaign"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "on-navy",
    value: "48 hrs",
    label: "From crisis to control",
    sublabel: "Healthcare rapid response"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "on-navy",
    value: "6:1",
    label: "Return on paid spend",
    sublabel: "Technology launch program"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "No firm understands the healthcare regulatory landscape like this team. They see around corners.",
    name: "Marcus Reyes",
    role: "Chief Communications Officer",
    org: "Halcyon Health"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(CTASection, {
    title: "Your sector is our specialty.",
    intro: "Let's talk about the reputation and regulatory challenges ahead.",
    primaryLabel: "Start a conversation",
    markSrc: "../../assets/logos/sa-mark-color.png"
  }))));
}
Object.assign(window, {
  IndustriesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IndustriesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NavBar.jsx
try { (() => {
// Strategic Advisers — top navigation bar
function NavBar({
  current,
  onNavigate
}) {
  const {
    Button
  } = window.StrategicAdvisersDesignSystem_281076;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const routeFor = {
    Services: 'services',
    Industries: 'industries',
    About: 'contact',
    'Our Work': 'home',
    Insights: 'home'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'saturate(180%) blur(14px)',
      WebkitBackdropFilter: 'saturate(180%) blur(14px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: '76px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/sa-logo-full-color.png",
    alt: "Strategic Advisers",
    style: {
      height: '38px',
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    className: "sa-nav-links"
  }, window.SA_NAV.map(item => {
    const route = routeFor[item];
    const active = route === current && (item === 'Services' || item === 'Industries' || item === 'About');
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(route);
      },
      style: {
        padding: '9px 14px',
        fontSize: '15px',
        fontWeight: 500,
        color: active ? 'var(--red-700)' : 'var(--navy-800)',
        borderRadius: 'var(--radius-sm)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--red-700)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--navy-800)';
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNavigate('contact')
  }, "Start a conversation"))));
}
Object.assign(window, {
  NavBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
// Strategic Advisers — Services screen
function ServicesScreen({
  onNavigate
}) {
  const NS = window.StrategicAdvisersDesignSystem_281076;
  const {
    Button,
    Eyebrow,
    Badge,
    SectionHeader,
    CTASection
  } = NS;
  const Icon = window.Icon;
  const process = [{
    n: '01',
    t: 'Listen & diagnose',
    d: 'We start with research — audiences, stakeholders, the landscape and the risk.'
  }, {
    n: '02',
    t: 'Set the strategy',
    d: 'A clear plan with measurable goals, the right channels and a message that lands.'
  }, {
    n: '03',
    t: 'Execute & adapt',
    d: 'Integrated delivery across earned, owned and paid — adjusted in real time.'
  }, {
    n: '04',
    t: 'Measure & prove',
    d: 'Reporting that ties activity to outcomes, so every dollar is accountable.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--navy-50), #fff)',
      padding: 'clamp(3rem,6vw,5.5rem) 0 clamp(2rem,4vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '22px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our services")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2.5rem,4.5vw,4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      color: 'var(--navy-900)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Six disciplines. One strategy."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px auto 0',
      fontSize: '19px',
      lineHeight: 1.6,
      color: 'var(--gray-600)',
      maxWidth: '560px'
    }
  }, "We assemble the right mix of capabilities around your goal \u2014 and hold ourselves to the results."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y-tight) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, window.SA_SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: '28px',
      alignItems: 'center',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 32px',
      boxShadow: 'var(--shadow-xs)'
    },
    className: "sa-service-row"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-50)',
      color: 'var(--navy-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 30,
    color: "var(--navy-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '7px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '23px',
      color: 'var(--navy-900)',
      margin: 0
    }
  }, s.title), s.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    variant: "neutral",
    size: "sm"
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: '620px'
    }
  }, s.desc)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    }),
    onClick: () => onNavigate('contact')
  }, "Discuss"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "How we work",
    title: "A method built to prove its worth",
    maxWidth: "620px"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '20px',
      marginTop: '48px'
    },
    className: "sa-grid-4"
  }, process.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '30px',
      fontWeight: 600,
      color: 'var(--red-600)',
      letterSpacing: '-0.02em'
    }
  }, p.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '19px',
      color: 'var(--navy-900)',
      margin: '14px 0 8px'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, p.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(CTASection, {
    eyebrow: "Let's talk",
    title: "Not sure which mix you need?",
    intro: "Bring us the challenge. We'll shape the right team around it.",
    primaryLabel: "Book an intro call",
    secondaryLabel: "See our work",
    markSrc: "../../assets/logos/sa-mark-color.png"
  }))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
// Content for the Strategic Advisers website UI kit.
// Imagery uses Unsplash placeholders — swap for licensed agency/campaign photography.
const SA_SERVICES = [{
  icon: 'megaphone',
  title: 'Public Relations',
  desc: 'Earned media, media training and message discipline that holds up under scrutiny.',
  tags: ['Media Relations', 'Media Training', 'Announcements']
}, {
  icon: 'monitor-play',
  title: 'Digital Media',
  desc: 'Paid, social and content programs that reach the right audiences and prove ROI.',
  tags: ['Paid Social', 'Content', 'Analytics']
}, {
  icon: 'landmark',
  title: 'Public Affairs',
  desc: 'Government relations, advocacy and coalition-building at every level of government.',
  tags: ['Advocacy', 'Coalitions', 'Grassroots']
}, {
  icon: 'shield-alert',
  title: 'Crisis Communications',
  desc: 'Rapid-response counsel and reputation management when the stakes are highest.',
  tags: ['Rapid Response', 'Reputation', 'Litigation']
}, {
  icon: 'pen-tool',
  title: 'Brand & Content',
  desc: 'Positioning, messaging and creative that make a complex story impossible to ignore.',
  tags: ['Messaging', 'Creative', 'Narrative']
}, {
  icon: 'line-chart',
  title: 'Research & Insights',
  desc: 'Polling, message testing and audience research that ground every decision in data.',
  tags: ['Polling', 'Message Testing', 'Data']
}];
const SA_INDUSTRIES = [{
  label: 'Energy & Utilities',
  count: '40+ CAMPAIGNS',
  image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80'
}, {
  label: 'Healthcare',
  count: '32 CLIENTS',
  image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80'
}, {
  label: 'Government',
  count: 'FEDERAL & STATE',
  image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=700&q=80'
}, {
  label: 'Financial Services',
  count: '25 CLIENTS',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80'
}, {
  label: 'Technology',
  count: 'STARTUP TO SCALE',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80'
}, {
  label: 'Nonprofit & Advocacy',
  count: '60+ MISSIONS',
  image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80'
}];
const SA_STATS = [{
  value: '25+',
  label: 'Years of counsel',
  sublabel: 'Trusted across four presidential cycles'
}, {
  value: '150+',
  label: 'Clients served',
  sublabel: 'From startups to Fortune 500'
}, {
  value: '98%',
  label: 'Earned media reach',
  sublabel: 'Above-target across 2024 work'
}, {
  value: '24/7',
  label: 'Rapid response',
  sublabel: 'A team on call when it matters'
}];
const SA_NAV = ['Services', 'Industries', 'Our Work', 'Insights', 'About'];
const SA_HERO_IMG = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1100&q=80';
Object.assign(window, {
  SA_SERVICES,
  SA_INDUSTRIES,
  SA_STATS,
  SA_NAV,
  SA_HERO_IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Shared Lucide icon helper for the Strategic Advisers website UI kit.
// Uses the canonical data-lucide + createIcons API.
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 1.75,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (host && window.lucide) {
      host.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      host.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          'stroke-width': strokeWidth
        }
      });
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.IndustryCard = __ds_scope.IndustryCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CTASection = __ds_scope.CTASection;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();
