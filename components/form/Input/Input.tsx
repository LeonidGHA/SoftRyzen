import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { ErrorMessage } from '../ErrorMessage';

import { InputProps } from './Input.props';

export const Input = forwardRef(
  (
    { label, className = '', error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <label className="min-h-[97px] hover:text-primary ">
        <span className="block text-base font-light ">{label}</span>

        <input
          ref={ref}
          className={cn(
            'block w-full max-w-[390px] border-b bg-transparent py-4  text-sm duration-300 focus:text-primary focus:outline-1 focus:outline-primary',
            error ? 'border-error text-error' : 'border-primary text-dark',
            className,
          )}
          {...props}
        />

        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </label>
    );
  },
);

Input.displayName = 'Input';
