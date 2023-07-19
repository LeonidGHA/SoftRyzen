import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { withLayout } from '@/layout/Layout';

import { PridedWorksSection } from '@/page-components/PridedWorks';
import { PartnersSection } from '@/page-components/Partners';
import { FeedbacksSection } from '@/page-components/FeedbacksSection';
import { PortfolioHeroSection } from '@/page-components/PortfolioHero';

const Portfolio: NextPage = () => {
  const { t } = useTranslation('commonPortfolio');

  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
      </Head>

      <PortfolioHeroSection />
      <PridedWorksSection />
      <PartnersSection />
      <FeedbacksSection />
    </>
  );
};

export default withLayout(Portfolio);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'common',
      'commonPortfolio',
      'header',
      'footer',
      'feedbacks',
      'pridedWorks',
      'partners',
      'slider',
    ])),
  },
});
