import { FC } from 'react';

import { ErrorMessageProps } from './ErrorMessage.props';

export const ErrorMessage: FC<ErrorMessageProps> = ({ children, ...props }) => {
  return (
    <span className="mt-1 block text-xs tracking-wide text-error" {...props}>
      {children}
    </span>
  );
};
