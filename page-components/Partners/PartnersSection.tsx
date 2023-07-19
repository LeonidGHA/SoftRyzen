import { Key } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { router } from '@/utils/routes';
import { animationOptions } from '@/utils/animationOptions';

import { MSection } from '@/components/common/Section';
import { Slider } from '@/components/common/Slider';
import { Title } from '@/components/typography/Title';
import { PartnersCard } from '@/components/common/PartnersCard';

const partnersSliderOptions = {
  mobile: { perView: 2, spacing: 20 },
  tablet: { perView: 4, spacing: 18 },
  desktop: { perView: 6, spacing: 20 },
};

export const PartnersSection = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('partners');

  const partners = t('companies', {
    returnObjects: true,
    defaultValue: '',
  });

  return (
    <MSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animationOptions.section}
      className={`${
        pathname === router.HOME ? 'bg-white' : 'bg-white_gray'
      } md:py-10 xl:py-[60px]`}
    >
      <div className="container">
        <Title tag="h2" className="mb-6 md:mb-10 xl:mb-[60px]">
          {t('title')}
        </Title>

        <Slider partners options={partnersSliderOptions}>
          {partners.map((item, ind: Key) => (
            <PartnersCard
              key={ind}
              className="keen-slider__slide flex flex-col justify-between "
              partner={item}
            />
          ))}
        </Slider>
      </div>
    </MSection>
  );
};
