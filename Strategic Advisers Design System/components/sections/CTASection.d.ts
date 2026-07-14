import * as React from 'react';

/**
 * The strong closing call-to-action band — deep navy with the brand mark motif,
 * a large headline and buttons. The signature end-of-page moment.
 */
export interface CTASectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'title'> {
  eyebrow?: React.ReactNode;
  /** The CTA headline */
  title: React.ReactNode;
  intro?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** URL of the brand mark PNG used as the faint background motif */
  markSrc?: string;
  style?: React.CSSProperties;
}

export declare function CTASection(props: CTASectionProps): JSX.Element;
