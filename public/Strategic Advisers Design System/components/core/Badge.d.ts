import * as React from 'react';

export type BadgeVariant = 'neutral' | 'navy' | 'accent' | 'solid' | 'solid-accent' | 'success' | 'on-navy';

/** Small uppercase mono pill for tags, categories and statuses. */
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
