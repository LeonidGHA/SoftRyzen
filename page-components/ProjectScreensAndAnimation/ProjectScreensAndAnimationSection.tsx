import { FC } from 'react';
import Image from 'next/image';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { BriefAnimation } from '@/components/common/BriefAnimation';

import { ProjectScreensAndAnimationProps } from './ProjectScreensAndAnimation.props';

export const ProjectScreensAndAnimationSection: FC<
  ProjectScreensAndAnimationProps
> = ({ project }) => {
  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
    >
      <div className="container flex flex-col gap-5">
        <div className="relative aspect-[160/57] min-w-[280px] md:aspect-[176/63] xl:aspect-[304/83]">
          <Image
            src={project.framesDiagonal}
            alt={project.framesDiagonalAlt}
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 100vw"
          />
        </div>
        <div className="flex aspect-[320/97] min-h-[97px] justify-between overflow-hidden md:aspect-[704/217] xl:aspect-[1216/267]">
          <div className="aspect-[150/97] min-w-[150px] overflow-hidden md:aspect-[48/31] xl:aspect-[598/267]">
            <BriefAnimation
              outerWrapperClassNames="xl:relative xl:right-0 xl:top-0"
              innerWrapperClassNames="mdOnly:w-full"
              nonBrief
            />
          </div>
          <div className="relative aspect-[150/97] min-w-[150px] md:aspect-[48/31] xl:aspect-[598/267]">
            <Image
              src={project.phones}
              alt={project.phonesAlt}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, (max-width: 1279px) 50vw, 50vw"
            />
          </div>
        </div>
        <div className="relative aspect-[320/123] min-w-[280px] md:aspect-[704/269] xl:aspect-[1216/367]">
          <Image
            src={project.tablets}
            alt={project.tabletsAlt}
            fill
            className=""
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 100vw"
          />
        </div>
        <div className="flex aspect-[320/97] min-h-[97px] justify-between overflow-hidden md:aspect-[704/217] xl:aspect-[1216/267]">
          <div className="relative aspect-[150/97] min-w-[150px] md:aspect-[48/31] xl:aspect-[598/267]">
            <Image
              src={project.framesSmall}
              alt={project.framesSmallAlt}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 50vw, (max-width: 1279px) 50vw, 50vw"
            />
          </div>
          <div className="aspect-[150/97] min-w-[150px] overflow-hidden md:aspect-[48/31] xl:aspect-[598/267]">
            <BriefAnimation
              outerWrapperClassNames="xl:relative xl:right-0 xl:top-0"
              innerWrapperClassNames="mdOnly:w-full"
              nonBrief
            />
          </div>
        </div>
        <div className="relative aspect-[64/23] min-w-[280px] md:aspect-[176/63] xl:aspect-[304/80]">
          <Image
            src={project.framesLarge}
            alt={project.framesLargeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 100vw"
          />
        </div>
      </div>
    </MSection>
  );
};
