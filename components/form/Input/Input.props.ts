import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

export interface InputProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: FieldErrors | any;
}
