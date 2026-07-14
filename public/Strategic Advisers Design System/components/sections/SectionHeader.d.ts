import * as React from 'react';

/** Eyebrow + headline + intro — the consistent opener for every page section. */
export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  /** Mono kicker above the headline */
  eyebrow?: React.ReactNode;
  /** The section headline */
  title: React.ReactNode;
  /** Optional intro paragraph */
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'on-navy';
  /** Max width of the text column. Default '640px'. */
  maxWidth?: string;
  /** Optional action node (e.g. a Button) shown to the right when left-aligned */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
