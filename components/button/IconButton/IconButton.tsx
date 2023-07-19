import { FC } from 'react';
import cn from 'classnames';

import { IconButtonProps } from './IconButton.props';

export const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  children,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(
        'h-fit w-fit duration-300 hover:outline-primary focus:outline-primary',
        className,
      )}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
