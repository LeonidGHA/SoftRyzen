import { FC } from 'react';
import Image from 'next/image';

import { IAboutTechnologiesItemProps } from './AboutTechnologiesItem.props';

export const AboutTechnologiesItem: FC<IAboutTechnologiesItemProps> = ({
  src,
  alt,
}) => {
  return (
    <li className="h-[40px] w-[68px] md:h-[48px] md:w-[83px]">
      <Image
        width={83}
        height={48}
        src={src}
        alt={alt}
        className=" h-full w-full brightness-0 duration-300 hover:brightness-100"
      />
    </li>
  );
};
