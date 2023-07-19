import { FC } from 'react';
import Image from 'next/image';

import { PartnersCardProps } from './PartnersCard.props';

export const PartnersCard: FC<PartnersCardProps> = ({
  partner,
  className,
  ...props
}) => {
  const { company, iconPath } = partner;

  return (
    <li
      className={`h-12 w-[150px] md:h-[52px] md:w-[162px] xl:h-[60px] xl:w-[186px] ${className}`}
      {...props}
    >
      <Image
        className="h-full w-full"
        width={186}
        height={60}
        src={iconPath}
        alt={company}
      />
    </li>
  );
};
