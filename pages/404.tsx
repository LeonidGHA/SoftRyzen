import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Link from 'next/link';

import { router } from '@/utils/routes';

import { withLayout } from '@/layout/Layout';
import { Paragraph } from '@/components/typography/Paragraph';
import { Section } from 'components/common/Section';
import { MainLink } from '@/components/button/MainLink';

import Error from '@/public/images/404/404.svg';
import Arrow from '@/public/images/button-arrow.svg';

const Custom404: NextPage = () => {
  const { t } = useTranslation('notFound');
  const title = `404 - ${t('title')}`;
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>{title}</title>
      </Head>

      <Section className="notFound bg-white py-[100px] xl:py-[147px]">
        <div className="container">
          <Error
            width="278"
            height="117"
            className="mx-auto mb-10 md:mb-[60px] md:h-[166px] md:w-[396px]"
          />
          <Paragraph className="mb-10 text-center text-lg font-semibold md:text-xl xl:mb-[64px]">
            {t('text')}
          </Paragraph>
          <div className="mx-auto flex max-w-[558px] flex-col gap-3 md:flex-row md:gap-10">
            <MainLink href={router.HOME} className="mx-auto">
              {t('buttons.home')}
            </MainLink>
            <Link
              href={router.CONTACTS}
              className="flex w-full max-w-[259px] items-center justify-center gap-5 bg-[#F5F6F9] px-5 py-3 text-center text-lg font-semibold text-primary duration-300 hover:bg-blue_light focus:bg-blue_light smOnly:mx-auto"
            >
              {t('buttons.contacts')}
              <Arrow className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default withLayout(Custom404);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'uk', [
      'header',
      'notFound',
      'common',
      'footer',
    ])),
  },
});
