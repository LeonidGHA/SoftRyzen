import { FC } from 'react';
import Image from 'next/image';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

import { ProjectUserFlowProps } from './ProjectUserFlow.props';

export const ProjectUserFlowSection: FC<ProjectUserFlowProps> = ({
  project,
}) => {
  const { title, imageUserFlow } = project;
  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
    >
      <div className="container">
        <Title tag="h2" className="mb-6 md:mb-10 xl:mb-[60px]">
          {title}
        </Title>

        <div className="border-y border-y-disabled p-6  md:px-[60px] md:py-10  xl:px-[100px]">
          <Image
            src={imageUserFlow.src}
            width={imageUserFlow.width}
            height={imageUserFlow.height}
            alt={imageUserFlow.alt}
            className="h-full w-full"
            priority
          />
        </div>
      </div>
    </MSection>
  );
};
