import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { Form } from '@/page-components/Form';
import { ContactsList } from '@/components/common/ContactsList';

export const ContactsSection: FC = () => {
  const { t } = useTranslation('contacts');
  const router = useRouter();

  const variantsAnimation =
    router.pathname === '/' ? animationOptions.section : undefined;

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variantsAnimation}
      className="contacts bg-primary"
    >
      <div className="container md:flex md:justify-between">
        <div className="text-white_light md:w-[321px] xl:w-[488px]">
          <Title
            tag="h1"
            variant="light"
            className="mb-6 text-2xl font-semibold md:mb-7 md:leading-[68px] xl:text-[40px] xl:leading-[56px]"
          >
            {t('title')}
          </Title>
          <Paragraph
            variantFontSize="sm_16"
            variant="white"
            className="mb-8 md:mb-10 md:text-xl xl:max-w-[488px]"
          >
            {t('text')}
          </Paragraph>
          <Paragraph
            variantFontSize="sm_16"
            variant="white"
            className="mb-6 md:text-xl xl:mb-10 xl:max-w-[488px]"
          >
            {t('text2')}
          </Paragraph>
          <ContactsList />
        </div>
        <Form />
      </div>
    </MSection>
  );
};
