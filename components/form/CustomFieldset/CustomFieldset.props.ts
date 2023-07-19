import { ReactNode } from 'react';

export interface CustomFieldsetProps {
  idAreaLabel: string;
  legend: string;
  styleCell?: string;
  className?: string;
  children: ReactNode;
}
