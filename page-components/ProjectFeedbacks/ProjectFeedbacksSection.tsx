import { FC, Key } from 'react';

import { ProjectFeedbacksProps } from './ProjectFeedbacks.props';
import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Slider } from '@/components/common/Slider';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { FeedbackTextCard } from '@/components/common/FeedbackTextCard';
import { FeedbackVideoCard } from '@/components/common/FeedbackVideoCard';

export const ProjectFeedbacksSection: FC<ProjectFeedbacksProps> = ({
  project,
}) => {
  return project.feedbacks.length > 1 ? (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white"
    >
      <div className="container">
        <Title tag="h2" className="mb-6 md:mb-10 md:text-[40px]">
          {project.title}
        </Title>
        <Title tag="h2" className="mb-10 hidden xl:block">
          {project.titleExtended}
        </Title>
        <Slider className="xl:mb-12">
          {project.feedbacks.map((item, ind: Key) =>
            item.type === 'text' ? (
              <FeedbackTextCard
                key={ind}
                className="keen-slider__slide flex flex-col justify-between bg-white px-2 pb-2 pt-4 xl:px-4 xl:pb-3 "
                feedback={item}
                defaultValue={item.defaultValue.photoAlt}
              />
            ) : (
              <FeedbackVideoCard
                key={ind}
                className="keen-slider__slide"
                feedback={item}
                defaultValue={item.defaultValue.photoAlt}
              />
            ),
          )}
        </Slider>
      </div>
    </MSection>
  ) : (
    <MSection className="pb-[60px] md:pb-[120px] xl:pb-[165px]">
      <div className="container relative">
        <Title
          tag="h2"
          className="mb-6 md:mb-10 md:text-[40px] md:leading-[56px] xl:hidden"
        >
          {project.title}
        </Title>
        <Title tag="h2" className="mb-10 hidden xl:block">
          {project.titleExtended}
        </Title>
        <ul className="feedback-wrapper">
          {project.feedbacks[0].type === 'text' ? (
            <FeedbackTextCard
              className="mx-auto flex max-w-[750px] flex-col justify-between bg-white px-2 pb-2 pt-4 md:min-h-[400px] md:p-4 md:pb-3 md:pr-[18px] xl:px-4 xl:pb-3 xl:pr-[18px] smOnly:w-full"
              feedback={project.feedbacks[0]}
              defaultValue={project.feedbacks[0].defaultValue.photoAlt}
            />
          ) : (
            <FeedbackVideoCard
              className="relative mx-auto md:h-[400px] md:w-[392px] smOnly:w-full"
              feedback={project.feedbacks[0]}
              defaultValue={project.feedbacks[0].defaultValue.photoAlt}
            />
          )}
        </ul>
      </div>
    </MSection>
  );
};
