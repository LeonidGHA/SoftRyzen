import { Link } from 'react-scroll';
import { useTranslation } from 'next-i18next';

import { Breadcrumbs } from '@/components/typography/Breadcrumbs';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { ServicesAnimation } from '@/components/common/ServicesAnimation';

import ArrowDown from '@/public/images/arrow-down.svg';

export const ServicesHero = () => {
  const { t } = useTranslation('services');

  return (
    <Section className="relative overflow-hidden bg-primary py-20 md:pb-[112px] md:pt-[100px]  xl:pb-[143px] ">
      <div className="container">
        <div className="absolute top-0 z-10 bg-transparent pt-[12px] ">
          <Breadcrumbs contacts />
        </div>
        <Title
          tag="h1"
          variant="light"
          className="mb-6 max-w-[520px] md:leading-[60px] xl:mb-10 xl:max-w-[701px] xl:!text-6xl xl:!leading-[72px]"
        >
          {t('hero.title')}
        </Title>
        <Paragraph
          variantFontSize="sm_16"
          variant="white"
          className="mdOnly::mb-6 mb-10 md:max-w-[350px] xl:max-w-[599px] xl:text-xl"
        >
          {t('hero.text')}
        </Paragraph>
        <Link
          to="services"
          href="#services"
          rel="noopener norefferer nofollow"
          offset={-60}
          smooth
          duration={600}
          className=" flex cursor-pointer items-center gap-1 scroll-auto text-xl font-bold text-white duration-300 hover:text-blue_light focus:text-blue_light "
        >
          {t('hero.button')}
          <ArrowDown className="h-[34px] w-[34px]" />{' '}
        </Link>
        <ServicesAnimation />
      </div>
    </Section>
  );
};
