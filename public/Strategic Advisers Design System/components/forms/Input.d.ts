import * as React from 'react';

/** Text input or textarea with a navy focus ring. Pair with Field for labels. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'style'> {
  /** Render an 'input' (default) or 'textarea' */
  as?: 'input' | 'textarea';
  /** Use 'on-navy' on dark sections */
  tone?: 'light' | 'on-navy';
  /** Error state styling */
  invalid?: boolean;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
