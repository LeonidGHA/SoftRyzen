import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { withLayout } from '@/layout/Layout';

import { Breadcrumbs } from '@/components/typography/Breadcrumbs';
import { ContactsSection } from '@/page-components/Contacts';

const Contacts: NextPage = () => {
  const { t } = useTranslation('contacts');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <div className="bg-primary pt-5 ">
        <Breadcrumbs className="container " contacts />
        <ContactsSection />
      </div>
    </>
  );
};

export default withLayout(Contacts);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'common',
      'header',
      'contacts',
      'form',
      'footer',
    ])),
  },
});
