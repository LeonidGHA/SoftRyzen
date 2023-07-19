import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { withLayout } from '@/layout/Layout';
import { Title } from '@/components/typography/Title';
import { Section } from 'components/common/Section';
import { PolicyItem } from '@/components/common/PolicyItem';
import { Breadcrumbs } from '@/components/typography/Breadcrumbs';

const PrivacyPolicy: NextPage = () => {
  const { t } = useTranslation('policy');
  const items = t('items', {
    returnObjects: true,
    defaultValue: '',
  });

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <Section className="!pt-10">
        <div className="container ">
          <Breadcrumbs className="mb-[52px] md:mb-[72px]" />
          <Title
            tag="h1"
            className="mb-6 border-b-2 border-disabled pb-6 md:mb-10 md:pb-10 xl:mb-[60px] xl:pb-[60px]"
          >
            {t('title')}
          </Title>
          <div className="mx-auto max-w-[804px] md:text-xl">
            <ul className="mb-5">
              {items.map((item, index) => (
                <PolicyItem item={item} key={index} />
              ))}
            </ul>
            <p>{t('text')}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default withLayout(PrivacyPolicy);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'common',
      'header',
      'policy',
      'footer',
    ])),
  },
});
