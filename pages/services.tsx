import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { withLayout } from '@/layout/Layout';

import { ServicesCardsSection } from '@/page-components/ServicesCards';
import { ServicesHero } from '@/page-components/ServicesHero';

const Services: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('services')}</title>
      </Head>
      <ServicesHero />
      <ServicesCardsSection />
    </>
  );
};

export default withLayout(Services);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'common',
      'header',
      'services',
      'footer',
      'servicesHeroAnimation',
    ])),
  },
});
