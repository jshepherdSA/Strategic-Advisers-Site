import * as React from 'react';

/** A client testimonial: quote plus attribution. Light card or navy panel tone. */
export interface TestimonialCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** The testimonial text */
  quote: React.ReactNode;
  /** Client name */
  name: React.ReactNode;
  /** Job title */
  role?: React.ReactNode;
  /** Organization */
  org?: React.ReactNode;
  /** 'light' card or 'navy' panel */
  tone?: 'light' | 'navy';
  style?: React.CSSProperties;
}

export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
