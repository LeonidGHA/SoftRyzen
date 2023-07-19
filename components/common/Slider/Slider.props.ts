import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface SliderProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  partners?: boolean;
  options?: {
    mobile: { perView: number; spacing: number };
    tablet: { perView: number; spacing: number };
    desktop: { perView: number; spacing: number };
  };
}
