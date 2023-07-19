import { ForwardedRef, forwardRef, useEffect, useState } from 'react';

import Check from '@/public/images/check.svg';
import Uncheck from '@/public/images/uncheck.svg';

import { CheckboxProps } from './Checkbox.props';

export const Checkbox = forwardRef(
  (
    { label, className, value = '', watchValue, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    useEffect(() => {
      if (!watchValue) {
        setChecked(false);
      }
    }, [watchValue]);

    return (
      <label
        className={`flex cursor-pointer items-start gap-3 ${className}`}
        onChange={handleChange}
        aria-label={label}
      >
        <input
          ref={ref}
          type="checkbox"
          className="sr-only"
          value={value}
          {...props}
        />

        {checked ? (
          <Check width={20} height={20} className=" mt-[2px] h-5 w-5" />
        ) : (
          <Uncheck width={20} height={20} className="mt-[2px] h-5 w-5" />
        )}

        <span className=" text-base font-light text-dark smOnly:max-w-[240px] mdOnly:max-w-[320px]">
          {label}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
