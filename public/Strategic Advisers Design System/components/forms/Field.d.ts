import * as React from 'react';

/** Label + helper/error wrapper for form controls. */
export interface FieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  label?: React.ReactNode;
  /** id of the control the label points at */
  htmlFor?: string;
  /** Helper text shown when there is no error */
  hint?: React.ReactNode;
  /** Error message (replaces hint, turns red) */
  error?: React.ReactNode;
  required?: boolean;
  tone?: 'light' | 'on-navy';
  /** The control, e.g. an <Input /> */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): JSX.Element;
