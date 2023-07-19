import { forwardRef } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { SectionProps } from './Section.props';

export const Section = forwardRef<HTMLElement, SectionProps>(function Search(
  { children, className, ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn('py-10 md:py-20 xl:py-[100px]', className)}
      {...props}
    >
      {children}
    </section>
  );
});

export const MSection = motion(Section);
