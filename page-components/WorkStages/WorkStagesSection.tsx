import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { animationOptions } from '@/utils/animationOptions';
import { router } from '@/utils/routes';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { MainLink } from '@/components/button/MainLink';
import { StagesItem } from '@/components/common/StagesItem';

import Briefing from '@/public/images/stages/briefing.svg';
import Prototyping from '@/public/images/stages/prototyping.svg';
import DesignCreation from '@/public/images/stages/designCreation.svg';
import ProjectDevelopment from '@/public/images/stages/projectDevelopment.svg';
import ContentFilling from '@/public/images/stages/contentFilling.svg';
import Testing from '@/public/images/stages/testing.svg';
import ProjectDelivery from '@/public/images/stages/projectDelivery.svg';

export const WorkStagesSection: FC = () => {
  const { t } = useTranslation('workStages');

  const stages = [
    {
      title: t('stages.briefing.title'),
      icon: <Briefing />,
      text: t('stages.briefing.text'),
      number: '001',
    },
    {
      title: t('stages.prototyping.title'),
      icon: <Prototyping />,
      text: t('stages.prototyping.text'),
      number: '002',
    },
    {
      title: t('stages.designCreation.title'),
      icon: <DesignCreation />,
      text: t('stages.designCreation.text'),
      number: '003',
    },
    {
      title: t('stages.projectDevelopment.title'),
      icon: <ProjectDevelopment />,
      text: t('stages.projectDevelopment.text'),
      number: '004',
    },
    {
      title: t('stages.contentFilling.title'),
      icon: <ContentFilling />,
      text: t('stages.contentFilling.text'),
      number: '005',
    },
    {
      title: t('stages.testing.title'),
      icon: <Testing />,
      text: t('stages.testing.text'),
      number: '006',
    },
    {
      title: t('stages.projectDelivery.title'),
      icon: <ProjectDelivery />,
      text: t('stages.projectDelivery.text'),
      number: '007',
    },
  ];

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white_gray xl:pt-[124px]"
    >
      <div className="container">
        <Title
          tag="h2"
          variant="dark"
          className="mb-6 border-b-2 border-disabled pb-[22px] text-2xl md:pb-[38px] md:leading-[44px] xl:pb-[58px]"
        >
          {t('title')}
        </Title>
        <Tab.Group as="div" className="mb-10 md:mb-12 xl:flex xl:gap-x-[76px]">
          <div>
            <Paragraph className="mb-6 md:max-w-[575px] md:text-xl xl:mb-[200px] xl:max-w-[336px]">
              {t('description')}
            </Paragraph>
            <Tab.Panels className="mx-auto hidden h-[356px] w-[320px] xl:block">
              {stages.map(stage => (
                <Tab.Panel key={stage.number}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stage.icon}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
          <Tab.List
            as="ul"
            className="flex flex-col gap-5 xl:min-h-[734px] xl:w-[804px]"
          >
            {stages.map(stage => {
              return <StagesItem key={stage.number} stage={stage} />;
            })}
          </Tab.List>
        </Tab.Group>
      </div>
      <MainLink href={router.CONTACTS} className="mx-auto w-[260px]">
        {t('link')}
      </MainLink>
    </MSection>
  );
};
