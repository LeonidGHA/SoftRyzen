import { FC } from 'react';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { TypographyChapter } from '@/components/common/ProjectTypographyChapters/TypographyChapter';
import { ColorsChapter } from '@/components/common/ProjectTypographyChapters/ColorsChapter';

import { ProjectTypographyProps } from './ProjectTypography.props';

export const ProjectTypographySection: FC<ProjectTypographyProps> = ({
  project,
}) => {
  const { typography, colors } = project;

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
    >
      <div className="container">
        <TypographyChapter typography={typography} />
        <ColorsChapter colors={colors} />
      </div>
    </MSection>
  );
};
