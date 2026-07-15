import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'on-navy' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button for Strategic Advisers. Red = primary action,
 * navy = secondary; use `on-navy` on dark sections.
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Button label / content */
  children: React.ReactNode;
  /** Visual emphasis. Default 'primary' (red). */
  variant?: ButtonVariant;
  /** Size. Default 'md'. */
  size?: ButtonSize;
  /** Render as an anchor when set */
  href?: string;
  disabled?: boolean;
  /** Icon element before the label */
  iconLeft?: React.ReactNode;
  /** Icon element after the label */
  iconRight?: React.ReactNode;
  /** Stretch to container width */
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
