import { ReactNode } from 'react';
import { LinkProps } from 'next/link';

export interface MainLinkProps extends LinkProps {
  children: ReactNode | string;
  className?: string;
  noArrow?: boolean;
}
