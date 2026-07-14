import * as React from 'react';

/** Wide-tracked mono kicker above headlines — the brand's signature section label. */
export interface EyebrowProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'color'> {
  children: React.ReactNode;
  /** Show the short leading rule. Default true. */
  rule?: boolean;
  /** Color token. Default 'accent' (red). */
  color?: 'accent' | 'navy' | 'muted' | 'on-navy';
  style?: React.CSSProperties;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
