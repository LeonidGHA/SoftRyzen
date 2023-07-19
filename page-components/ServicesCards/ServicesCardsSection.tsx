import { FC } from 'react';
import { useTranslation } from 'next-i18next';

import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { ServiceCard } from '@/components/common/ServiceCard/ServiceCard';

import { ServiceInterface } from './ServiceCardsSection.props';

export const ServicesCardsSection: FC = () => {
  const { t } = useTranslation('services');

  const services = t('services', {
    returnObjects: true,
    defaultValue: '',
  }) as ServiceInterface[];

  const linkText = t('link');

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      id="services"
    >
      <div className="container">
        <h2 className="mb-6 text-2xl font-semibold md:mb-[72px] md:text-[32px] md:leading-[44px] xl:mb-[60px] xl:text-[40px] xl:leading-[56px]">
          {t('title')}
        </h2>
        <ul className="flex flex-col gap-6 md:gap-8 xl:gap-[60px]">
          {services.map(service => (
            <ServiceCard
              key={service.number}
              service={service}
              linkText={linkText}
            />
          ))}
        </ul>
      </div>
    </MSection>
  );
};
