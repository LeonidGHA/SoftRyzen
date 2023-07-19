import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { router } from '@/utils/routes';
import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { MainLink } from '@/components/button/MainLink';
import { WorksCard } from '@/components/common/WorksCard/WorksCard';

import { IWorkItem } from './PridedWorksSection.props';

export const PridedWorksSection: FC = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('pridedWorks');

  const i18worksHomePage = t('worksHomePage', {
    returnObjects: true,
    defaultValue: '',
  }) as IWorkItem[];

  const i18worksPortfolioPage = t('worksPortfolioPage', {
    returnObjects: true,
    defaultValue: '',
  }) as IWorkItem[];

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      id="prided-works"
      className={`${pathname === router.HOME ? 'bg-white_gray' : 'bg-white'}`}
    >
      <div className="container">
        <Title
          tag="h2"
          className="mb-6 md:mb-10 md:leading-[44px] xl:mb-[60px] xl:leading-[56px] smOnly:w-[193px]"
        >
          {pathname === router.HOME
            ? t('titleHomePage')
            : t('titlePortfolioPage')}
        </Title>

        <ul
          className={`flex flex-col ${
            pathname === router.HOME
              ? 'gap-[60px]'
              : 'gap-10 md:gap-[60px] xl:gap-[100px]'
          }`}
        >
          {pathname === router.HOME
            ? i18worksHomePage.map(work => {
                return <WorksCard key={work.title} work={work} />;
              })
            : i18worksPortfolioPage.map(work => {
                return <WorksCard key={work.title} work={work} />;
              })}
        </ul>

        {pathname === router.HOME ? (
          <MainLink
            href={router.PORTFOLIO}
            className="mx-auto mt-[60px] mdOnly:mt-12"
          >
            {t('portfolioLink')}
          </MainLink>
        ) : null}
      </div>
    </MSection>
  );
};
