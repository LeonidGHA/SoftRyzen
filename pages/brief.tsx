import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { withLayout } from '@/layout/Layout';

import { Breadcrumbs } from '@/components/typography/Breadcrumbs';
import { BriefHero } from '@/page-components/BriefHero';
import { BriefForm } from '@/page-components/BriefForm';

const Brief: NextPage = () => {
  const { t } = useTranslation('brief');

  return (
    <div className="overflow-hidden">
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className="bg-white pt-3">
        <Breadcrumbs className="container " />
      </div>
      <BriefHero />
      <BriefForm />
    </div>
  );
};

export default withLayout(Brief);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'common',
      'header',
      'brief',
      'footer',
    ])),
  },
});
