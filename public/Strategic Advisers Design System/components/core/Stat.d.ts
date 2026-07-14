import * as React from 'react';

/** Large mono figure + label — the data-driven proof point used in stat bands. */
export interface StatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** The headline figure, e.g. "98%" or "3.4M" */
  value: React.ReactNode;
  /** Bold label under the figure */
  label?: React.ReactNode;
  /** Optional smaller descriptive line */
  sublabel?: React.ReactNode;
  align?: 'left' | 'center';
  /** Use 'on-navy' when placed on a dark section */
  tone?: 'default' | 'on-navy';
  style?: React.CSSProperties;
}

export declare function Stat(props: StatProps): JSX.Element;
