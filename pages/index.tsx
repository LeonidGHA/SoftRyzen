import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { withLayout } from '@/layout/Layout';

import { OfferSection } from '@/page-components/OfferSection';
import { ContactsSection } from '@/page-components/Contacts';
import { FeedbacksSection } from '@/page-components/FeedbacksSection';
import { CommonQuestionsSection } from '@/page-components/CommonQuestions';
import { WorkStagesSection } from '@/page-components/WorkStages';
import { WorkWithUs } from '@/page-components/WorkWithUs';
import { PartnersSection } from '@/page-components/Partners';
import { TechnologiesSection } from '@/page-components/Technologies';
import { YouReceiveSection } from '@/page-components/YouReceive';
import { OurServicesSection } from '@/page-components/OurServices';
import { PridedWorksSection } from '@/page-components/PridedWorks';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <meta name="twitter:description" content={t('seo.description')} />
        <meta name="twitter:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:title" content={t('seo.title')} />
        <meta name="description" content={t('seo.description')} />
        <title>{t('seo.title')}</title>
      </Head>

      <OfferSection />
      <OurServicesSection />
      <PartnersSection />
      <WorkStagesSection />
      <WorkWithUs />
      <YouReceiveSection />
      <TechnologiesSection />
      <PridedWorksSection />
      <FeedbacksSection />
      <CommonQuestionsSection />
      <ContactsSection />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'common',
      'header',
      'offer',
      'feedbacks',
      'contacts',
      'form',
      'workStages',
      'commonQuestions',
      'partners',
      'footer',
      'workWithUs',
      'technologies',
      'youGet',
      'ourServices',
      'pridedWorks',
      'slider',
    ])),
  },
});
