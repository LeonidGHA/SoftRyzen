import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { BgImgLogo } from '@/components/typography/InteractiveLogo/BgImgLogo';

import Arrow from '@/public/images/button-arrow.svg';

import { IOfferButtons } from './OfferSection.props';

export const OfferSection: FC = () => {
  const { t } = useTranslation('offer');

  const i18OfferBtn = t('buttons', {
    returnObjects: true,
    defaultValue: '',
  }) as IOfferButtons;

  return (
    <Section className="offerBg overflow-hidden bg-white xl:pb-[63px] mdOnly:py-[100px] ">
      <div className="container md:relative">
        <div className="xl:pl-7">
          <Title
            tag="h1"
            className="mb-5 w-full md:max-w-[520px] md:leading-[68px] xl:max-w-[766px] xl:leading-[98px]"
          >
            {t('title')}
          </Title>
          <div className="mb-8 md:mb-20 xl:mb-[100px] xl:pl-1 smOnly:flex smOnly:items-center smOnly:justify-between">
            <p className="text-base font-bold text-dark md:text-lg xl:text-xl smOnly:w-[185px]">
              {t('subtitle')}
            </p>
            <Paragraph
              variant="dark"
              className=" w-[106px] border-l border-l-primary pl-3 text-xs font-normal md:absolute md:right-[32px] md:top-[85px] xl:right-[70px] xl:top-[120px] xl:w-[150px] xl:text-lg"
            >
              {t('description')}
            </Paragraph>
          </div>

          <div className="md:flex md:items-center xl:justify-between smOnly:border-t  smOnly:border-t-disabled smOnly:pt-5 mdOnly:gap-[14px]">
            <Paragraph
              variant="dark"
              className="max-w-[433px] text-base font-light md:text-lg smOnly:mb-8"
            >
              {t('paragraph')}
            </Paragraph>
            <div className="md:flex md:gap-3 xl:gap-10 smOnly:mb-3">
              <Link
                href={i18OfferBtn.firstBtn.url}
                className="flex w-full items-start justify-between bg-primary py-5 pl-[33px] pr-7 text-lg font-bold text-white_light duration-300 hover:bg-hover md:w-[225px] md:pb-9 md:pl-5 xl:w-[289px] xl:pb-[72px] xl:text-xl smOnly:mb-3"
              >
                <span className="w-[133px]">{i18OfferBtn.firstBtn.text}</span>
                <Arrow className="h-8 w-8" />
              </Link>

              <Link
                href={i18OfferBtn.secondBtn.url}
                className="flex w-full items-start justify-between bg-[#F5F6F9] py-5 pl-[33px] pr-7 text-lg font-bold text-dark duration-300 hover:bg-blue_light md:w-[225px] md:pb-9 md:pl-5 xl:w-[289px] xl:pb-[72px] xl:text-xl"
              >
                <span className="w-[133px]">{i18OfferBtn.secondBtn.text}</span>
                <Arrow className="h-8 w-8 text-primary" />
              </Link>
            </div>
          </div>
          <BgImgLogo className="smOnly:hidden" />
        </div>
      </div>
    </Section>
  );
};
