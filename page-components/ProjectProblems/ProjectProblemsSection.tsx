import { FC, Key } from 'react';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { ProblemListCard } from '@/components/common/ProblemListCard';

import { ProjectProblemsProps } from './ProjectProblems.props';

export const ProjectProblemsSection: FC<ProjectProblemsProps> = ({
  project,
}) => {
  const { problem, solution } = project;

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white"
    >
      <div className="container">
        <div className="mb-10 xl:mb-0 xl:flex xl:items-center">
          <Title
            tag="h2"
            className="mb-6 md:mb-10 md:leading-normal xl:mb-0 xl:shrink-0 xl:basis-[309px] xl:pr-20"
          >
            {project.problem.title}
          </Title>
          <ul className="md:flex">
            {problem.list.map((item, ind: Key) => (
              <ProblemListCard
                noBorder
                item={{ index: ind, text: item }}
                key={ind}
              />
            ))}
          </ul>
        </div>

        <div className="mb-10 xl:mb-0 xl:flex xl:flex-row-reverse xl:items-center">
          <Title
            tag="h2"
            className="mb-6 md:mb-10 md:leading-normal xl:mb-0 xl:shrink-0 xl:basis-[309px] xl:pl-20"
          >
            {solution.title}
          </Title>
          <ul className="md:flex">
            {solution.list.map((item, ind: Key) => (
              <ProblemListCard item={{ index: ind, text: item }} key={ind} />
            ))}
          </ul>
        </div>
      </div>
    </MSection>
  );
};
