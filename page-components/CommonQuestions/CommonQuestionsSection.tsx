import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

import { animationOptions } from '@/utils/animationOptions';
import { QuestionsProps } from './CommonQuestionsSection.props';

import { MSection } from '@/components/common/Section';
import { QuestionItem } from '@/components/common/QuestionItem';
import { Title } from '@/components/typography/Title';

import LogoFAQ from '@/public/images/faq.svg';

export const CommonQuestionsSection: FC = () => {
  const { t } = useTranslation('commonQuestions');

  const questions = t('questions', {
    returnObjects: true,
    defaultValue: '',
  }) as QuestionsProps[];

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white_gray"
    >
      <div className="container">
        <Title
          tag="h2"
          variant="dark"
          className="tab-section-title relative mb-12 text-2xl md:mb-10 md:leading-[44px] xl:mb-11 xl:leading-[56px]"
        >
          {t('title')}
        </Title>
        <Tab.Group
          as="div"
          className="relative xl:flex xl:items-end xl:justify-end xl:gap-x-10"
        >
          <LogoFAQ className="absolute left-0 top-0 hidden h-[342px] w-[249px] xl:block" />
          <Tab.List
            as="ul"
            className="flex min-h-[392px] flex-col gap-y-12 md:min-h-[372px] xl:min-h-[348px] xl:w-[907px]"
          >
            {questions.map((question, index) => {
              return <QuestionItem key={index} question={question} />;
            })}
          </Tab.List>
        </Tab.Group>
      </div>
    </MSection>
  );
};
