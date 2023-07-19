import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { FieldValues } from 'react-hook-form';

export interface RadioButtonProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value: string;
  watchValue?: FieldValues[string];
}
