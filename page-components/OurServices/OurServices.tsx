import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { router } from '@/utils/routes';
import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { Service } from '@/components/common/Service';

import Arrow from '@/public/images/button-arrow.svg';

import { ServicesProps } from './OurServices.props';

export const OurServicesSection: FC = () => {
  const { t } = useTranslation('ourServices');

  const services = t('services', {
    returnObjects: true,
    defaultValue: '',
  }) as ServicesProps[];

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className="bg-white_gray"
    >
      <div className="container">
        <Title
          tag="h2"
          className="mb-6 md:mb-10 md:leading-[44px] xl:leading-[56px]"
        >
          {t('title')}
        </Title>
        <div className="relative xl:flex xl:justify-between">
          <div className="md:services-text-wrapper md:h-[248px] md:px-8 md:py-10 xl:h-[438px] xl:w-[383px] xl:px-10 xl:py-9">
            <Paragraph className="mb-6 md:w-[304px] md:text-xl xl:absolute xl:z-10 xl:w-[500px]">
              {t('text')}
            </Paragraph>
          </div>
          <div className="relative w-full bg-[#FFFFFF] xl:w-[833px]">
            <ul className="md:ml-auto md:flex md:flex-wrap xl:w-[556px]">
              {services.map(service => (
                <Service key={service.title} title={service.title} />
              ))}
            </ul>

            <Link
              href={router.SERVICES}
              className="relative block w-full bg-primary pb-[59px] pl-[67px] pr-[68px] pt-[59px] text-center text-lg font-light text-[#FFFFFF] duration-300 hover:bg-hover focus:bg-hover md:absolute md:bottom-0 md:right-[2px] md:w-[351px] md:text-xl xl:right-[555px] xl:w-[278px]"
            >
              {t('link')}
              <Arrow className="absolute right-5 top-5 h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </MSection>
  );
};
