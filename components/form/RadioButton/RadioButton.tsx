import { ForwardedRef, forwardRef } from 'react';

import Check from '@/public/images/check.svg';
import Uncheck from '@/public/images/uncheck.svg';

import { RadioButtonProps } from './RadioButton.props';

export const RadioButton = forwardRef(
  (
    { label, value = '', watchValue, ...props }: RadioButtonProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <label className={`flex gap-3 `} aria-label={label}>
        <input
          ref={ref}
          className="sr-only"
          {...props}
          value={value}
          type="radio"
        />
        {watchValue === value ? (
          <Check className="mt-[2px] h-5 w-5 shrink-0" />
        ) : (
          <Uncheck className="mt-[2px] h-5 w-5 shrink-0" />
        )}
        <span className="text-base font-light text-dark">{label}</span>
      </label>
    );
  },
);

RadioButton.displayName = 'Input-radio';
