import * as React from 'react';

/** A service offering card — icon, title, description, optional tags and link. */
export interface ServiceCardProps extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'style'> {
  /** Icon element (e.g. a Lucide icon node) shown in the tile */
  icon?: React.ReactNode;
  /** Service name */
  title: React.ReactNode;
  /** Short description */
  description?: React.ReactNode;
  /** Optional capability tags */
  tags?: string[];
  href?: string;
  /** Link row label. Default 'Learn more'. */
  linkLabel?: string;
  style?: React.CSSProperties;
}

export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
