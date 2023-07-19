import { FC } from 'react';
import Image from 'next/image';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';

import { ProjectScreensProps } from './ProjectScreens.props';

export const ProjectScreensSection: FC<ProjectScreensProps> = ({ project }) => {
  const { firstImage, secondImage, thirdImage, fourthImage } = project;
  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white"
    >
      <div className="container">
        <ul className="grid grid-cols-4 gap-5">
          <li className="col-span-4 max-h-[324px] xl:max-h-[560px]">
            <Image
              src={firstImage.src}
              width={1216}
              height={500}
              alt={firstImage.alt}
              className="h-full w-full"
              priority
            />
          </li>
          <li className="col-span-2 max-h-[134px] xl:max-h-[240px]">
            <Image
              src={secondImage.src}
              width={598}
              height={240}
              alt={secondImage.alt}
              className="h-full w-full"
              priority
            />
          </li>
          <li className="col-span-2 max-h-[134px] xl:max-h-[240px]">
            <Image
              src={thirdImage.src}
              width={598}
              height={240}
              alt={thirdImage.alt}
              className="h-full w-full"
              priority
            />
          </li>
          <li className="col-span-4 max-h-[186px] xl:max-h-[320px]">
            <Image
              src={fourthImage.src}
              width={1216}
              height={320}
              alt={fourthImage.alt}
              className="h-full w-full object-cover"
              priority
            />
          </li>
        </ul>
      </div>
    </MSection>
  );
};
