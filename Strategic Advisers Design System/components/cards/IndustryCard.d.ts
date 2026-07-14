import * as React from 'react';

/**
 * Image-forward card for an industry / sector the agency serves. Full-bleed
 * image with a navy scrim and label pinned to the base.
 */
export interface IndustryCardProps extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'style'> {
  /** Sector name, e.g. "Energy & Utilities" */
  label: React.ReactNode;
  /** Optional small count/kicker, e.g. "12 campaigns" */
  count?: React.ReactNode;
  /** Background image URL. Falls back to solid navy. */
  image?: string;
  href?: string;
  style?: React.CSSProperties;
}

export declare function IndustryCard(props: IndustryCardProps): JSX.Element;
