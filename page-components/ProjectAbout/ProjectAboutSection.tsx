import { FC } from 'react';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { AboutTechnologiesList } from '@/components/common/AboutTechnologies/AboutTechnologiesList';

import { ProjectAboutProps } from './ProjectAbout.props';

export const ProjectAboutSection: FC<ProjectAboutProps> = ({ project }) => {
  const { technologiesChapter, aboutChapter } = project;
  return (
    <MSection
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
    >
      <div className="container ">
        <div className=" mb-[40px] border-b border-disabled pb-6 md:pb-10 xl:mb-[60px] xl:flex xl:items-center xl:justify-between xl:pb-[60px]">
          <Title tag="h2" className="smOnly:mb-6 mdOnly:mb-10">
            {aboutChapter.title}
          </Title>
          <Paragraph
            variant="dark"
            className="text-base md:text-xl xl:w-[800px]"
          >
            {aboutChapter.text}
          </Paragraph>
        </div>
        <div className="border-b border-disabled pb-6 md:pb-10 xl:flex xl:items-center xl:justify-between">
          <Title tag="h2" className="smOnly:mb-6 mdOnly:mb-10">
            {technologiesChapter.title}
          </Title>
          <AboutTechnologiesList technologiesChapter={technologiesChapter} />
        </div>
      </div>
    </MSection>
  );
};
