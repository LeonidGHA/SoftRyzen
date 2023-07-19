import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import Arrow from '@/public/images/button-arrow.svg';

import { MainLinkProps } from './MainLink.props';

export const MainLink: FC<MainLinkProps> = ({
  children,
  className,
  noArrow = false,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={cn(
        'flex w-[259px] items-center justify-center gap-5 bg-primary px-5 py-3 text-center text-lg font-semibold text-white_light duration-300 hover:bg-hover focus:bg-hover',
        className,
      )}
    >
      {children}
      {!noArrow ? <Arrow className="h-8 w-8" /> : null}
    </Link>
  );
};
