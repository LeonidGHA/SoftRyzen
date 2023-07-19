import { FC } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { ProjectHeroProps } from './ProjectHero.props';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { IconLink } from '@/components/button/IconLink';
import { BgImgLogo } from '@/components/typography/InteractiveLogo/BgImgLogo';

import ArrowDown from '@/public/images/arrow-down.svg';
import Behance from '@/public/images/social/behance.svg';

export const ProjectHeroSection: FC<ProjectHeroProps> = ({ project }) => {
  return (
    <Section className="bg-white pb-0 pt-[54px] md:pb-[120px] md:pt-[74px] xl:pb-[164px] xl:pt-[74px]">
      <div className="container relative md:flex md:gap-1 xl:gap-0">
        <div className="md:w-[368px] xl:w-[572px]">
          <Title
            tag="h1"
            className="mb-6 leading-[48px] md:mb-9 md:text-[48px] md:leading-[56px] xl:mb-10 xl:leading-[98px]"
          >
            {project.title}
          </Title>
          <Paragraph className="mb-10 md:text-lg xl:mb-[30px] xl:w-[416px] xl:text-xl">
            {project.text}
          </Paragraph>
          <div className="flex items-center gap-8 smOnly:relative smOnly:mb-[62px]">
            <Link
              to="about"
              offset={-60}
              href="#about"
              rel="noopener norefferer nofollow"
              smooth
              duration={600}
              className="flex cursor-pointer items-center scroll-auto text-xl font-bold text-primary duration-300 hover:text-hover focus:text-hover"
            >
              {project.learnMoreLink}
              <ArrowDown className="h-[33px] w-[33px]" />
            </Link>
            {project.behanceLink.length > 0 ? (
              <IconLink
                href={project.behanceLink}
                className="group z-[2] hover:text-primary focus:text-primary smOnly:h-8 smOnly:w-8"
              >
                <Behance />
              </IconLink>
            ) : null}
            <BgImgLogo
              inDetails
              className="right-[-10px] top-[56px] duration-700 hover:top-[34px] md:right-[77px] md:top-[-160px] md:hover:top-[-182px] xl:right-[10px] xl:top-[-149px] xl:h-[360px] xl:w-[260px] xl:hover:top-[-180px] smOnly:w-[52.5%]"
            />
          </div>
        </div>
        <ul className="relative z-[2] aspect-[40/27] md:pt-5">
          <li className="relative h-full w-[90%] md:h-[225px] md:w-[298px] xl:h-[366px] xl:w-[486px]">
            <Image
              src={project.desktopImage}
              alt={project.desktopImageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 100vw"
            />
          </li>
          <li className="absolute bottom-[20px] right-0 h-[66.7%] w-[23.4%] md:bottom-[0px] md:right-[-34px] md:top-[72px] md:h-[144px] md:w-[75px] xl:right-[-55px] xl:top-[108px] xl:h-[236px] xl:w-[123px]">
            <Image
              src={project.mobileImage}
              alt={project.mobileImageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 100vw"
            />
          </li>
        </ul>
      </div>
    </Section>
  );
};
