import { FC } from 'react';

import { CustomFieldsetProps } from './CustomFieldset.props';

export const CustomFieldset: FC<CustomFieldsetProps> = ({
  idAreaLabel,
  legend,
  styleCell,
  className,
  children,
}) => {
  return (
    <div
      role="group"
      aria-labelledby={idAreaLabel}
      className={`relative ${className}`}
    >
      <p
        id={idAreaLabel}
        className="relative mb-5 pb-4 text-lg font-semibold text-primary before:absolute before:bottom-0 before:block before:h-[2px] before:w-full before:rounded-sm before:bg-disabled before:content-[''] md:mb-[42px] md:text-xl"
      >
        {legend}
      </p>
      <div className={`grid gap-y-[22px] md:grid-cols-2 ${styleCell}`}>
        {children}
      </div>
    </div>
  );
};
